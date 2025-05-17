'use server';
/**
 * @fileOverview An AI agent that suggests relevant tags for media items.
 *
 * - suggestMediaTags - A function that suggests tags for a media item.
 * - SuggestMediaTagsInput - The input type for the suggestMediaTags function.
 * - SuggestMediaTagsOutput - The return type for the suggestMediaTags function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestMediaTagsInputSchema = z.object({
  mediaDataUri: z
    .string()
    .describe(
      "A media file (image or video), as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  mediaType: z.enum(['image', 'video']).describe('The type of the media file.'),
  description: z.string().optional().describe('Optional description of the media item.'),
});
export type SuggestMediaTagsInput = z.infer<typeof SuggestMediaTagsInputSchema>;

const SuggestMediaTagsOutputSchema = z.object({
  tags: z.array(z.string()).describe('An array of suggested tags for the media item.'),
});
export type SuggestMediaTagsOutput = z.infer<typeof SuggestMediaTagsOutputSchema>;

export async function suggestMediaTags(input: SuggestMediaTagsInput): Promise<SuggestMediaTagsOutput> {
  return suggestMediaTagsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestMediaTagsPrompt',
  input: {schema: SuggestMediaTagsInputSchema},
  output: {schema: SuggestMediaTagsOutputSchema},
  prompt: `You are an AI assistant helping users tag their media files (images and videos).

You will receive a media file (either an image or a video) and, optionally, a description of the media item.

Based on the media and the description, you will suggest a list of relevant tags that the user can use to categorize and organize their portfolio.

Media Type: {{{mediaType}}}
Description: {{{description}}}
Media: {{media url=mediaDataUri}}

Suggest at least 5 tags.

Tags:`, 
});

const suggestMediaTagsFlow = ai.defineFlow(
  {
    name: 'suggestMediaTagsFlow',
    inputSchema: SuggestMediaTagsInputSchema,
    outputSchema: SuggestMediaTagsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

// OpportunityFinder flow
'use server';
/**
 * @fileOverview An AI agent that recommends opportunities based on user interests and skills.
 *
 * - findOpportunities - A function that handles the opportunity finding process.
 * - FindOpportunitiesInput - The input type for the findOpportunities function.
 * - FindOpportunitiesOutput - The return type for the findOpportunities function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FindOpportunitiesInputSchema = z.object({
  interestsAndSkills: z
    .string()
    .describe(
      'A description of the users interests and skills, so that the AI can recommend relevant opportunities.'
    ),
});
export type FindOpportunitiesInput = z.infer<typeof FindOpportunitiesInputSchema>;

const FindOpportunitiesOutputSchema = z.object({
  opportunities: z
    .string()
    .describe('A list of opportunities relevant to the user, as a string.'),
});
export type FindOpportunitiesOutput = z.infer<typeof FindOpportunitiesOutputSchema>;

export async function findOpportunities(input: FindOpportunitiesInput): Promise<FindOpportunitiesOutput> {
  return findOpportunitiesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'findOpportunitiesPrompt',
  input: {schema: FindOpportunitiesInputSchema},
  output: {schema: FindOpportunitiesOutputSchema},
  prompt: `You are a helpful assistant that recommends opportunities to students based on their interests and skills.

  Given the following interests and skills, what opportunities would you recommend?

  Interests and Skills: {{{interestsAndSkills}}}
  `,
});

const findOpportunitiesFlow = ai.defineFlow(
  {
    name: 'findOpportunitiesFlow',
    inputSchema: FindOpportunitiesInputSchema,
    outputSchema: FindOpportunitiesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

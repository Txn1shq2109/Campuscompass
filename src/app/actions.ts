"use server";

import { findOpportunities } from '@/ai/flows/opportunity-finder';
import type { FindOpportunitiesInput, FindOpportunitiesOutput } from '@/ai/flows/opportunity-finder';

export async function getRecommendedOpportunities(
  input: FindOpportunitiesInput
): Promise<FindOpportunitiesOutput> {
  try {
    const result = await findOpportunities(input);
    return result;
  } catch (error) {
    console.error("Error in getRecommendedOpportunities:", error);
    // In a real app, you'd want more robust error handling and logging
    return { opportunities: "Sorry, I couldn't find any opportunities at the moment. Please try again later." };
  }
}

'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating a personalized shopping list based on selected recipes,
 * adapting to dietary restrictions and available ingredients.
 *
 * - generateShoppingList - A function that handles the shopping list generation process.
 * - GenerateShoppingListInput - The input type for the generateShoppingList function.
 * - GenerateShoppingListOutput - The return type for the generateShoppingList function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateShoppingListInputSchema = z.object({
  recipes: z.array(
    z.object({
      name: z.string().describe('The name of the recipe.'),
      ingredients: z.array(z.string()).describe('The ingredients required for the recipe.'),
    })
  ).describe('A list of recipes selected by the user.'),
  dietaryRestrictions: z.string().optional().describe('Any dietary restrictions the user has (e.g., vegetarian, gluten-free).'),
  availableIngredients: z.array(z.string()).optional().describe('A list of ingredients the user already has.'),
});

export type GenerateShoppingListInput = z.infer<typeof GenerateShoppingListInputSchema>;

const GenerateShoppingListOutputSchema = z.object({
  shoppingList: z.array(z.string()).describe('A list of ingredients to buy, taking into account dietary restrictions and available ingredients.'),
});

export type GenerateShoppingListOutput = z.infer<typeof GenerateShoppingListOutputSchema>;

export async function generateShoppingList(input: GenerateShoppingListInput): Promise<GenerateShoppingListOutput> {
  return generateShoppingListFlow(input);
}

const generateShoppingListPrompt = ai.definePrompt({
  name: 'generateShoppingListPrompt',
  input: {schema: GenerateShoppingListInputSchema},
  output: {schema: GenerateShoppingListOutputSchema},
  prompt: `You are a personal shopping assistant. Generate a shopping list based on the recipes the user wants to cook, while considering their dietary restrictions and available ingredients.

Here are the recipes the user wants to cook:
{{#each recipes}}
- {{this.name}}: {{this.ingredients}}
{{/each}}

{{#if dietaryRestrictions}}
The user has the following dietary restrictions: {{dietaryRestrictions}}
{{/if}}

{{#if availableIngredients}}
The user already has the following ingredients: {{availableIngredients}}
{{/if}}

Generate a shopping list with only the items that the user needs to buy. The shopping list should be a simple array of ingredients.

Shopping List:
`,
});

const generateShoppingListFlow = ai.defineFlow(
  {
    name: 'generateShoppingListFlow',
    inputSchema: GenerateShoppingListInputSchema,
    outputSchema: GenerateShoppingListOutputSchema,
  },
  async input => {
    const {output} = await generateShoppingListPrompt(input);
    return output!;
  }
);

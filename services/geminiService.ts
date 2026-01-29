
import { GoogleGenAI, Type } from "@google/genai";
import { Recipe } from "../types";

export const generateGelatinRecipe = async (goal: string, preferences: string): Promise<Recipe> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Genera una receta saludable utilizando gelatina (sin azúcar/natural) enfocada en: ${goal}. Considera estas preferencias: ${preferences}. La receta debe ser fácil de hacer en casa. Responde en español.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING, description: 'Nombre creativo de la receta de gelatina.' },
          ingredients: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: 'Lista de ingredientes con cantidades.'
          },
          instructions: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: 'Pasos para la preparación.'
          },
          benefits: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: 'Beneficios específicos de esta mezcla para la salud y quema de grasa.'
          }
        },
        required: ["name", "ingredients", "instructions", "benefits"]
      }
    }
  });

  try {
    return JSON.parse(response.text.trim()) as Recipe;
  } catch (error) {
    console.error("Error parsing Gemini response:", error);
    throw new Error("No se pudo generar la receta.");
  }
};


import React, { useState } from 'react';
import { generateGelatinRecipe } from '../services/geminiService';
import { Recipe } from '../types';

const RecipeGenerator: React.FC = () => {
  const [goal, setGoal] = useState('Pérdida de Grasa Abdominal');
  const [prefs, setPrefs] = useState('');
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await generateGelatinRecipe(goal, prefs);
      setRecipe(data);
    } catch (err) {
      setError('Hubo un error al conectar con el sistema de IA. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="recipe-tool" className="mt-12 p-6 bg-blue-50 border border-blue-100 rounded-2xl shadow-sm">
      <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">
        Generador de Tu Plan de Gelatina IA
      </h3>
      <p className="text-gray-600 mb-6 text-center">
        Personaliza tu receta de gelatina quemagrasa basada en tus objetivos personales.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Tu Objetivo Principal</label>
          <select 
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-white"
          >
            <option>Pérdida de Grasa Abdominal</option>
            <option>Control del Apetito</option>
            <option>Salud de Articulaciones y Piel</option>
            <option>Desintoxicación Nocturna</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Preferencias o Alergias (opcional)</label>
          <input 
            type="text"
            placeholder="Ej: sin edulcorantes, me gusta el limón..."
            value={prefs}
            onChange={(e) => setPrefs(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-white"
          />
        </div>

        <button 
          onClick={handleGenerate}
          disabled={loading}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50"
        >
          {loading ? (
            <><i className="fas fa-circle-notch fa-spin"></i> <span>Preparando tu plan...</span></>
          ) : (
            <><span>Obtener Mi Receta Personalizada</span> <i className="fas fa-magic"></i></>
          )}
        </button>

        {error && <p className="text-red-500 text-sm text-center font-medium">{error}</p>}
      </div>

      {recipe && (
        <div className="mt-8 bg-white p-6 rounded-xl border border-blue-200 animate-fade-in shadow-md">
          <h4 className="text-xl font-bold text-gray-800 mb-2">{recipe.name}</h4>
          
          <div className="mb-4">
            <h5 className="font-semibold text-blue-700 text-sm uppercase tracking-wider mb-2">Ingredientes</h5>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {recipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
            </ul>
          </div>

          <div className="mb-4">
            <h5 className="font-semibold text-blue-700 text-sm uppercase tracking-wider mb-2">Instrucciones</h5>
            <ol className="list-decimal list-inside space-y-1 text-gray-700">
              {recipe.instructions.map((step, i) => <li key={i}>{step}</li>)}
            </ol>
          </div>

          <div>
            <h5 className="font-semibold text-green-700 text-sm uppercase tracking-wider mb-2">Efecto Metabólico</h5>
            <div className="flex flex-wrap gap-2">
              {recipe.benefits.map((benefit, i) => (
                <span key={i} className="bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full border border-green-100">
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeGenerator;

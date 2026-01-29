
import React, { useState } from 'react';

const App: React.FC = () => {
  const [spots] = useState(3);

  const handleAction = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-['Montserrat',sans-serif]">
      {/* Contenedor Principal Ultra Minimalista */}
      <main className="max-w-[700px] mx-auto pt-8 pb-20 px-6">
        
        {/* Encabezado Premium Amanda Mars */}
        <header className="flex items-center justify-between mb-12 pb-6 border-b border-gray-100">
          <div className="flex items-center space-x-4">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrF_gsfOrvdVuo_NEbniQTo6gDvq8w9tChNA&s" 
              alt="Amanda Mars" 
              className="w-14 h-14 rounded-full object-cover border border-gray-100 shadow-sm"
            />
            <div className="flex flex-col">
              <span className="text-base font-extrabold text-[#1E40AF] uppercase tracking-tight">Amanda Mars</span>
              <div className="flex flex-wrap items-center text-[11px] text-gray-400 mt-1">
                <span className="font-medium">Investigación sobre Bienestar</span>
                <span className="mx-2">•</span>
                <span className="flex items-center"><i className="far fa-clock mr-1"></i> Hace 7 horas</span>
                <span className="mx-2">•</span>
                <span className="flex items-center"><i className="far fa-eye mr-1"></i> 28,161 visualizaciones</span>
              </div>
            </div>
          </div>
          <div className="hidden sm:block text-orange-500">
            <i className="fas fa-bookmark text-2xl"></i>
          </div>
        </header>

        {/* Sección de Titulares de Impacto */}
        <section className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-[900] text-red-600 mb-4 leading-tight uppercase tracking-tighter">
            El verdadero truco de la chía
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 leading-snug">
            que fue censurado tras derretir 16 kg de grasa en 3 semanas
          </h2>
        </section>

        {/* Visual de Video con GIF de Chía */}
        <div className="relative mb-12 cursor-pointer group rounded-xl overflow-hidden shadow-2xl shadow-blue-100/50" onClick={handleAction}>
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/5 group-hover:bg-transparent transition-all duration-300">
            <div className="bg-red-600 w-20 h-14 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-play text-white text-3xl ml-1"></i>
            </div>
          </div>
          <img 
            src="https://i.imgur.com/EFCTvcw.gif" 
            alt="El Truco de la Chía en Acción" 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Botón de Llamada a la Acción Principal */}
        <div className="flex justify-center mb-16">
          <button 
            onClick={handleAction}
            className="w-full bg-[#0099FF] hover:bg-blue-600 text-white text-xl font-black py-5 px-10 rounded-xl shadow-xl shadow-blue-200 transition-all uppercase tracking-wider active:scale-[0.98]"
          >
            Ver Ahora
          </button>
        </div>

        {/* Cuerpo del Artículo (Copy Persuasivo con Negritas) */}
        <article className="text-left space-y-8 text-[19px] text-gray-700 leading-relaxed">
          <p>
            Una bebida natural conocida como el <strong>truco de la chía</strong> está siendo cuestionada discretamente tras afirmar que ayuda a <strong>reducir la inflamación en las células grasas</strong> y a <strong>restablecer el equilibrio natural del cuerpo para quemar grasa</strong>, sin dietas, inyecciones ni ejercicio extremo.
          </p>
          
          <p>
            Según fuentes, este sencillo remedio casero funciona de forma muy diferente a las pastillas para adelgazar y los planes restrictivos, centrándose en lo que investigaciones recientes describen como la <strong>verdadera causa de la acumulación de grasa persistente</strong>.
          </p>

          <p>
            Informes confidenciales afirman que este método se ha utilizado discretamente durante años, mucho antes de que comenzara a circular en línea, lo que podría explicar por qué ahora está atrayendo atención no deseada.
          </p>

          <p>
            Las personas que han luchado contra la hinchazón durante años ahora notan <strong>cambios visibles en cuestión de días</strong>: la ropa les queda mejor, la hinchazón disminuye y recuperan energía más rápido de lo esperado.
          </p>

          <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100/50 italic shadow-sm">
            <p className="flex items-start text-gray-800">
              <span className="text-3xl mr-4 leading-none">👉</span>
              <span>Haz clic en el botón de abajo para obtener más información sobre este descubrimiento y ver cómo aplicar el Truco de la Vitamina de Chía en casa, a partir de <strong>mañana por la mañana</strong>.</span>
            </p>
          </div>

          <p className="text-sm text-gray-400 text-center font-medium pt-4 tracking-tight">
            Advertencia: Si esta información se comparte ampliamente, el acceso podría restringirse de nuevo.
          </p>

          {/* Bloque de Urgencia Final */}
          <div className="mt-14 p-8 border-2 border-red-50 bg-red-50/20 rounded-2xl text-center space-y-4">
            <p className="text-red-600 font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse mr-2"></span>
              Contenido Sensible
            </p>
            <p className="text-gray-900 font-extrabold text-xl leading-snug">
              Este video puede ser eliminado en cualquier momento. Míralo ahora mientras aún esté disponible.
            </p>
            <div className="inline-block bg-blue-600 text-white font-black text-sm px-4 py-2 rounded-full shadow-lg shadow-blue-100">
              LUGARES DISPONIBLES: {spots} RESTANTES
            </div>
          </div>
        </article>

        {/* Segundo Botón de Acción */}
        <div className="mt-14">
          <button 
            onClick={handleAction}
            className="w-full bg-[#0099FF] hover:bg-blue-600 text-white text-xl font-black py-5 px-10 rounded-xl shadow-xl shadow-blue-200 transition-all uppercase tracking-wider active:scale-[0.98]"
          >
            Ver ahora
          </button>
        </div>
      </main>

      {/* Footer Minimalista Profesional */}
      <footer className="max-w-[700px] mx-auto px-6 pb-24 text-center">
        <div className="w-12 h-1 bg-gray-100 mx-auto mb-8 rounded-full"></div>
        <p className="text-[10px] text-gray-400 leading-relaxed uppercase tracking-widest opacity-70">
          The information on this website is for informational purposes only and is not intended as medical advice. 
          Statements regarding dietary supplements have not been evaluated by the FDA and are not intended to 
          diagnose, treat, cure, or prevent any disease. Individual results may vary.
        </p>
      </footer>
    </div>
  );
};

export default App;

import React from 'react';
import heroImg from '/img/Banner4.png';
import imgBannerIn from '/img/imgSobreBanner.png';
import { FaSpaceShuttle } from 'react-icons/fa';
const Hero = () => {
  const estiloFondo = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  };

  return (
    <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={imgBannerIn} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <div style={estiloFondo} className="p-2 mb-1 rounded-lg">
            <h1 className="text-5xl font-bold">Tu Espacio en Marte</h1>
            <p className="py-6">
              Adquiere tu propio pedazo de Marte y sé pionero en la colonización del espacio. Vive la experiencia de formar parte
              de una comunidad futurista en el corazón del Planeta Rojo.
            </p>
          </div>
          <button className="btn btn-primary">
            Despegar
            <FaSpaceShuttle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

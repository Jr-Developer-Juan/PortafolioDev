import React, { useState, useEffect, Suspense } from "react";

// Importar Spline de manera diferida para mejorar rendimiento
const Spline = React.lazy(() => import("@splinetool/react-spline"));

const Bot = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Se carga cuando al menos un 30% del elemento es visible
    );

    const target = document.getElementById("spline-container");
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="spline-container"
      className="mt-[-150px] relative w-full h-[500px] md:h-[600px] lg:h-[730px] flex justify-center items-center overflow-hidden"
    >
      {isVisible && (
        <Suspense fallback={<div className="text-white">Cargando...</div>}>
          <Spline
            scene="https://prod.spline.design/gbwSTfOm48yDkPNw/scene.splinecode"
            className="object-contain w-full h-full"
          />
        </Suspense>
      )}
    </div>
  );
};

export default Bot;

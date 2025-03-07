import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/blazeStore.png";
import Img2 from "../assets/NobleNest.png";
import Img3 from "../assets/TravelAgency.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col flex-1 mb-10 gap-y-12 lg:mb-0"
          >
            <div>
              <h2 className="leading-tight h2 text-accent">
                Mis <br /> Trabajos
              </h2>
              <p className="max-w-sm mb-10">
                Estos son algunos de los proyectos que he creado como
                desarrollador Front-End. Cada uno refleja mi enfoque en diseño,
                funcionalidad y en crear experiencias que realmente marquen la
                diferencia.
              </p>
              <a
                href="https://github.com/Jr-Developer-Juan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-sm">Mis Proyectos</button>
              </a>
            </div>
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="relative overflow-hidden border-2 group border-white/50 rounded-xl"
            >
              <a
                href="https://desing-home.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-50"
              ></a>
              <div className="absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70"></div>
              <img
                className="transition-all duration-500 group-hover:scale-125"
                src={Img2}
                alt=""
              />
              <div className="absolute z-50 transition-all duration-500 -bottom-full left-12 group-hover:bottom-24 sm:left-8 sm:text-sm md:left-8 md:text-lg">
                <span className="text-gradient">Dev: Juan Restrepo</span>
              </div>
              <div className="absolute z-50 transition-all duration-700 -bottom-full left-12 group-hover:bottom-14 sm:left-8 sm:text-xl md:left-8 md:text-2xl">
                <span className="text-3xl text-white">Noble Nest</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col flex-1 gap-y-10"
          >
            <div className="relative flex overflow-hidden border-2 group border-white/50 rounded-xl">
              <a
                href="https://blaze-store.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-50"
              ></a>
              <div className="absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70"></div>
              <img
                className="transition-all duration-500 group-hover:scale-125"
                src={Img1}
                alt=""
              />
              <div className="absolute z-50 transition-all duration-500 -bottom-full left-12 group-hover:bottom-24 sm:left-8 sm:text-sm md:left-8 md:text-lg">
                <span className="text-gradient">Dev: Juan Restrepo</span>
              </div>
              <div className="absolute z-50 transition-all duration-700 -bottom-full left-12 group-hover:bottom-14 sm:left-8 sm:text-xl md:left-8 md:text-2xl">
                <span className="text-3xl text-white">Blaze Store</span>
              </div>
            </div>
            <div className="relative overflow-hidden border-2 group border-white/50 rounded-xl">
              <a
                href="https://travel-agency-gilt-five.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-50"
              ></a>
              <div className="absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70"></div>
              <img
                className="transition-all duration-500 group-hover:scale-125"
                src={Img3}
                alt=""
              />
              <div className="absolute z-50 transition-all duration-500 -bottom-full left-12 group-hover:bottom-24 sm:left-8 sm:text-sm md:left-8 md:text-lg">
                <span className="text-gradient">Dev: Juan Restrepo</span>
              </div>
              <div className="absolute z-50 transition-all duration-700 -bottom-full left-12 group-hover:bottom-14 sm:left-8 sm:text-xl md:left-8 md:text-2xl">
                <span className="text-3xl text-white">Travel Agency</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;

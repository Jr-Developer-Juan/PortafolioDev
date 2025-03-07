import React from "react";
import { FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Bot from "./Bot";

const Banner = () => {
  const handleDownload = () => {
    const file1 = document.createElement("a");
    file1.href = "/CV Software Developer.pdf";
    file1.download = "Software Developer.pdf";
    file1.click();

    const file2 = document.createElement("a");
    file2.href = "/Dev Profile.pdf";
    file2.download = "Dev Profile.pdf";
    file2.click();
  };

  return (
    <section
      className="relative min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container flex flex-col items-center justify-between mx-auto lg:flex-row">
        {/* Sección de texto a la izquierda */}
        <div className="w-full text-center lg:w-1/2 font-secondary lg:text-left">
          <motion.h1
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-[55px] mb-2 font-bold leading-[0.8] lg:text-[80px]"
          >
            JUAN <span>RESTREPO</span>
          </motion.h1>

          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="mb-6 text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]"
          >
            <TypeAnimation
              sequence={[
                "Desarrollador",
                2000,
                "De Software",
                2000,
                "Front-End",
                2000,
                "Full-Stack",
                2000,
                "JavaScript",
                2000,
                "Junior",
                2000,
              ]}
              speed={50}
              className="text-accent"
              wrapper="span"
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="max-w-lg mx-auto mb-8 lg:mx-0"
          >
            El desarrollo de software es la puerta de entrada al mundo digital,
            donde las posibilidades son infinitas y el único límite es la
            imaginación del programador.
          </motion.p>

          {/* Redes sociales */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex text-[30px] gap-x-6 max-w-max mx-auto lg:mx-0 mb-12"
          >
            <a
              href="https://github.com/Jr-Developer-Juan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-3xl text-white transition duration-300 hover:text-gray-400" />
            </a>
            <a
              href="https://www.instagram.com/esteban__.64/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-3xl text-white transition duration-300 hover:text-gray-400" />
            </a>
            <a
              href="https://wa.me/3004577246"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-3xl text-white transition duration-300 hover:text-gray-400" />
            </a>
          </motion.div>

          {/* Botones */}
          <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex items-center mx-auto mb-12 max-w-max gap-x-6 lg:mx-0"
          >
            <a
              href="https://wa.me/3004577246"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-sm">Contactame!</button>
            </a>
            <button onClick={handleDownload} className="btn btn-sm">
              Download CV!
            </button>
          </motion.div>
        </div>

        <div className="hidden w-full h-full scale-75 lg:flex lg:w-1/2">
          <Bot />
        </div>
      </div>
    </section>
  );
};

export default Banner;

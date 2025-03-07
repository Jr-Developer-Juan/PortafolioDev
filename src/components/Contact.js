import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  return (
    <div className="relative mt-32 section" id="contact">
      <footer className="relative w-full h-screen py-20">
        {/* Background Blur Effect */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-lg"></div>

        <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="container relative z-10 flex flex-col justify-between gap-12 px-6 mx-auto text-white lg:flex-row lg:px-16"
        >
          {/* Left Column - Info */}
          <div className="flex flex-col items-start w-full lg:w-1/3">
            <h2 className="mb-4 text-4xl font-bold text-gradient">Juan Esteban</h2>
            <p className="mb-4 text-lg">Desarrollador de Software | Especializado en Web y AI</p>
            <p className="mb-6">Ofrezco servicios de desarrollo web, aplicaciones web y soluciones de inteligencia artificial personalizadas para tu negocio.</p>
            <div className="flex mb-6 space-x-6">
              <a href="https://github.com/Jr-Developer-Juan" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-3xl transition-all duration-300 hover:scale-125 hover:text-gray-200" />
              </a>
              <a href="https://www.linkedin.com/in/jr-dev-juan-restrepo/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl transition-all duration-300 hover:scale-125 hover:text-gray-200" />
              </a>
              <a href="https://www.instagram.com/juan_restrepo.64/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl transition-all duration-300 hover:scale-125 hover:text-gray-200" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100009451163083" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-3xl transition-all duration-300 hover:scale-125 hover:text-gray-200" />
              </a>
              <a href="https://wa.me/3004577246" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-3xl transition-all duration-300 hover:scale-125 hover:text-gray-200" />
              </a>
            </div>
            <p className="text-sm">Dirección: Medellín, Antioquia, Colombia</p>
            <p className="text-sm">Correo electrónico: <span className="font-semibold">Juanestebanrestrepo64@gmail.com</span></p>
            <p className="text-sm">Teléfono: <span className="font-semibold">+57 3004577246</span></p>
          </div>

          {/* Center Column - Tecnologías */}
          <div className="flex flex-col items-start w-full lg:w-1/3">
            <h3 className="mb-4 text-2xl font-semibold">Tecnologías que manejo:</h3>
            <ul className="pl-6 space-y-2 list-disc">
              <li>JavaScript, React, Node.js, Express</li>
              <li>Tailwind CSS, Shadcn, Next.js</li>
              <li>MongoDB, MySQL, Prisma</li>
              <li>Inteligencia Artificial con Python</li>
              <li>APIs RESTful y GraphQL</li>
            </ul>
          </div>

          {/* Right Column - Servicios */}
          <div className="flex flex-col items-start w-full lg:w-1/3">
            <h3 className="mb-4 text-2xl font-semibold">Servicios que ofrezco:</h3>
            <ul className="pl-6 space-y-2 list-disc">
              <li>Desarrollo Web Profesional</li>
              <li>Aplicaciones Web Interactivas</li>
              <li>Desarrollo de Soluciones con Inteligencia Artificial</li>
              <li>Consultoría y Desarrollo en APIs</li>
              <li>Soluciones Personalizadas de Software</li>
              <li>Optimización de Sistemas y Web</li>
            </ul>
          </div>
        </motion.div>

        <div className="w-full py-4 text-sm text-center text-gray-300">
          <p>© {new Date().getFullYear()} Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
}

export default Contact;

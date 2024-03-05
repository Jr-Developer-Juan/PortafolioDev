import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  return (
    <div className='flex flex-col justify-center mt-32 section' id='contact'>
      <motion.div
       variants={fadeIn('left', 0.3)}
       initial="hidden"
       whileInView={"show"}
       viewport={{ once: false, amount: 0.3 }} 
      className='text-gradient h2'>Contacto</motion.div>
      <motion.div
       variants={fadeIn('right', 0.3)}
       initial="hidden"
       whileInView={"show"}
       viewport={{ once: false, amount: 0.3 }}
      class="w-full max-w-2xl">
        <form class="bg-transparent shadow-2xl rounded px-8 pt-6 pb-8 mb-4 text-gradient">
          <div class="mb-4">
            <label class="block text-gradient text-sm font-bold mb-2" for="username">
              Email
            </label>
            <input type="Email" class="shadow appearance-none w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="email" placeholder="Correo Electronico" />
          </div>
          <div class="mb-6">
            <label class="block text-gradient text-sm font-bold mb-2" for="mensaje">
              Mensaje
            </label>
            <input class="shadow appearance-none rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline" id="mensaje" type="text" placeholder="Mensaje" />
          </div>
          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Enviar
            </button>
          </div>
        </form>
      </motion.div>
      <footer className="w-full py-8 bg-20px mt-text-white">
      <motion.div
       variants={fadeIn('left', 0.3)}
       initial="hidden"
       whileInView={"show"}
       viewport={{ once: false, amount: 0.3 }}
      className="container flex flex-col items-center justify-center mx-auto">
        <h2 className="mb-4 text-2xl font-semibold text-gradient">Juan Esteban Restrepo</h2>
        <p className="mb-4">Número de celular: +57 3004577246</p>
        <p className="mb-4 text-center">Correo electrónico: Juanestebanrestrepo64@gmail.com</p>
        <div className="flex mb-4 space-x-4">
          <a href="https://github.com/Jr-Developer-Juan" target="_blank" rel="noopener noreferrer"><FaGithub className="text-3xl text-white transition duration-300 hover:text-gray-400" /></a>
          <a href="https://www.linkedin.com/in/jr-dev-juan-restrepo/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-3xl text-white transition duration-300 hover:text-gray-400" /></a>
          <a href="https://www.instagram.com/juan_restrepo.64/" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-3xl text-white transition duration-300 hover:text-gray-400" /></a>
          <a href="https://www.facebook.com/profile.php?id=100009451163083" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-3xl text-white transition duration-300 hover:text-gray-400" /></a>
          <a href="https://wa.me/3004577246" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="text-3xl text-white transition duration-300 hover:text-gray-400" /></a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Todos los derechos reservados</p>
      </motion.div>
    </footer>
    </div>
  );
}

export default Contact;


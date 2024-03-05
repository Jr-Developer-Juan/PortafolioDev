import React from 'react';
import { FaGithub, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Banner = () => {

  function openPDF() {
    // URL del PDF que deseas abrir
    var pdfUrl = '../assets/HojaVida.pdf';
    
    // Abrir el PDF en una nueva ventana
    window.open(pdfUrl, '_blank');
  }

  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 
            variants={fadeIn('left', 0.3)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{ once: false, amount: 0.7 }}
            className='text-[55px] mb-2 font-bold leading-[0.8] lg:text-[110px]'>
            JUAN <span>RESTREPO</span>
          </motion.h1>
          <motion.div
            variants={fadeIn('up', 0.3)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{ once: false, amount: 0.7 }} 
            className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <TypeAnimation sequence={[
              'Desarrollador',
              2000,
              'De Software',
              2000,
              'Front-End',
              2000,
              'Full-Stack',
              2000,
              'JavaScript',
              2000,
              'Junior',
              2000,
            ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity} />
          </motion.div>
          <motion.p
            variants={fadeIn('up', 0.4)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{ once: false, amount: 0.7 }} 
            className='max-w-lg mx-auto mb-8 lg:mx-0'>
            El desarrollo de software es la puerta de entrada al mundo digital, donde las posibilidades son infinitas y el único límite es la imaginación del programador.
          </motion.p>
          <motion.div
            variants={fadeIn('up', 0.6)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{ once: false, amount: 0.7 }} 
            className='flex items-center mx-auto mb-12 max-w-max gap-x-6 lg:mx-0'>
            <a href="https://wa.me/3004577246" target="_blank" rel="noopener noreferrer">
              <button className='btn btn-lg'>Contactame!</button>
            </a>
            <motion.div
              variants={fadeIn('up', 0.3)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{ once: false, amount: 0.7 }} 
              className='flex text-[30px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href="https://github.com/Jr-Developer-Juan" target="_blank" rel="noopener noreferrer" className="mr-[-8px]">
                <FaGithub className="text-3xl text-white transition duration-300 hover:text-gray-400" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100009451163083" target="_blank" rel="noopener noreferrer" className="mr-[-8px]">
                <FaFacebook className="text-3xl text-white transition duration-300 hover:text-gray-400" />
              </a>
              <a href="https://wa.me/3004577246" target="_blank" rel="noopener noreferrer" className="mr-[-8px]">
                <FaWhatsapp className="text-3xl text-white transition duration-300 hover:text-gray-400" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

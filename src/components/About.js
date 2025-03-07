import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref, InView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col h-screen gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 h-[540px] bg-about bg-top bg-no-repeat bg-contain mt-[-20px] mix-blend-lighten hidden lg:block'>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }} className='flex-1'>
            <h2 className='h2 mt-[-20px] text-accent'>Sobre Mi.</h2>
            <h3 className='mb-1 h3 font-primary'>¡Hola!, Soy Juan Esteban, Desarrollador de Software FrontEnd</h3>
            <p className='mb-6'>Apasionado por crear interfaces web innovadoras, me especializo en React, componentes reutilizables y librerías de diseño modernas para construir experiencias interactivas. Con un enfoque en Diseño Web 3.0, estoy siempre al tanto de las últimas tendencias para ofrecer soluciones visualmente atractivas y funcionales. Actualmente, sigo ampliando mis conocimientos en Node.js, Nest, Prisma, bases de datos y manejo de estados globales en Next.js, asegurando que mis aplicaciones sean escalables y optimizadas.</p>
            <div className='flex mt-10 mb-12 gap-x-6 lg:gap-x-10'>
              <div>
                <div className='text-[40px] font-primary text-gradient'>
                  {
                    InView ?
                      <CountUp start={0} end={21} duration={9} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>Años <br /></div>
              </div>
              <div>
                <div className=' text-center text-[40px] font-primary text-gradient'>
                  {
                    InView ?
                      <CountUp start={0} end={24} duration={9} /> : null}
                  +
                </div>
                <div className='font-primary text-center text-sm tracking-[2px]'>Repositorios</div>
              </div>
              <div>
                <div className='text-[40px] font-primary text-gradient'>
                  {
                    InView ?
                      <CountUp start={0} end={30} duration={9} /> : null}
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>Interfaces<br /></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import htmlLogo from '../assets/devicon--html5.svg';
import cssLogo from '../assets/vscode-icons--file-type-css.svg';
import javascriptLogo from '../assets/logos--javascript.svg';
import reactLogo from '../assets/devicon--react.svg';
import nodejsLogo from '../assets/devicon--nodejs-wordmark.svg';
import phpLogo from '../assets/logos--php.svg';
import pythonLogo from '../assets/logos--python.svg';
import mysql from '../assets/logos--mysql.svg';
import git from '../assets/devicon--git.svg';
import github from '../assets/logos--github-octocat.svg';

const services = [
  {
    category: 'Desarrollo Front-end',
    description: 'Habilidades en el manejo de lenguajes y herramientas para el desarrollo del front-end.',
    items: [
      {
        description: 'Manejo de Lenguaje de etiquetado (HTML), Manejo de CSS, JavaScript',
        link: 'Leer Más',
        logo: htmlLogo,
        css: cssLogo,
        react: reactLogo,
        js: javascriptLogo,
      },
    ],
  },
  {
    category: 'Desarrollo Back-end',
    description: 'Habilidades en el desarrollo de la lógica del servidor y la gestión de bases de datos.',
    items: [
      {
        description: 'Desarrollo de aplicaciones del lado del servidor con Node.js',
        link: 'Leer Más',
        logo: nodejsLogo,
        python: pythonLogo,
        php: phpLogo,
        mysql: mysql,
      },
    ],
  },
  {
    category: 'Control De Versionamiento',
    description: ' Herramientas esenciales para gestionar las distintas versiones del código.',
    items: [
      {
        link: 'Leer Más',
        git: git,
        github: github,
      },
    ],
  },
];

const Services = () => {
  const renderServiceItems = (items) => {
    return items.map((item, subIndex) => (
      <div className='border-b border-white/20 h-[116px] mb-[20px] flex' key={subIndex}>
        <div className='max-w-[476px] flex gap-5'>
          <h4 className='text-[20px] tracking-wider font-primary font-semibold'>{item.name}</h4>
          <div className='flex gap-5'>
            {item.logo && <img className='w-12' src={item.logo} alt={item.name} />}
            {item.css && <img className='w-12' src={item.css} alt='CSS' />}
            {item.js && <img className='w-12' src={item.js} alt='JavaScript' />}
            {item.react && <img className='w-12' src={item.react} alt='React' />}
            {item.nodejs && <img className='w-12' src={item.nodejs} alt='Node.js' />}
            {item.python && <img className='w-12' src={item.python} alt='Python' />}
            {item.php && <img className='w-12' src={item.php} alt='PHP' />}
            {item.mysql && <img className='w-12' src={item.mysql} alt='myslq' />}
            {item.git && <img className='w-12' src={item.git} alt='git' />}
            {item.github && <img className='w-12' src={item.github} alt='github' />}
          </div>
        </div>
        <div className='flex flex-col items-end flex-1'>
          <a href='/' className='btn w-9 h-9 mb-[20px] flex justify-center items-center'><BsArrowUpRight /></a>
          <a href='/' className='text-sm text-gradient'>{item.link}</a>
        </div>
      </div>
    ));
  };

  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 mb-12 bg-no-repeat lg:bg-bottom mix-blend-lighten lg:mb-0' style={{ backgroundSize: '50%', backgroundPositionY: '-20px' }}>
            <h2 className='h2 text-accent mb-15 mt-[30px]'>Tecnologías - Skills</h2>
            <h3 className='h3 max-w-[455px] mb-20'>Mi trabajo se caracteriza por su orden y pasión por el código, y estoy enfocado en especializarme aún más en el desarrollo fullstack para ofrecer experiencias sorprendentes a los usuarios.</h3>
            <button className='btn btn-sm'>Mis Trabajos</button>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex1'>
            <div>
              {services.map((service, index) => {
                return (
                  <div key={index}>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold'>{service.category}</h4>
                    <p className='mb-4 text-sm text-gray-500'>{service.description}</p>
                    {renderServiceItems(service.items)}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;

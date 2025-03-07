import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="p-8"
      id="about"
    >
      <div className="text-left">
        <h1 className="text-7xl font-bold mb-4">
          <span className="text-gray-200">Full Stack Developer</span>
          <br />
          <span className="text-gray-400">Developer</span>
        </h1>
        <div className="text-gray-300 max-w-2xl text-lg">
          <TypeAnimation
            sequence={[
              "Hi! I'm Sudev, an aspiring full-stack developer passionate about building dynamic and efficient web applications. I enjoy working with both front-end and back-end technologies to create seamless user experiences. Constantly learning and exploring new technologies, I strive to bring ideas to life with clean, scalable, and maintainable code.",
              1000,
            ]}
            wrapper="p"
            cursor={false}
            speed={80}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default About;

import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <main className="hero container">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          YOUR FEET DESERVE THE BEST
        </motion.h1>
        
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Discover ultimate comfort with our top-quality shoes. Your feet deserve the best, and we're here to deliver!
        </motion.p>

        <motion.div
          className="hero-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.button whileHover={{ scale: 1.05 }} className="primary-btn">
            Shop Now
          </motion.button>
          <motion.button whileHover={{ scale: 1.05 }} className="secondary-btn">
            Category
          </motion.button>
        </motion.div>

        <motion.div
          className="shopping"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <p>Also Available On</p>
          <div className="brand-icons">
            <motion.img
              src="/images/amazon.png"
              alt="amazon-logo"
              className="brand-logo"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              src="/images/flipkart.png"
              alt="flipkart-logo"
              className="brand-logo"
              whileHover={{ scale: 1.1 }}
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.img
          src="/images/hero-image.png"
          alt="hero-image"
          className="main-image"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>
    </main>
  );
};

export default HeroSection;

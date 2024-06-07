import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoginPage from './LoginPage';
import Registor from './Registor';
import { debounce } from 'lodash';

const cardVariants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const Card = ({ content }) => (
  <motion.div
    className="flex items-center justify-center"
    variants={cardVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.5, ease: 'easeInOut' }}
    style={{
      width: 500,
      height: 600,
      backgroundColor: 'white',
      display: 'flex',
      borderRadius: 10,
      margin: 10,
      boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',
    }}
  >
    {content === 1 ? <LoginPage /> : <Registor />}
  </motion.div>
);

const CardSwitcher = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const cards = [1, 2];

  const nextCard = useCallback(
    debounce(() => {
      setCurrentCard((prev) => (prev + 1) % cards.length);
    }, 300),
    []
  ); // 300ms debounce time

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/path-to-your-image.png')" }}
    >
      <AnimatePresence mode="wait">
        <Card key={currentCard} content={cards[currentCard]} />
      </AnimatePresence>
      <button
        onClick={nextCard}
        className="ml-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Next Card
      </button>
    </div>
  );
};

export default CardSwitcher;

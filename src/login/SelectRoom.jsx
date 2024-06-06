import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoginPage from './LoginPage';
import Registor from './Registor';

const cardVariants = {
  initial: { opacity: 0, x: 200 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -200 },
};

const Card = ({ content }) => (
  <motion.div
    className="card"
    variants={cardVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.5 }}
    style={{
      width: 500,
      height: 600,
      backgroundColor: 'White',
      display: 'flex',
      borderRadius: 10,
      margin: 10,
    }}
  >
    {content == 1 ? (
      <p>
        <LoginPage />
      </p>
    ) : (
      <p>
        {' '}
        <Registor />
      </p>
    )}
  </motion.div>
);

const CardSwitcher = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const cards = [1, 2];

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <AnimatePresence>
        <Card key={currentCard} content={cards[currentCard]} />
      </AnimatePresence>
      <button onClick={nextCard} style={{ marginLeft: 20, padding: 10 }}>
        Next Card
      </button>
    </div>
  );
};

export default CardSwitcher;

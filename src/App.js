import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [carPosition, setCarPosition] = useState(500); // Initial car position
  const [gameRunning, setGameRunning] = useState(true);

  // Move car up
  const moveUp = () => {
    setCarPosition(prevPosition => (prevPosition > 20 ? prevPosition - 10 : prevPosition)); // Prevent car from going out of bounds
  };

  // Move car down
  const moveDown = () => {
    setCarPosition(prevPosition => (prevPosition < 500 ? prevPosition + 10 : prevPosition)); // Prevent car from going out of bounds
  };

  // Handle keypress for car movement
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp') {
        moveUp();
      } else if (e.key === 'ArrowDown') {
        moveDown();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Simple game logic and rendering
  const carStyle = {
    position: 'absolute',
    left: '50%',
    top: `${carPosition}px`, // Corrected syntax here
    transform: 'translateX(-50%)',
    width: '50px',
    height: '90px',
    backgroundColor: 'red',
    borderRadius: '5px',
  };

  const roadStyle = {
    position: 'relative',
    width: '200px',
    height: '600px',
    backgroundColor: '#808080',
    margin: '0 auto',
    borderRadius: '10px',
    overflow: 'hidden',
  };

  return (
    <div className="App">
      <h1>Car Racing Game</h1>
      <p>Use the up and down arrow keys to move the car.</p>

      <div style={roadStyle}>
        <div style={carStyle}></div>
      </div>

      <p style={{ textAlign: 'center' }}>{gameRunning ? 'Game Running' : 'Game Over'}</p>
    </div>
  );
}

export default App;

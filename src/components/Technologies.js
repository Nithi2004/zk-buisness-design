import React from 'react';
import TechnologyCard from './TechnologyCard';
import './Technologies.css';

function Technologies() {
  return (
    <div className="technologies">
      <h2 className="section-title">Our Technologies</h2>
      <div className="technology-grid">
        <TechnologyCard
          title="ZK zkbp"
          description="Allows to prove your game process without revealing your strategy."
          icon="🟩"
        >
          <p>Your game moves</p>
        </TechnologyCard>
        <TechnologyCard
          title="Recursive proofs"
          description="Used to accumulate your game process proof while you’re playing."
          icon="🔵"
          isCenter
        >
          <p>Game state proof</p>
        </TechnologyCard>
        <TechnologyCard
          title="Mina and protokit networks interplay"
          description="Combines power of ZK blockchain with fast and gasless transactions enabling multiplayer and background sessions."
          icon="⚪"
        >
          <p>MTNA</p>
        </TechnologyCard>
      </div>
    </div>
  );
}

export default Technologies;

import React from 'react';
import InfoBlock from './InfoBlock';
import '../css/AboutSection.css';
function AboutSection() {
  return (
    <section className="about-section">
      <h2>About O1-labs</h2>
      <p> lightweight blockchain that uses zero-knowledge proofs to maintain a constant size, regardless of the number of transactions. This makes it unique in the blockchain space.</p>

      <div className="info-blocks">
        <InfoBlock
          number="01"
          description="This name change to o1js reflects the evolution of our vision for the premiere toolkit used by developers to build zero knowledge-enabled applications, while paying homage to our technology's recursive proof generation capabilities."
        />
        <InfoBlock
          number="02"
          description="o1js helps developers build apps powered by zero knowledge (zk) cryptography. The easiest way to write zk programs is using o1js."
        />
        <InfoBlock
          number="03"
          description="o1js is a TypeScript library for zk-SNARKs and zkApps. You can use o1js to write zk smart contracts based on zero-knowledge proofs for the Mina Protocol. o1js is automatically included when you create a project using the zkApp CLI."
        />
      </div>
    </section>
  );
}

export default AboutSection;

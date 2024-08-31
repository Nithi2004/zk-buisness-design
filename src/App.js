import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import ImageComponent from './components/ImageComponent';
import Map from './components/Map'; 
import './App.css';
//import customImage from './images/supply_chain_1.png';
import AboutSection from './components/AboutSection';
//import BlockchainAnimation from './components/BlockchainAnimation';
import BlockchainAnimation2 from './components/BlockchainAnimation2';
function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <div className="image-container">
        {/* <ImageComponent src={customImage} /> */}
      </div>

      <Map /> {/* Map component added here */}
      {/* <AboutSection /> */}

      {/* <BlockchainAnimation /> */}
      <BlockchainAnimation2 />
    </div>
  );
}

export default App;

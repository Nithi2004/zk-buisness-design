import React from 'react';
import '../css/Map.css';


function Map() {
  return (
    <div className="container">
      <h1>Our Technologies</h1>
      <div className="branch-line"></div>
      <div className="branch-line-horizontal"></div>
      <div className="row">
        <div className="col">
          <h2>ZK BP</h2>
          <p></p>
          <div className="zk-zkbp">
            <div className="box"> </div>
            <div className="box"></div> 
            <div className="box"></div>
            <div className="box"></div>
            <div className="label"></div>
            <div className="label"></div>
          </div>
          <button className="explore-button">Explore</button>
        </div>
        
        <div className="col">
            
          <h2>Recursive proofs</h2>
          <p></p>
          
          <div className="recursive-proofs">
            <div className="box"></div>
            <div className="label"> </div>
            <div className="circle"></div>
            <div className="circle green"></div>
            <div className="line"></div>
            <div className="label">δχ</div>
          </div>
          <button className="explore-button">Explore</button>
        </div>

        <div className="col">
          <h2>Mina and CrossChains</h2>
          <p></p>
          <div className="mina-protokit">
            <div className="box"></div>
            <div className="box"></div>
            <div className="label"></div>
            <div className="label"></div>
            <div className="label"></div>
            <div className="label"></div>
          </div>
          <button className="explore-button">Explore</button>
        </div>
      </div>
    </div>
  );
}

export default Map;

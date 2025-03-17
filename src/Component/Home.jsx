import { useState } from "react";
import React from 'react';
import './Home.css';
import P1 from './Personality/Asasin-Mage.png';
import P2 from './Personality/Elf-Archer.png';
import P3 from './Personality/Mage.png';
import P4 from './Personality/Paladin.png';
import P5 from './Personality/Nayzachi.png';
import P6 from './Personality/Warior.png';
import P7 from './Personality/Summoner-mage.png';
import P8 from './Personality/Warior-Gril.png';
import P9 from './Personality/Summoner Warior.png';
import W1 from './Personality/MagicDragonBird.png';
import worldData from '/ZERO/public/Data/World.json';

export default function Home() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className='HomeP'>
      <div className="Page1">
        <h2 className='Welcome1'> <img className='DragonBird' src={W1} alt="" />Welcome</h2>
        <div className='PersonalityPage'>
          <div className="Classes"><img className='PersonClass1' src={P1} alt="" /></div>
          <div className="Classes"><img className='PersonClass2' src={P2} alt="" /></div>
          {/* <div className="Classes"><img className='PersonClass9' src={P9} alt="" /></div> */}
          <div className="Classes"><img className='PersonClass3' src={P3} alt="" /></div>
          <div className="Classes"><img className='PersonClass4' src={P6} alt="" /></div>
          <div className="Classes"><img className='PersonClass5' src={P4} alt="" /></div>
          <div className="Classes"><img className='PersonClass6' src={P8} alt="" /></div>
          <div className="Classes"><img className='PersonClass7' src={P5} alt="" /></div>
          <div className="Classes"><img className='PersonClass8' src={P7} alt="" /></div>
        </div>
        <div className='Aperson'>
          <h2>Z-World</h2>
          <h2 id='ABP'>Ushbu Kalitlar 🔑Sizlarga nomalum ❔ Huduga Partal ochadi .U yerda siz buutunlay boshqa turdagi Material , Maxluq , va Artifactlar Ucharatishingiz mumkin 🎁. Kalitlrni esa topish Juda murakkab ❗❗❗</h2>
        </div>
      </div>
      <div className="Page2">
        <div className="World-kayes-Page">
          <div className="A-Kayes">
            {/* Dastlab faqat Fire Kay ko'rsatiladi */}
            {worldData.slice(0, 1).map((world) => (
              <div className="K1" key={world.id}>
                <div className="WorldKayes1">
                  <div className="A-A-W">
                    <h1 className="World-Name">{world.Name}<ion-icon name="key-outline"></ion-icon></h1>
                    <h2>Boss Name --- {world.Boss}</h2>
                    <h2> Tushish ehtimolligi-- {world.drop}</h2>
                  </div>
                  <img className="Kay-name" src={world["img-Kay"]} alt={world.Name} />
                  <img className="Biom-img" src={world["img-biom"]} alt={world.Name} />
                </div>
              </div>
            ))}
            {/* Tugma bosilganda barcha kalitlar ko'rsatiladi */}
            {showAll && worldData.slice(1).map((world) => (
              <div className="K1" key={world.id}>
                <div className="WorldKayes1">
                  <div className="A-A-W">
                    <h1 className="World-Name">{world.Name}<ion-icon name="key-outline"></ion-icon></h1>
                    <h2>Boss Name --- {world.Boss}</h2>
                    <h2> Tushish ehtimolligi-- {world.drop}</h2>
                  </div>
                  <img className="Kay-name" src={world["img-Kay"]} alt={world.Name} />
                  <img className="Biom-img" src={world["img-biom"]} alt={world.Name} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="See-All-WorldKays" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Hide" : "Open"}<ion-icon name="key-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Artifacts.css';
import artifactsData from '/public/Data/Artifact.json';

export default function Artifacts() {
  const [activeSection, setActiveSection] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  };

  const categorizedArtifacts = {
    'lv1-200': artifactsData.filter((artifact) => artifact.category === 'lv1-200'),
    'lv200-500': artifactsData.filter((artifact) => artifact.category === 'lv200-500'),
    'lv500-999': artifactsData.filter((artifact) => artifact.category === 'lv500-999'),
  };

  return (
    <div className='Artifacts-room'>
      <h2>+1M Artifacts</h2>
      <div className='All'>
        <div className='abought1'>
          <h3 id='Name-lvl'>LV 1 - LV 200 - Oddiy</h3>
          <Slider {...settings} className='Slider-elite-A1'>
            {categorizedArtifacts['lv1-200'].map((artifact) => (
              <div className='SliderArtifactall' key={artifact.id}>
                <img className='Slider-artifacts-A1' src={artifact.image} alt={artifact.name} />
                <div className='AboughtArtifact'>
                  <h3 className='LV-Artifact'>{artifact.LVL}</h3>
                  <h2 className='Name-Artifact'>{artifact.name}</h2>
                </div>
              </div>
            ))}
          </Slider>
          <button id='Artifact-shower-lv1' onClick={() => setActiveSection('lv1-200')}>See Lv1-lv200</button>
        </div>

        <div className='abought1'>
          <h3 id='Name-lvl'>LV 200 - LV 500 - Urtacha</h3>
          <Slider {...settings} className='Slider-medium-A2'>
            {categorizedArtifacts['lv200-500'].map((artifact) => (
              <div className='SliderArtifactall' key={artifact.id}>
                <img className='Slider-artifacts-A2' src={artifact.image} alt={artifact.name} />
                <div className='AboughtArtifact'>
                  <h3 className='LV-Artifact'>{artifact.LVL}</h3>
                  <h4 className='Name-Artifact'>{artifact.name}</h4>
                </div>
              </div>
            ))}
          </Slider>
          <button id='Artifact-shower-lv200' onClick={() => setActiveSection('lv200-500')}>See lv200 - lv500</button>
        </div>

        <div className='abought1'>
          <h3 id='Name-lvl'>LV 500 - LV 999 - Afsonaviy</h3>
          <Slider {...settings} className='Slider-mithik-A3'>
            {categorizedArtifacts['lv500-999'].map((artifact) => (
              <div className='SliderArtifactall' key={artifact.id}>
                <img className='Slider-artifacts-A3' src={artifact.image} alt={artifact.name} />
                <div className='AboughtArtifact'>
                  <h3 className='LV-Artifact'>{artifact.LVL}</h3>
                  <h2 className='Name-Artifact'>{artifact.name}</h2>
                </div>
              </div>
            ))}
          </Slider>
          <button id='Artifact-shower-lv500' onClick={() => setActiveSection('lv500-999')}>See Lv500-lv999</button>
        </div>
      </div>

      <div className='Artifact-shows'>
        {activeSection && (
          <div className={`Artifactshow${activeSection}`}>
            <h1 id='Nomi'>#{activeSection} -gacha bulgan Artifactlar<ion-icon name="chevron-down-circle-outline"></ion-icon></h1>
            <div className={`ArtifactsAbought${activeSection}`}>
              {categorizedArtifacts[activeSection].map((artifact) => (
                <div key={artifact.id} className='Artifact-Box'>
                  <img className='Box-A' src={artifact.image} alt={artifact.name} />
                  <h3 className={`Artifact-abought-lvls${activeSection}`}>{artifact.name}</h3>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
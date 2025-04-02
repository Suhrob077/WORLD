import React, { useState } from 'react';
import "./Weapons.css"

export default function Weapons() {
  return (
    // qurollar haqida malumot
    <div className='WaponsHome'>
      <div className='S-weapons'>
        <div className="Abought-Box-W">
          <h1>GuruhLangan Qurollar Bulimi</h1>
          <h2> Bunda bir qancha qurollar bir guruhda jam qilingan </h2>
          <button id='Grouply-Weapons'>Kurish</button>
        </div>
        <img className='W-img1' src="https://i.pinimg.com/736x/34/1a/33/341a33fe2f83a62bd7d7c640de0f0254.jpg" alt="img1" />
        <div className="Abought-Box-W">
         <h1>Bir-xil Sinfli qurollar!</h1>
         <h2>Asosan qurollar bitta Turga oid va yasalishi uchun ayrim narsalar birxil bulishi mumkin !</h2>
         <button id='Class-Weapons'>Kurih</button>
        </div>
        <img className='W-img1' src="https://i.pinimg.com/736x/75/0f/b9/750fb903cfdaa5ef105a20af7c9267dc.jpg" alt="img2" />
        <div className="Abought-Box-W">
            <h1>Qurollar Haqida ⚔⚔⚔⚔⚔</h1>
            <h2>
              Ushbu qurollar faqat "Z-world" olamidagi asosiy qurollarning 10% xolos.
              Qolgan qurollarni siz o‘z mehnatingiz bilan 
              <span className="glow-text">Yasash</span> ---
              <span className='glow-text'>O‘rganish</span> - Va -
              <span className='glow-text'>Topishingiz</span> Mumkun!
            </h2>

            <button id='Many-Weapons'>Kurish</button>
        </div>
      </div> 
      <div className='All-Weapons'></div>
    </div>
  )
}

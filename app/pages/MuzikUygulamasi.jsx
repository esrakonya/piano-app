
'use client'
import React, { useState } from 'react';
import MuzikDefteri from '../components/MuzikDefteri';
import MelodiSecimi from '../components/MelodiSecimi';
import Piano from '../components/Piano';

const MuzikUygulamasi = () => {
  const [seciliMelodi, setSeciliMelodi] = useState(null);


  const melodiListesi = [
    { ad: 'Twinkle Twinkle Little Star', notalar: ['C4', 'C4', 'G4', 'G4', 'A4', 'A4', 'G4', 'F4', 'F4', 'E4', 'E4', 'D4', 'D4', 'C4'] },
    { ad: 'Happy Birthday', notalar: ['C4', 'C4', 'D4', 'C4', 'F4', 'E4', 'C4', 'C4', 'D4', 'C4', 'G4', 'F4', 'C4', 'C4', 'C5', 'A4', 'F4', 'E4', 'D4', 'G4', 'G4'] },
    { ad: 'Star Wars Theme', notalar: ['G4', 'G4', 'G4', 'E4', 'F4', 'F4', 'F4', 'G4', 'G4', 'G4', 'E4', 'F4', 'F4', 'F4', 'G4', 'F4', 'E4', 'D4', 'C4'] },
    { ad: 'Harry Potter Theme', notalar: ['E4', 'F4', 'G4', 'A4', 'G4', 'F4', 'E4', 'D4', 'E4', 'F4', 'G4', 'A4', 'G4', 'F4', 'E4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'A4', 'G4'] },
    { ad: 'Super Mario Bros Theme', notalar: ['E4', 'E4', 'E4', 'C4', 'E4', 'G4', 'G4', 'E4', 'G4', 'C4', 'E4', 'E4', 'E4', 'C4', 'E4', 'G4', 'G4', 'E4', 'G4', 'C4', 'E4', 'G4', 'G4', 'G4', 'E4', 'G4', 'C4', 'E4', 'E4', 'E4', 'C4', 'E4', 'G4', 'G4', 'E4', 'G4', 'C4'] },
    { ad: 'Game of Thrones Theme', notalar: ['C4', 'E4', 'G4', 'C5', 'D5', 'E5', 'G5', 'A5', 'B5', 'C6', 'B5', 'A5', 'G5', 'E5', 'D5', 'C5', 'E5', 'G5', 'A5', 'B5', 'C6', 'B5', 'A5', 'G5', 'E5', 'D5', 'C5', 'E5', 'G5', 'A5', 'B5', 'C6', 'B5', 'A5', 'G5', 'E5', 'D5', 'C5', 'E5', 'G5', 'A5', 'B5', 'C6', 'B5', 'A5', 'G5', 'E5', 'D5', 'C5'] },
    { ad: 'Muhteşem Yüzyıl Theme', notalar: ['G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5', 'C6', 'B5', 'A5', 'G5', 'F5', 'E5', 'D5', 'C5', 'B4', 'A4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5', 'C6', 'B5', 'A5', 'G5', 'F5', 'E5', 'D5', 'C5', 'B4', 'A4', 'G4', 'F4', 'E4', 'D4', 'C4'] },
    { ad: 'Ezel Theme', notalar: ['A4', 'G4', 'A4', 'G4', 'A4', 'G4', 'A4', 'E4', 'F4', 'G4', 'F4', 'G4', 'F4', 'E4', 'F4', 'D4', 'E4', 'F4', 'E4', 'D4', 'E4', 'D4', 'C4', 'D4', 'E4', 'D4', 'C4', 'D4', 'C4', 'B3', 'C4', 'D4', 'C4', 'B3', 'C4', 'B3', 'A3', 'B3', 'C4', 'B3', 'A3', 'B3', 'A3', 'G3'] },

  ];

  //melodi seçildiğinde çalışacak fonksiyon
  const melodiSec = (index) => {

    if (melodiListesi[index]) {
      const secilenMelodi = melodiListesi[index];

      setSeciliMelodi(secilenMelodi);
    }
  }

  return (
    <div>
      <MuzikDefteri melodiNotalari={seciliMelodi ? seciliMelodi.notalar : []} />
      <MelodiSecimi melodiListesi={melodiListesi} melodiSec={melodiSec} />
      <Piano />
    </div>
  )
}

export default MuzikUygulamasi;


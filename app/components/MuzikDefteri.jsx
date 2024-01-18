
import React from 'react';

//ekranda melodi notalarının gösterildiği bileşen
const MuzikDefteri = ({ melodiNotalari }) => {

  //notaları harflerle eşleştirdik
  const notaHarfMap = {
    C4: 'A',
      'C#4': 'W',
      D4: 'S',
      'D#4': 'E',
      E4: 'D',
      F4: 'F',
      'F#4': 'T',
      G4: 'G',
      'G#4': 'Y',
      A4: 'H',
      'A#4': 'U',
      B4: 'J',
      C5: 'K',
      'C#5': 'O',
      D5: 'L',
      'D#5': 'P',
      E5: ',',
      F5: '.',
      'F#5':'2',
      G5: 'I',
      'G#5':'1',
      A5: 'R',
      'A#5':'3',
      B5: 'C',
      C3: 'Z',
      'C#3':'Q',
      C6: 'X',
      'C#6':'V',
      G3: 'B',
      A3: 'N',
      B3: 'M',
  };

  return (
    <div className="muzik-defteri bg-white p-4 rounded shadow-md mb-4">
      <h2 className="text-3xl font-bold mb-2 text-center">Müzik Defteri</h2>
      <div className="flex flex-wrap">
        {melodiNotalari.map((nota, index) => (  //melodiNotalari nı bir döngüye alarak her bir elemanını ekranda göstermek için
          <div key={index} className="m-1 p-2 bg-gray-200 border border-gray-300 rounded">
            {notaHarfMap[nota]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MuzikDefteri;



import React, { useState } from 'react';

//bu bileşen kullanıcının melodi seçmesi sağlar
const MelodiSecimi = ({ melodiListesi, melodiSec }) => {
  const [seciliMelodiIndex, setSeciliMelodiIndex] = useState(''); //useState ile seçilen melodi indeksini tutuyoruz


  //melodi seçildiğinde çalışacak fonksiyon
  const handleMelodiSec = (e) => {
    const index = e.target.value;
    melodiSec(index);
    setSeciliMelodiIndex(index);
  };

  return (
    <div className="melodi-secimi mt-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Melodi Seçimi</h2>
      <div className="max-w-md mx-auto bg-white rounded-md">
        <select
          id="melodiListesi"
          name="melodiListesi"
          value={seciliMelodiIndex}
          onChange={handleMelodiSec}
          className="block animate-rainbow w-full p-2 border rounded shadow-md bg-white focus:outline-none focus:border-blue-500"
        >
          <option value="" disabled>
            Seçenekler
          </option>
          {melodiListesi.map((melodi, index) => (
            <option key={index} value={index}>
              {melodi.ad}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MelodiSecimi;



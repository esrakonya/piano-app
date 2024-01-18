
import React, { useState, useEffect, useRef } from 'react';
import * as Tone from 'tone';

const Piano = () => {
  //çalınan tuşu takip etmek için state 
  const [isPlaying, setIsPlaying] = useState<string | null>(null);
  const synthRef = useRef<Tone.Synth | null>(null);

  //bileşen yüklendiğinde çalışacak fonksiyon
  useEffect(() => {
    synthRef.current = new Tone.Synth().toDestination();

    //tuşa basıldığında sesi çalmak için
    const handleKeyDown = (event: KeyboardEvent) => {
      playSound(event.key);
    };


    //tuşa basıldığında çalan sesi durdurmak için
    const handleKeyUp = () => {
      stopSound();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  //belirtilen tuşa göre ses çalma fonksiyonu
  const playSound = (key: string) => {
    const note = getPianoNoteFromKey(key);
    if (note && synthRef.current) {
      synthRef.current.triggerAttackRelease(note, '8n');
      setIsPlaying(key);
    }
  };

  const stopSound = () => {
    setIsPlaying(null);
  };

  //bilgisayar klavye tuşlarını piyano tuşlarına eşleme fonksiyonu
  const getPianoNoteFromKey = (key: string): string => {
    if (/^[CDEFGAB]#?[0-9]$/.test(key)) {
      return key;
    }

    const noteMap: { [key: string]: string } = {
      A: 'C4',
      W: 'C#4',
      S: 'D4',
      E: 'D#4',
      D: 'E4',
      F: 'F4',
      T: 'F#4',
      G: 'G4',
      Y: 'G#4',
      H: 'A4',
      U: 'A#4',
      J: 'B4',
      K: 'C5',
      O: 'C#5',
      L: 'D5',
      P: 'D#5',
      ',': 'E5',
      ".": 'F5',
      2: 'F#5',
      I: 'G5',
      1: 'G#5',
      R: 'A5',
      3: 'A#5',
      C: 'B5',
      Z: 'C3',
      Q: 'C#3',
      X: 'C6',
      V: 'C#6',
      B: 'G3',
      N: 'A3',
      M: 'B3',
    };

    return noteMap[key] || '';
  };

  //diyez tuşlarının dizisi
  const isSharpKey = (key: string): boolean => {
    const sharpKeys = ['W', 'E', 'T', 'Y', 'U', 'O', 'P', '2', '1', '3', 'Q', 'V'];
    return sharpKeys.includes(key);
  };

  //piyano tuşunu bilgisayar klavye tuşuna eşleme fonksiyonu
  const getNoteFromPianoKey = (pianoKey: string): string => {
    const reverseNoteMap: { [key: string]: string } = {
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

    return reverseNoteMap[pianoKey] || '';
  };

  //piyano tuşlarını sıralayan dizi
  const pianoKeys = ['A', 'W', 'S', 'E', 'D', 'F', 'T', 'G', 'Y', 'H', 'U', 'J', 'K', 'O', 'L', 'P', ',', '.', '2', 'I', '1', 'R', '3', 'C', 'Z', 'Q', 'X', 'V', 'B', 'N', 'M'];

  return (
    <div className="text-center mt-8">
      <div className="flex mt-50px relative justify-center">
        {pianoKeys.map((key, index) => (
          <div key={key} className={`piano-key-wrapper ${isSharpKey(key) ? 'sharp-key-wrapper' : ''}`}>
            {isSharpKey(key) && <div className="sharp-key-placeholder"></div>}
            <button
              onMouseDown={() => playSound(key)}
              onMouseUp={stopSound}
              className={`piano-key ${isPlaying === key ? 'bg-blue-200' : 'bg-white'} ${isSharpKey(key) ? 'sharp-key' : ''}`}
              style={{
                zIndex: isSharpKey(key) ? 1 : 0,
                marginLeft: isSharpKey(key) ? '-1rem' : '0', // Siyah tuşlar için sol boşluk
                marginRight: isSharpKey(key) ? '-1rem' : '0', // Siyah tuşlar için sağ boşluk
                marginTop: isSharpKey(key) ? '6rem' : '0', // Siyah tuşlar için yukarı boşluk
              }}
            >
              {getNoteFromPianoKey(getPianoNoteFromKey(key))}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Piano;

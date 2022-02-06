import React, { useEffect, useState } from 'react';

import './CaesarCipherAndRLE.css'

function CaesarCipherAndRLE() {
  const [finalEncryptedString, setFinalEncryptedString] = useState('');
  const [inputString, setInputString] = useState('');
  const [rotationNumber, setRotationNumber] = useState(3);

  useEffect(() => {
    let currentCharacter = '';
    let count = 1;
    let encryptedString = '';

    const stringArray = [...inputString];
    let encryptedStringArray = stringArray.map(character => character.charCodeAt() + rotationNumber);
    encryptedStringArray = [...String.fromCharCode(...encryptedStringArray)];

    for (const character of encryptedStringArray) {
      if (currentCharacter == character) {
        count++;
      } else {
        encryptedString = count != 1 ? encryptedString + currentCharacter + count : encryptedString + currentCharacter
        currentCharacter = character;
        count = 1;
      }
    }

    encryptedString = count != 1 ? encryptedString + currentCharacter + count : encryptedString + currentCharacter
    setFinalEncryptedString(encryptedString);
  }, [inputString, rotationNumber]);

  const handleInputStringChange = e => setInputString(e.target.value);

  const handleRotationNumberChange = e => setRotationNumber(parseInt(e.target.value));

  return (
    <div className='root-container'>
      <h1>Caesar's Cipher + RLE</h1>
      <input
        placeholder='Enter the string here'
        type="text"
        value={inputString}
        onChange={e => handleInputStringChange(e)}
        spellCheck='false'
        autoFocus
      />
      <br />
      <input
        type="number"
        value={rotationNumber}
        onChange={e => handleRotationNumberChange(e)}
      />
      {finalEncryptedString && <h2>Encrypted String : {finalEncryptedString}</h2>}
    </div>
  )
}

export default CaesarCipherAndRLE;

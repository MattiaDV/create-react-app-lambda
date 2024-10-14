import {useState} from 'react';
import './index.css';
import './App.css';

let playerUno = 0;
let playerDue = 0;
let totTempo = 100;
let start = false;

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    playerUno++;
  }

  return (
    <button onClick={handleClick} className='bigButton' id = 'playerUnoReal'>
      {playerUno}
    </button>
  );
}

function MyButtonPlayer() {
  const [count, setCount] = useState(0);

  function handleClick() {
    playerDue++;
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick} className='bigButtonPlayer' id = 'playerDueReal'>
      {playerDue}
    </button>
  );
}

let tempoRimasto = totTempo;

setInterval(function() {
  if (tempoRimasto > 0) {
    tempoRimasto = tempoRimasto - 1;
    document.getElementById('tempo').innerHTML = "TIME LEFT: " + tempoRimasto + "s";
  } else {
     if (playerDue > playerUno) {
      alert("BLUE WIN");
      playerDue = 0;
      playerUno = 0;
      tempoRimasto = totTempo;
      document.getElementById('playerUnoReal').innerHTML = playerUno;
      document.getElementById('playerDueReal').innerHTML = playerDue;
     } else if (playerDue < playerUno) {
      alert("RED WIN");
      playerDue = 0;
      playerUno = 0;
      tempoRimasto = totTempo;
      document.getElementById('playerUnoReal').innerHTML = playerUno;
      document.getElementById('playerDueReal').innerHTML = playerDue;
     } else {
      alert("DRAW");
      playerDue = 0;
      playerUno = 0;
      tempoRimasto = totTempo;
      document.getElementById('playerUnoReal').innerHTML = playerUno;
      document.getElementById('playerDueReal').innerHTML = playerDue;
     }
  }
}, 1000);

export default function myApp() {
  return (
      <div className='container'>
        <MyButton />
        <div id = 'tempo'>TIME LEFT: {tempoRimasto}s</div>
        <MyButtonPlayer />
      </div>
  )
}
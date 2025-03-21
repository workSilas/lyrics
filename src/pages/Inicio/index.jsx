import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Inicio() {

  const [click, setClick] = useState(1);
  const [fade, setFade] = useState(false);

  function handleClick() {
    setFade(true);
    setTimeout(() => {
      setClick(click + 1);
      if (click === 3) {
        setClick(1);
      }
      setFade(false);
    }, 1000); // Match the duration of the fade-out animation
  }

  return (
    <div className="Inicio">
      {click === 1 ? (
        <div className={`caixinha ${fade ? 'fade-out' : ''}`}>
          <h1>Oi, meu amor!</h1>
          <p>Estava andando pelo tik tok até que vi
            uma trendzinha onde os namorados
            “faziam” uma surpresinha pra amada
            em forma de site.</p>
          <div>
            <button onClick={handleClick}>Oba!</button>
          </div>
        </div>)
        : click === 2 ? (
          <div className={`caixinha ${fade ? 'fade-out' : ''}`}>
            <h1>Então...</h1>
            <p>Como um bom namorado que sou,
              resolvi fazer o nosso!</p>
            <div>
              <button onClick={handleClick}>Mesmo?!</button>
            </div>
          </div>)
          : (
            <div className={`caixinha ${fade ? 'fade-out' : ''}`} id='ultima'>
              <h1>Sim senhorita!</h1>
              <p>Aqui vai!</p>
              <div>
                <Link to={"/"}>
                  <img src="./assets/images/Star.png" alt="star" />
                </Link>
              </div>
            </div>)
      }
    </div>
  );
}

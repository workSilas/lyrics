import './index.scss';
import { useState, useEffect } from 'react';

export default function Final() {

  const startDate = new Date("2023-08-20T00:00:00");
  const [elapsedTime, setElapsedTime] = useState(calcElapsedTime());

  function calcElapsedTime() {
    const now = new Date();
    const diff = now - startDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { years, months, days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(calcElapsedTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [click, setClick] = useState(0);
  const [fade, setFade] = useState(false);

  function handleClick() {
    setFade(true);
    setTimeout(() => {
      setClick(click + 1);
      setFade(false);
    }, 1000); 
  }

  useEffect(() => {
    document.title = "Eu te amo!!";
  }, []);

  return (
    <div className="Final">
      <img src="./assets/images/badtzGif.gif" alt="star" />

      <div className="sessao">
        <div className="texto">
          <p>Você é o meu mundinho todinho!
            Fico feliz por cada coisinha que posso
            viver e fazer ao teu ladinho!!</p>
          <p>Eu amo colecionar todas as nossas
            fotinhas juntos!</p>
        </div>
        <div><img src="./assets/images/badtzGif.gif" alt="star" /></div>
      </div>
      {click >= 1 && (
        <div className="sessao">
          <img className='star' src="./assets/images/Star.png" alt="star" />
          <div className="texto" id='timer'>
            <h1>Já faz</h1>
            <p>{elapsedTime.years} | {elapsedTime.months} | {elapsedTime.days} | {elapsedTime.hours} |{elapsedTime.minutes} | {elapsedTime.seconds}</p>
            <p className='mini'>ano | meses | dias | horas | minutos | segundos</p>
            <p>que nossos caminhos se alinharam!</p>
          </div>
          <img id='direita' className='star' src="./assets/images/Star.png" alt="star" />
        </div>
      )}
      {click >= 2 && (
        <div className="sessao">
          <div className="texto" id='final'>
            <p>Obrigado por cuidar de mim todo esse tempo!
              Eu amo poder compartilhar minha vida
              contigo, princesinha com cachos cor de </p>
            <h1>Amora!</h1>
          </div>
        </div>
      )}
      {click >= 3 && (
        <div className="assinatura">
          <div className="texto">
            <h1>Eu te amo!</h1>
            <p>Ainda vamos nos casar!</p>
          </div>
          <p>~Com amor,
            Sisi! </p>
        </div>
      )}
      {click < 3 && (
        <button className={fade ? 'fade-out' : ''} onClick={handleClick}>!</button>
      )}
    </div >
  );
}

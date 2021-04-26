import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR'
import Link from 'next/link'
import styles from './styles.module.scss'
import { useState } from 'react';

export default function Header(props) {
  const [darkMode, setDarkMode] = useState(false)

  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR
  })

  function toggleMode(event) {
    props.darkMode.current?.classList.toggle('dark')
    setDarkMode(!darkMode)
    console.log(event.target)
  }

  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <a><img src={!darkMode ? '/logo.svg' : '/logo_light.svg'} alt="Poscastr"/></a>
      </Link>
      <p>O melhor para você ouvir, sempre</p>
      <span className="toggleMode" onClick={toggleMode}>
        <img
          src={darkMode ? 
          "/sun.svg" 
          : "/moon.svg"} alt={darkMode ? 'Trocar para modo escuro' : 'Trocar para modo claro'}
        />
      </span>
      <span>{currentDate}</span>
    </header>
  );
}
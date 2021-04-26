import Header from '../componentes/Header'
import '../styles/global.scss'
import styles from '../styles/app.module.scss'
import Player from '../componentes/Player'
import { PlayerContextProvider } from '../contexts/PlayerContext'
import React, { useRef } from 'react'
export default function MyApp({ Component, pageProps }) {

  const darkMode = useRef(null)

  return ( 
    <PlayerContextProvider>
      <div className={styles.wrapper} ref={darkMode}>
        <main>
          <Header darkMode={darkMode} />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContextProvider>
  )
} 
import Header from '../componentes/Header'
import '../styles/global.scss'
import styles from '../styles/app.module.scss'
import Player from '../componentes/Player'
import { PlayerContextProvider } from '../contexts/PlayerContext'

export default function MyApp({ Component, pageProps }) {

  return (
    <PlayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContextProvider>
  )
} 
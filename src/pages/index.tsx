import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { useMirrorWorld } from "../hooks/useMirrorWorld";


const Home: NextPage = () => {
  
  const { user, mirrorworld, login } = useMirrorWorld()
  
  async function fetchNFTs() {
    try {
      const nfts = await mirrorworld.getNFTs({
        limit: 10,
        offset: 0
      })
      console.log("nfts", nfts)
    } catch (e) {
      console.error("Couldn't fetch NFTs", e)
    }
  }
  
  async function fetchSPLTokens() {
    try {
      const tokens = await mirrorworld.getTokens()
      console.log("tokens", tokens)
    } catch (e) {
      console.error("Couldn't fetch user tokens", e)
    }
  }
  
  async function fetchTransactions() {
    try {
      const trasnactions = await mirrorworld.getTransactions()
      console.log("trasnactions", trasnactions)
    } catch (e) {
      console.error("Couldn't fetch user trasnactions", e)
    }
  }
  


  return (
    <div className={styles.container}>
                      <h1>Login</h1>

       <input className={styles.btn} id = "btn_autentificacion" value="Autentificacion"  onClick={login}></input>
      <div>
      {user ? (
          <div className="user-info">
              
              <a href="http://localhost/fmetter/principal">
                <h1>Bienvenido</h1>
                <img src="C:/Users/Tona/Desktop/f/f-meter/src/pages/apren.png"></img>

              <input className={styles.btn} id = "btn" value="Continuar" ></input>

              </a>
      
        
          </div>
        ) : (
          <p>Da click en el boton </p>
        )}
      </div>
      
    </div>
  )
}

export default Home

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
      <div>
      {user ? (
          <div className="user-info" onLoadCapture={fetchNFTs}>
              <ul>
              <li>NTF </li>
             
              
<img src="https://raw.githubusercontent.com/f-Meter/f-Metter-App/main/FM-receta.jpg"></img>

        
              </ul>
          </div>
        ) : (
          <p>No User available</p>
        )}
      </div>
      
    </div>
  )
}

export default Home
import type { NextPage } from 'next'
import styles from '/Users/Tona/Desktop/mirrorworld/styles/Home.module.css'
import { useMirrorWorld } from "../../hooks/useMirrorWorld";

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

  async function create() {
    try {
      
    } catch (e) {
      console.error("error")
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
<html>
  <head>
        <meta name="author" content="F-Metter"></meta>
        <meta name="date" content="26/02/2023"></meta>
        <meta name="descipcion" content="Certificado medico"></meta>
        <meta name = "keywords" content="from,text,html"></meta>
        <title>Certificado Medico</title>

  </head>
    <><><div className={styles.contenedor}>
      <form action="" id="formulario" className={styles.formulario}>
        <h1>Datos del paciente</h1>
        <label>(Ingresar datos sin unidad de medicion)</label>
        <div>
            <label >Nombre</label>
            <input type="text" name="nombre" id="nombre" placeholder="Nombre"></input>
        </div>
        <div>
            <label >Edad</label>
            <input type="text" name="edad" id="edad" placeholder="Edad"></input>
        
        </div>
        
        <div>
            <label >Sexo</label>
            <input type="text" name="sexo" id="sexo" placeholder="Sexo"></input>
        
        </div>
        <div>
            <label>Fecha</label>
            <input type="text" name="fecha" id="fecha" placeholder="Fecha"></input>
        
        </div>
        <div>
            <label >Peso</label>
            <input type="text" name="peso" id="peso" placeholder="Peso"></input>
        
        </div>
        <div>
            <label>Talla</label>
            <input type="text" name="talla" id="talla" placeholder="Talla"></input>
        
        </div>
        <div>
            <label>FC</label>
            <input type="text" name="fc" id="fc" placeholder="FC"></input>
        
        </div>
        <div>
            <label >FR</label>
            <input type="text" name="fr" id="fr" placeholder="FR"></input>
        
        </div>
        <div>
            <label>Tc</label>
            <input type="text" name="tc" id="tc" placeholder="Tc"></input>
        
        </div>
        <div>
            <label>TA</label>
            <input type="text" name="ta" id="ta" placeholder="Ta"></input>
        
        </div>
        
        <div>
            <label>Glucosa</label>
            <input type="text" name="glucosa" id="glucosa" placeholder="Glucosa"></input>
        
        </div>
        <div>
            <label>SpO2</label>
            <input type="text" name="spo2" id="spo2" placeholder="SpO2"></input>
        
        </div>
        <div>
            <label>Alergias</label>
            <input type="text" name="alergias" id="alergias" placeholder="Alergias"></input>
        
        </div>
        <div>
            <label >Diagnostico</label>
            <input type="text"  name="dx" id="dx" placeholder="Dx"></input>
        
        </div>
        <div>
            <label >Medicamento</label>
            <input type="text" name="medicamento" id="medicamento" placeholder="Medicamento"></input>
    
        </div>

        <div>
            <label>Presentacion</label>
            <input type="text" name="presentacion" id="presentacion" placeholder="Presentacion"></input>
    
        </div>
        <div>
            <label>Dias</label>
            <input type="text" name="dias" id="dias" placeholder="Dias"></input>
    
        </div>
    
        <div>
            <label>Lapso</label>
            <input type="text" name="lapso" id="lapso" placeholder="Lapso"></input>
    
        </div>

        <div>
            <label>Nota</label>
            <input type="text" name="nota" id="lapso" placeholder="Nota"></input>
        </div>
        
        <div>
          <input className={styles.btn} id = "btn_crear" value="Crear Receta" ></input>
          <input className={styles.btn} id = "btn_descargar" value="Descargar" disabled   ></input>
        </div>
        <canvas id="micanvas" className={styles.canvas} >
        </canvas>
        <div>
        <input className={styles.btn} id = "btn_qr" value="Crear QR" ></input>
        </div>
        <div id="contenedorQR" className={styles.contenedorQR}></div>    
    </form>
        <button onClick={fetchNFTs}>
          Get NFTs
        </button>
        <br /><br />
        <button onClick={fetchSPLTokens}>
          Get my tokens
        </button>
        <br /><br />
        <button onClick={fetchTransactions}>
          Get my transactions
        </button>
        <br /><br />
      
      </div></></>
</html>
  )
}

export default Home

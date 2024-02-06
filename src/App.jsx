import './App.css'
import styles from "./app.module.css"
// import { HookUseState } from './components/HookUseState/HookUseState'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { NavBar } from './components/NavBar/NavBar'


export const App = () => {
  return (
    <>
    <div>
    {/* <h1 className={styles.Titulo2} >Bienvenido a DulcesMimos-Petshop</h1> */}
    <h1 className={`${styles.Titulo} ${styles.FZT} `} >Dulces Mimos</h1>
    <h2 className={`${styles.Titulo} ${styles.FZT} `} >Petshop</h2>
    <NavBar/>
    </div>
    <ItemListContainer greeting="Bienvenido a Dulces Mimos"/>
    {/* <HookUseState/> */}
    </>
  )
}

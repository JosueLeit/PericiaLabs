import { Header } from "./components/Header";
import { Post } from "./components/Post";
import styles from "../src/App.module.css";
import { SideBar } from "./components/SideBar";
import './global.css'



export default function App() {
  
  return (
    <>
    <Header/>
      <div className={styles.wrapper}>
          <SideBar />
      <main>
      
      <Post
        author="João Nicolle"
        content="Práticas Previdenciárias na visão do Perito"
      />
      {/* <Post
        author="Rodrigo Souza"
        content="Qualidade das perícias previdenciárias como forma de evitar o retrabalho e reduzir as filas de atendimento "
      /> */}

      </main>
    </div>
    </>
  )
}



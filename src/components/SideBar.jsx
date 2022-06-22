import styles from "./SideBar.module.css";
import {Syringe} from 'phosphor-react';
import { Avatar } from "./Avatar";

export function SideBar(){
  return(
    <aside className={styles.sidebar}>
      <img 
      className={styles.cover}
      src="https://images.unsplash.com/photo-1592671977183-b306d0e37a20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

      <div className={styles.profile}>
        <Avatar src="https://github.com/josueleit.png"/>
        <strong> João Nicolle </strong>
        <span> Perito Médico</span>
        <span className={styles.crm}> CRM-PE: 25252</span>
      </div>

      <footer>
        
        <a 
        href="#">
          <Syringe size={20}/>
          Editar seu perfil</a> 
      </footer>
    </aside>
  )
}
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/lucasbarrossantos.png"  />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
          <div className={styles.authorAndTime}>
            <strong> Josué Leite </strong>
            <time title="09 de Junho às 08:11h" dateTime="2022-06-09 08:11:30">Cerca de 1h atrás</time>
          </div>
          <button title='Deletar comentário'>
            <Trash size={24}/>
          </button>
          </header>
          <p>Muito bom, Parabéns</p>
        </div>
      
      <footer>
        <button>
          <ThumbsUp /> Aplaudir <span>20</span>
        </button>
      </footer>
      </div>


    </div>
  )
}
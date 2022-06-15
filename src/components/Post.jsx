import styles from './Post.module.css'

export function Post(){
return (
 <article className={styles.post}>
   {/* cabeçalho do componente */}
   <header>
     <div className={styles.insured}>
            {/* <img className={styles.insuredAvatar} src="https://github.com/lucasbarrossantos.png" /> */}
            <h1>Laudo de Perícia Médica</h1>
            <time 
            title="09 de Junho às 08:11h"
            dateTime="2022-06-09 08:11:30"
            >última modificação há 1h
            </time>
       <div className={styles.insuredInfo}>
        <strong>Xuxa da Silva</strong>
        <span> CPF: 007.041.092-75</span>
        <span> Professor de Ensino Fundamental</span>
       </div>
     </div>
    
   </header>

  {/* conteúdo do componente */}

   <div className={styles.content}>
        
    <p>1. Profissão declarada:</p> 
        <form className={styles.commentForm} action="">
        <textarea 
          placeholder='Profissão é um preenchimento obrigatório'
        />
        </form>
        
    <p>2. Tempo de profissão:</p> 
        <form className={styles.commentForm} action="">
        <textarea 
          placeholder='tempo de profissão é um preenchimento obrigatório'
        />
        </form>
        
    <p>3. Atividade declarada como exercida:</p> 
        <form className={styles.commentForm} action="">
        <textarea 
          placeholder='Atividade declarada'
        />
        </form>
        
    <p>4. Tempo de atividade:</p> 
        <form className={styles.commentForm} action="">
        <textarea 
          placeholder='Escreva o tempo de exercício da atividade'
        />
        </form>
        
    <p>5. Descrição da atividade:</p> 
        <form className={styles.commentForm} action="">
        <textarea 
          placeholder='Descreva a atividade exercida'
        />
        </form>
        
    <p>6. Experiência laboral anterior:</p> 
        <form className={styles.commentForm} action="">
        <textarea 
          placeholder='Experiência Laboral Anterior'
        />
        </form>
        
    <p>7. Data declarada de afastamento do trabalho, se tiver ocorrido:</p> 
        <form className={styles.commentForm} action="">
        <textarea 
          placeholder='Data de afastamento é um preenchimento obrigatório'
        />
        </form>
        
   </div>
        
        <form className={styles.commentForm}>
          <strong>
            Deixe seu FeedBack
          </strong>

          <textarea 
            placeholder='deixe um comentário'
          />

        <button className={styles.comment} type="submit">Comentar</button>

        </form>

        <footer>
          <button className={styles.commentFormButton} type="submit">Salvar</button>

        </footer>


 </article>
)
}
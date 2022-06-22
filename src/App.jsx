import { Header } from "./components/Header";
import { Post } from "./components/Post";
import styles from "../src/App.module.css";
import { SideBar } from "./components/SideBar";
import './global.css'


//author: {avatar_url: "",role:""}
//publishedAt: Date
//content: String

const posts=[
  {
    id:1,
    author: {
      avatarUrl: "https://github.com/josueleit.png",
      name: "Josué Leite",
      role: "Desenvolvedor"
    },
    content: [
      {type: 'paragraph', content:'teste de conteudo'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW return'},
      {type: 'link', content: 'www.arrumae.com'}
    ],
    publishedAt: new Date('2022-05-03 20:03:05'),
  },

  {
    id:2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "CTO @Rocketseat"
    },
    content: [
      {type: 'paragraph', content:'teste de conteudo'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW return'},
      {type: 'link', content: 'www.arrumae.com'}
    ],
    publishedAt: new Date('2022-10-02 10:30:50'),
  },
]

export default function App() {
  
  return (
    <>
    <Header/>
      <div className={styles.wrapper}>
          <SideBar />
      <main>
      
      {posts.map(post =>{
        return 
          (<Post 
          author={post.author}
          content={post.content}
          publishedAt={post.publishedAt}
          />)
      })}

      </main>
    </div>
    </>
  )
}



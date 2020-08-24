// import React from "react"

// export default function Home() {
//   return <div>Hello world!</div>
// }
import React from 'react'
import { Link } from 'gatsby'

export default () => {
  return (
    <>
      <div 
        className="Col"
        style={{  
          display: "flex", 
          justifyContent: "space-between", 
          background: "#F0FFFF",
      }}>  
        <div 
          className="Col"  
          style={{ 
            display: "flex",
            justifyContent: "center",
          }}>
              <h2 >logo</h2>
              <h1 >NOME EMPRESA</h1>
        </div>
        <nav
          className="Col" 
          style={{ 
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
        }}>
          <p><Link to="/" style={{textDecoration: "none", color: "black", marginRight: "10px",}}>Home/Sobre</Link></p>
          <p><Link to="/blog" style={{textDecoration: "none", color: "black", marginRight: "10px",}}>Blog</Link></p>
          <p><Link to="/" style={{textDecoration: "none", color: "black", marginRight: "10px",}}>Cursos</Link></p>
          <p><Link to="/" style={{textDecoration: "none", color: "black", marginRight: "10px",}}>Contato</Link></p>
        </nav>
      </div>
      <main>
        <section
          style={{ 
            textAlign: "center",
            background: "#ff9c00",
            padding: "10px",
          }}
        >
          <h1>Aceleradora de Negócios Digitais</h1>
          <h3
            style={{ 
              marginLeft: "10%",
              marginRight: "10%",
            }}
          >
            Somos especialistas em lançamentos de infoprodutos e no crescimento 
            de negócios digitais. Em menos de dois anos, já alavancamos os 
            negócios de nossos clientes em mais de 4,5 milhões de reais.
          </h3>
          <h3>Como podemos te ajudar?</h3>
          <form action="">
            <fieldset 
              className="Col"
              style={{ 
                textAlign: "center",
                // background: "white",
              }} 
            >
              <h2>Inscreva-se para receber conteúdos exclusivos!</h2>
              <label htmlFor="email" style={{marginRight: "10px"}}>Email</label>
              <input type="text" style={{marginRight: "10px"}} />
              <button type="submit" style={{background: "#1bbb19"}}>Enviar</button>
            </fieldset>
          </form>
        </section>
      </main>
      <footer 
        className="Col" 
        style={{ 
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h5>© Copyright 2020 | 77 Digital Marketing.</h5>
      </footer>
    </>
  )
}
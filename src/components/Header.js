import React from 'react';
import { Link } from 'gatsby'

const Header = () => {
  return (
    <div  
      className="Col"
      style={{  
        display: "flex", 
        justifyContent: "space-between", 
        background: "#F0FFFF",
        fontFamily: "Roboto",
    }}>  
      <div 
        className="Col"  
        style={{ 
          display: "flex", 
          justifyContent: "center",
        }}>
          <h2 style={{fontFamily: "Roboto"}}>logo</h2>
          <h1 style={{fontFamily: "Roboto"}}>NOME EMPRESA</h1>
      </div>
      <nav
        className="Col" 
        style={{ 
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <p><Link to="/" style={{textDecoration: "none", color: "black", marginRight: "10px",}}>Home/Sobre</Link></p>
        <p><Link to="/blog" style={{textDecoration: "none", color: "black", marginRight: "10px",}}>Blog</Link></p>
        <p><Link to="/" style={{textDecoration: "none", color: "black", marginRight: "10px",}}>Cursos</Link></p>
        <p><Link to="/" style={{textDecoration: "none", color: "black", marginRight: "10px",}}>Contato</Link></p>
      </nav>
    </div>
  )
};

export default Header;
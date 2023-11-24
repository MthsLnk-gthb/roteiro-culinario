import React from "react";
import "./MainPage.css";
import { Link, Route, Router, Routes } from "react-router-dom";
import ListaDeCards from "../ListaDeCards/ListaDeCards";

const MainScreen = () => {
  return (
    <main>
      <header>
          <nav className="nav-bar">
            <Link className="header-btn" to="https://www.youtube.com/">
              Receitas
            </Link>
            <Link className="header-btn" to="https://www.instagram.com/">
              Instagram
            </Link>
            <Link className="header-btn" to="/https://youtube.com">
              Notícias
            </Link>
            <Link className="header-btn" to="/blog">
              Blog
            </Link>
          </nav>
      </header>

      <article className="introducao">
        <h1>Roteiro Culinário</h1>
        <p>
          Descubra os segredos da boa comida e das melhores bebidas. Explore
          locais, sabores irresistíveis e experiências gastronômicas. Seja você
          um amante de cafés aconchegantes, doces ou bares animados, nossa
          jornada culinária tem algo para todos os gostos.
        </p>
      </article>

      <ListaDeCards />
    </main>
  );
};


export default MainScreen;

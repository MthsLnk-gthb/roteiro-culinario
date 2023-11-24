import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./blog.css"

const Blog = () =>{
    return (
      <main>
        <h1 className="nome-do-blog">Blog Roteiro Culinário</h1>

        <article>
          <h2 className="descricao-do-texto">
            Descubra novos horizontes gastronômicos
          </h2>
          <p className="texto">
            Olá, amantes da boa comida! Hoje estou animada para compartilhar com
            vocês algumas experiências culinárias incríveis que tive
            recentemente. <br />
            Minha jornada me levou a descobrir sabores autênticos
            e pratos deliciosos, e eu mal posso esperar para compartilhar essas
            descobertas com vocês. Comecemos com uma visita a uma charmosa
            confeitaria local, onde me deliciei com sobremesas artesanais feitas
            com ingredientes frescos. A combinação de sabores era simplesmente
            divina, e cada mordida era uma explosão de felicidade no paladar. Em
            seguida, mergulhei no mundo das especiarias em um mercado
            tradicional, onde encontrei uma variedade de temperos exóticos que
            deram um toque especial às minhas receitas. A paleta de cores e
            aromas era de encher os olhos e despertar a criatividade na cozinha.
            Aventurei-me também em um restaurante que celebrava a culinária
            local, oferecendo pratos autênticos da região. Cada garfada era uma
            viagem pelos sabores da cultura, uma experiência que certamente
            ficará marcada na minha memória gastronômica. Espero que essas
            breves histórias inspirem vocês a explorar novos horizontes
            culinários. A cozinha é uma jornada sem fim, repleta de descobertas
            emocionantes e deliciosas. Fiquem ligados para mais receitas e
            histórias incríveis. Bom apetite!
          </p>
        </article>
      </main>
    );
}

export default Blog
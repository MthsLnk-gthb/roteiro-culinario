import React from 'react'
import './Card.css'

const Card = ({
  imagem,
  nome,
  endereco,
  bairro,
  diasFuncionamento,
  horarioFuncionamento,
  feriados,
}) => {
  return (
    <article className="fundo-card">
      <img src={imagem} alt="" />
      <section className="caixa-do-conteudo">
          <h1 className="nome-do-local">{nome}</h1>
          <h2 className='endereco-do-local'>{endereco}</h2>
          <h3 className="bairro">{bairro}</h3>
          <h4 className="dias-de-funcionamento">{diasFuncionamento}</h4>
          <h4 className="horario-de-funcionamento">{horarioFuncionamento}</h4>
          <h5 className="funcionamento-feriados">{feriados}</h5>
      </section>
    </article>
  );
};

export default Card
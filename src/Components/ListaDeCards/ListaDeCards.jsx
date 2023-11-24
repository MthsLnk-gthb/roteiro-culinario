import React, { useEffect, useState } from "react";
import Card from "../CardDoLugar/Card";
import "./ListaDeCards.css";
import Filtros from "../Filtros/Filtros";

const ListaDeCards = () => {
  const [estabs, setEstabs] = useState([]);
  const [estabsFiltrados, setEstabsFiltrados] = useState([]);

  useEffect(() => {
    fetch("../locais.json", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erro na requisição: ${res.status}`);
        }
        return res.json();
      })
      .then((res) => {
        setEstabs(res);
        setEstabsFiltrados(res);
      })
      .catch((error) => console.error("Erro ao carregar os dados:", error));
  }, []);

  const handleFiltro = (filtrados) => {
    setEstabsFiltrados(filtrados);
  };

  return (
    <article className="lista-dos-cards">
      <section className="box-dos-filtros">
        <Filtros dados={estabs} setFiltrados={handleFiltro} />
      </section>
      {estabsFiltrados.map((local) =>
        local.estabelecimentos.map((estab) => (
          <Card
            key={estab.nome}
            imagem={estab.imagem}
            nome={estab.nome}
            endereco={estab.endereco}
            bairro={estab.bairro}
            diasFuncionamento={estab.diasFuncionamento}
            horarioFuncionamento={estab.horarioFuncionamento}
            feriados={estab.feriados}
          />
        ))
      )}
    </article>
  );
};

export default ListaDeCards;




import React, { useState } from 'react';
import './Filtros.css';

const Filtros = ({ setFiltrados, dados }) => {
  const [selectedTipo, setSelectedTipo] = useState('todas');
  const [selectedFiltro, setSelectedFiltro] = useState('');

  function handleClickTipo(event) {
    const selectedOption = event.target.value;
    setSelectedTipo(selectedOption);
    filterEstabelecimentos(selectedOption, selectedFiltro);
  }

  function handleClickFiltro(event) {
    const selectedOption = event.target.value;
    setSelectedFiltro(selectedOption);
    filterEstabelecimentos(selectedTipo, selectedOption);
  }

  function filterEstabelecimentos(tipo, filtro) {
    const filtrados = dados.reduce((estabsAcumulados, categoria) => {
      if (tipo === 'todas' || categoria.infoComum.tipo === tipo) {
        const estabelecimentosFiltrados = categoria.estabelecimentos.filter((estabelecimento) => {
          if (!filtro) return true;

          if (filtro === 'fimDeSemana') {
            return estabelecimento.diasFuncionamento.includes('Sab');
          }

          if (filtro === 'feriados') {
            return estabelecimento.feriados === 'Abre em feriados';
          }

          return true;
        });

        estabsAcumulados.push({
          ...categoria,
          estabelecimentos: estabelecimentosFiltrados,
        });
      }

      return estabsAcumulados;
    }, []);

    setFiltrados(filtrados);
  }

  return (
    <article className="box-dos-filtros">
      <section className="section-dos-filtros">
        <h2>Filtrar por :</h2>
        <select
          className="select-tipo"
          value={selectedTipo}
          onChange={handleClickTipo}
        >
          <option value="todas">Todas</option>
          <option value="Cafeteria">Cafeteria</option>
          <option value="Bar">Bar</option>
          <option value="Confeitaria">Confeitaria</option>
        </select>

        <select
          className="select-filtros"
          value={selectedFiltro}
          onChange={handleClickFiltro}
        >
          <option value="">Sem filtro</option>
          <option value="fimDeSemana">Abre fim de semana</option>
          <option value="feriados">Abre em feriados</option>
        </select>
      </section>
    </article>
  );
}

export default Filtros;


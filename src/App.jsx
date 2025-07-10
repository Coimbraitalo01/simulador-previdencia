import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [valor, setValor] = useState(100000);
  const [tempo, setTempo] = useState(10);
  const [resultado, setResultado] = useState(null);

  const calcularPrevidencia = () => {
    const taxaMensal = 0.005; // 0.5% ao mês
    const totalMeses = tempo * 12;
    const montante = valor * Math.pow(1 + taxaMensal, totalMeses);
    setResultado(montante.toFixed(2));
  };

  return (
    <div className="app-container">
      <div className="simulador-box">
        <h1 className="titulo-principal">SIMULADOR DE PREVIDÊNCIA</h1>
        
        <div className="input-group">
          <label>VALOR MENSAL (R$)</label>
          <input
            type="range"
            min="1000"
            max="100000"
            step="1000"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
          <span className="valor-display">R$ {valor.toLocaleString('pt-BR')}</span>
        </div>

        <div className="input-group">
          <label>PRAZO (anos)</label>
          <input
            type="range"
            min="5"
            max="30"
            value={tempo}
            onChange={(e) => setTempo(e.target.value)}
          />
          <span className="valor-display">{tempo} anos</span>
        </div>

        <button className="botao-simular" onClick={calcularPrevidencia}>
          SIMULAR
        </button>

        {resultado && (
          <div className="resultado-container">
            <h3>PROJEÇÃO DE RETORNO</h3>
            <div className="montante-final">
              R$ {parseFloat(resultado).toLocaleString('pt-BR', {minimumFractionDigits: 2})}
            </div>
            <div className="detalhes-retorno">
              <p>Total aplicado: R$ {(valor * tempo * 12).toLocaleString('pt-BR')}</p>
              <p>Rentabilidade: {((resultado/(valor * tempo * 12)-1)*100).toFixed(2)}%</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
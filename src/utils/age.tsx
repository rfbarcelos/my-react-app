import React, { useState } from 'react';

function IdadeCalculator() {
  const [anoNascimento, setAnoNascimento] = useState('');
  const [idade, setIdade] = useState(null);

  const calcularIdade = () => {
    const anoAtual = new Date().getFullYear();
    const anoNascimentoInt = parseInt(anoNascimento, 10);

    if (anoNascimentoInt && anoNascimentoInt <= anoAtual) {
      const idadeCalculada = anoAtual - anoNascimentoInt;
      setIdade(idadeCalculada);
    } else {
      setIdade(null);
    }
  };

  return (
    <div>
      <h2>Calculadora de Idade</h2>
      <input
        type="number"
        placeholder="Ano de Nascimento"
        value={ anoNascimento }
        onChange={ (e) => setAnoNascimento(e.target.value) }
      />
      <button onClick={ calcularIdade }>Calcular</button>
      {idade !== null && (
        <p>
          Sua idade é:
          {idade}
          anos
        </p>
      )}
    </div>
  );
}

export default IdadeCalculator;

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [lista, setLista] = useState([]);
  const [genero, setGenero] = useState('');
  const [faixa, setFaixa] = useState('');

  useEffect(() => {
    buscar();
  }, [genero, faixa]);

  const buscar = async () => {
    try {
      const res = await axios.get('http://localhost:3001/pessoas', {
        params: { genero, faixaEtaria: faixa },
      });
      setLista(res.data);
    } catch (err) {
      console.log('Erro ao buscar:', err);
    }
  };

  const removerPessoa = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/pessoas/${id}`);
      buscar();
    } catch (err) {
      console.log('Erro ao deletar:', err);
    }
  };

  const formatarData = (iso) => {
    const [ano, mes, dia] = iso.split('-');
    return `${dia}/${mes}/${ano}`;
  };

  const icones = {
    masculino: '👨',
    feminino: '👩',
    trans: '⚧️',
    nb: '🌈',
    naoInformado: '❔',
  };

  return (
  <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', backgroundColor: '#000', color: '#fff' }}>
    <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Usuários Cadastrados</h1>

    <a href="/cadastrar">
      <button
        style={{
          marginBottom: '1.5rem',
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          backgroundColor: '#333',
          color: '#fff',
          border: '1px solid #fff',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Cadastrar Usuário
      </button>
    </a>

    <div style={{ marginBottom: '2rem', fontSize: '1rem' }}>
      <label>Gênero: </label>
      <select
        value={genero}
        onChange={(e) => setGenero(e.target.value)}
        style={{ marginRight: '1rem', padding: '0.3rem' }}
      >
        <option value="">Todos</option>
        <option value="masculino">Masculino</option>
        <option value="feminino">Feminino</option>
        <option value="trans">Transgênero</option>
        <option value="nb">NB</option>
        <option value="naoInformado">Prefiro não dizer</option>
      </select>

      <label>Faixa Etária: </label>
      <select
        value={faixa}
        onChange={(e) => setFaixa(e.target.value)}
        style={{ padding: '0.3rem' }}
      >
        <option value="">Todas</option>
        <option value="crianca">Criança</option>
        <option value="adulto">Adulto</option>
        <option value="idoso">Idoso</option>
      </select>
    </div>

    <ul style={{ listStyle: 'none', padding: 0 }}>
      {lista.map((p) => (
        <li
          key={p.id}
          style={{
            marginBottom: '1rem',
            padding: '0.5rem',
            border: '1px solid #666',
            borderRadius: '5px',
            backgroundColor: '#111'
          }}
        >
          <strong>{icones[p.genero] || '👤'} {p.nome}</strong><br />
          Gênero: {p.genero}<br />
          Nascimento: {formatarData(p.nasc)}<br />
          ID: {p.id}
          <br />
          <button
            style={{
              marginTop: '0.5rem',
              backgroundColor: '#660000',
              color: '#fff',
              border: 'none',
              padding: '0.3rem 0.8rem',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
            onClick={() => removerPessoa(p.id)}
          >
            Excluir
          </button>
        </li>
      ))}
    </ul>
  </div>
);
}
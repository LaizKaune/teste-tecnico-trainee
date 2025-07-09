import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Cadastrar() {
  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('');
  const [nasc, setNasc] = useState('');
  const router = useRouter();

  const salvar = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3001/pessoas', {
        nome,
        genero,
        nasc,
      });
      router.push('/');
    } catch (err) {
      console.log('Erro ao cadastrar:', err);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Cadastrar Usuário</h1>

      <form onSubmit={salvar} style={{ maxWidth: '400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '1rem' }}>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <select
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          >
            <option value="">Selecione o gênero</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="trans">Transgênero</option>
            <option value="nb">NB</option>
            <option value="naoInformado">Prefiro não dizer</option>
          </select>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <input
            type="date"
            value={nasc}
            onChange={(e) => setNasc(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.5rem',
            backgroundColor: '#5cb85c',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Concluir
        </button>
      </form>
    </div>
  );
}
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './filme-info.css';

import api from '../../services/api';

function Filme() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: "5da9e9ec1d460b54205a9798c1dab833",
          language: "pt-BR",
        }
      })
      .then((response) => {
        setFilme(response.data);
        setLoading(false);
        // console.log(response.data)
      })
      .catch(() => { // caso não encontre o filme
        console.log("FILME NÃO ENCONTRADO");
        navigate("/", { replace: true });
      })
    }

    loadFilme();

    return () => {
        console.log("COMPONENTE FOI DESMONTADO.");
    }
  }, [navigate, id]);

  if(loading) {
    return(
      <div className='filme-info'>
        <h1>Carregando detalhes...</h1>
      </div>
    )
  }
  return(
    <div className='filme-info'>
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>

      <strong>Avaliação: {filme.vote_average}/10</strong>

      <div className='area-buttons'>
        <button>Salvar</button>
        <button>
          <Link to={`https://youtube.com/results?search_query=${filme.title} Trailer` } target='_blank' rel='external' >
            Trailer
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Filme;

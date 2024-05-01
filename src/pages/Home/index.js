import api from "../../services/api";
import { useEffect, useState } from "react";

// URL da API : /movie/now_playing?api_key=5da9e9ec1d460b54205a9798c1dab833&language=pt-BR

function Home() {
  const [filmes, setFIlmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('movie/now_playing', {
        params: {
          api_key: '5da9e9ec1d460b54205a9798c1dab833',
          language: 'pt-BR',
          page: 1,
        }
      });

      console.log(response.data.results);
    }

    loadFilmes();
  }, []);

  return(
    <div>
      <h1>BEM VINDO A HOME</h1>
    </div>
  )
}

export default Home;

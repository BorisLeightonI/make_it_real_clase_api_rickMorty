import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [ loading, setLoading] = useState(false);

  const btn = false;


  useEffect(()=>{ // Se ejecuta cuando el componente se monta (ciclo de vida, con hook)
    axios.get('https://rickandmortyapi.com/api/character')
    /* Se ejecuta cuando status está entre: 100 y 399, no así con fetch */
      .then((res)=>{
        console.log('Respuesta:', res.data.results);
        setPosts(res.data.results);
      })
      .catch((err)=>{
        console.log('Hay un error', err);
      })
      .finally(()=>{
        console.log('Este es el finally');
        setLoading(false);
      })
  },[])

 

/*     if(loading) return(<p>Loading...</p>) */
  return (
    <>
    <h1>API Rick and Morty</h1>
      <div className="app">
        <br></br>
        {
          loading ? <p>Loading...</p>
          : posts.map((item)=>{
            return(
              <div className='card'>
                <h2>Name: {item.name}</h2>
                <p>Status: {item.status}</p>
                {btn ? <button>test</button>: ''}
                <img src={item.image} alt='imagen'/>
              </div>
            )
          })
        }
      </div>
    </>
  );
}

export default App;

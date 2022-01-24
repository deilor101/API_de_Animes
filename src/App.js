import react, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import SearchInput from "./SearchInput";
import './style.css'

const api = "https://kitsu.io/api/edge";



export default function App() {
  const [info, setInfo] = useState({})
  const [text, setText] = useState("");
  console.log(info)
  useEffect(() => {
    if (text) {
      fetch(`${api}/anime?filter[text]=${text}`).then((response) =>
        response.json()
      ).then((response)=>{
        setInfo(response)
      })
    }
  }, [text]);

  return (
    <div>
      <h1>Qual é a nota?</h1>
      <h2>Pesquise um anime e saiba a avaliação</h2>
      <SearchInput className='input' value={text} onChange={(search) => setText(search)} />
      {info.data && (
        <ul className="animes-list">
          {info.data.map((anime) => (
            <li key={anime.id}>
                <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle}/>
                <p>{anime.attributes.canonicalTitle}</p>
                <p>Nota: {anime.attributes.averageRating}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

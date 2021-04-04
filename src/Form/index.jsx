import "./style.scss";
import Subtitle from "../Subtitle";
import { useState } from "react";
import Error from "../Error";

const Form = ({ setSearchSong }) => {
  const [Data, setData] = useState({
    author: "",
    song: "",
  });
  const { author, song } = Data;
  const [error, SetError] = useState(false);
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setData({
      ...Data,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (author.trim() === "" || song === "") {
      SetError(true);
      return;
    }
    SetError(false);
    setSearchSong(Data);
    setData({
      author: "",
      song: "",
    });
  };
  return (
    <div className="wrapperForm">
      <Subtitle subtitle="Busca alguna canción" />
      {error ? <Error message="Faltan campos por rellenar" /> : null}
      <form className="form" onSubmit={handleSubmit}>
        <div className="wrapperInputs">
          <div className="wrapperInput">
            <label htmlFor="author" className="label">
              Ingresa el nombre del cantante O grupo
            </label>
            <input
              id="author"
              className="input"
              value={author}
              name="author"
              placeholder="Nombre del artista"
              onChange={handleOnChange}
            />
          </div>
          <div className="wrapperInput">
            <label htmlFor="song" className="label">
              Ingresa el nombre de la canción
            </label>
            <input
              id="song"
              className="input"
              value={song}
              name="song"
              placeholder="Nombre de la canción"
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="wrapperButton">
          <button type="Submit" className="button">
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

import Header from "./Header";
import "./App.scss";
import Form from "./Form";
import { useEffect, useState } from "react";
import axios from "axios";
import WrapperData from "./WrapperData";
import Spinner from "./Spinner";
function App() {
  const [SearchSong, setSearchSong] = useState({});
  const [Data, setData] = useState({
    lyrics: "",
    artist: {},
  });
  const [Loading, SetLoading] = useState(false);
  useEffect(() => {
    const hangleGetData = async () => {
      if (Object.keys(SearchSong).length === 0) return;
      SetLoading(true);
      const { author, song } = SearchSong;
      const [lyrics, artist] = await Promise.all([
        axios.get(`https://api.lyrics.ovh/v1/${author}/${song}`),
        axios.get(
          `https://theaudiodb.com/api/v1/json/1/search.php?s=${author}`
        ),
      ]);
      setData({
        lyrics: lyrics.data.lyrics,
        artist: artist.data.artists,
      });
      SetLoading(false);
    };
    hangleGetData();
  }, [SearchSong]);
  return (
    <div className="App">
      <Header />
      <main className="wrapperSection">
        <Form setSearchSong={setSearchSong} />
      </main>
      <section className="wrapperSection">
        {Loading ? <Spinner /> : <WrapperData Data={Data} />}
      </section>
    </div>
  );
}

export default App;

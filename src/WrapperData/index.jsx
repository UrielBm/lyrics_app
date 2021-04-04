import { Artist } from "./Artist";
import { Lyrics } from "./Lyrics";
import "./style.scss";
const WrapperData = ({ Data }) => {
  const { artist, lyrics } = Data;
  return (
    <section className="GeneralWrapper">
      <Artist artist={artist} />
      <Lyrics lyrics={lyrics} />
    </section>
  );
};

export default WrapperData;

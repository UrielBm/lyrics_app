import Subtitle from "../Subtitle";
import "./style.scss";

export const Lyrics = ({ lyrics }) => {
  if (lyrics.length === 0) return null;
  return (
    <div className="wrapperLyrics">
      <Subtitle subtitle="letra de la canción" />
      <p className="lyrics">{lyrics}</p>
    </div>
  );
};

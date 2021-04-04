import "./style.scss";
import music from "../assets/img/musica.png";
const EsterEgg = () => {
  return (
    <div className="wrapperEgg">
      <p className="egg">Amo a Dianita Bebe</p>
      <img src={music} className="img" alt="heart" />
    </div>
  );
};

export default EsterEgg;

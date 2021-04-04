import "./style.scss";
import Title from "../Title";
import { useState } from "react";
import EsterEgg from "../EsterEgg";

const Header = () => {
  const [esterEgg, setEsterEgg] = useState(false);
  const handleOnClick = () => {
    esterEgg ? setEsterEgg(false) : setEsterEgg(true);
  };
  return (
    <header className="header">
      <section className="wrapperTitle" onClick={handleOnClick}>
        {esterEgg ? <EsterEgg /> : <Title title="Buscador de canciones" />}
      </section>
    </header>
  );
};

export default Header;

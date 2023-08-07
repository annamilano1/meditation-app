import Button from "../../componets/button/Button";
import Med from "../../images/meditation.png";
import { Link } from "react-router-dom";
import Slider from "../../componets/Slider/Slider";
import shells from "../../images/shells.png";
import tree from "../../images/tree.png";
import bamboo from "../../images/bamboo.png";
import SessionContext from "../../context/SessionContext";
import { useContext } from "react";
import styles from "./Home.module.css";

function Home() {
  const { scenography, setScenography } = useContext(SessionContext);

  //

  return (
    <>
      <div className={styles.box}>
        <h1>Let's start a new session!</h1>
        <p>Select your options before starting a new session:</p>
        <Slider></Slider>

        <div className={styles.displayButtons}>
          <Button
            img={shells}
            handleClick={() => setScenography("sea")}
            selected={scenography === "sea" ? styles.select : styles.button}
            description={"sea"}
          ></Button>
          <Button
            img={bamboo}
            handleClick={() => setScenography("zen")}
            selected={scenography === "zen" ? styles.select : styles.button}
            description={"bamboo"}
          ></Button>
          <Button
            img={tree}
            handleClick={() => setScenography("jungle")}
            selected={scenography === "jungle" ? styles.select : styles.button}
            description={"jungle"}
          ></Button>
        </div>
        {scenography && (
          <Link to="/Meditation" className={styles.link}>
            <Button img={Med} description={"start"}></Button>
            <p>GO</p>
          </Link>
        )}
      </div>
    </>
  );
}

export default Home;

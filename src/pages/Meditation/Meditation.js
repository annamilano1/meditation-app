import Timer from "../../componets/Timer";
import styles from "./Meditation.module.css";
import Button from "../../componets/button/Button";
import Play from "../../images/play.png";
import Pause from "../../images/pause.png";
import Settings from "../../images/settings.png";

import { Link } from "react-router-dom";
import { useState, useEffect, useContext, useRef } from "react";
import SessionContext from "../../context/SessionContext";

import treeVideo from "../../videos/treeVideo.mp4";
import seaVideo from "../../videos/seaVideo.mp4";
import zenVideo from "../../videos/zenVideo.mp4";

import JungleAudio from "../../sounds/JungleAudio.mp3";
import ZenAudio from "../../sounds/ZenAudio.mp3";
import SeaAudio from "../../sounds/SeaAudio.mp3";
import OptionalAudio from "../../sounds/OptionalAudio.mp3";

function Meditation() {
  const settings = useContext(SessionContext);
  const [isPaused, setIsPaused] = useState(true);
  const [secondsLeft, setSecondsleft] = useState(0);
  const totalSeconds = settings.meditationMinutes * 60;
  const { scenography } = useContext(SessionContext);
  const audioRef = useRef();

  useEffect(() => {
    setSecondsleft(totalSeconds);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      if (secondsLeft == 0) {
        setIsPaused(true);
        setSecondsleft(totalSeconds);
        audioRef.current?.pause();
        return;
      }
      setTimeout(() => {
        let tmp = secondsLeft;
        tmp -= 1;
        setSecondsleft(tmp);
      }, 1000);
    }
  }, [isPaused, secondsLeft]);

  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;

  return (
    <>
      <div className={styles.page}>
        <video
          src={
            scenography === "sea"
              ? seaVideo
              : scenography === "zen"
              ? zenVideo
              : scenography === "jungle"
              ? treeVideo
              : null
          }
          autoPlay
          loop
        ></video>
        <div className={styles.elements}>
          <Link to="/">
            <Button img={Settings} />
          </Link>

          <Timer percentage={percentage} time={minutes + ":" + seconds} />

          {isPaused ? (
            <Button
              img={Play}
              handleClick={() => {
                setIsPaused(false);

                audioRef.current?.play();
              }}
            />
          ) : (
            <Button
              img={Pause}
              handleClick={() => {
                setIsPaused(true);

                audioRef.current?.pause();
              }}
            />
          )}
        </div>

        <audio
          src={
            scenography == "sea"
              ? SeaAudio
              : scenography == "zen"
              ? ZenAudio
              : scenography == "jungle"
              ? JungleAudio
              : OptionalAudio
          }
          ref={audioRef}
          loop
          preload="none"
        />
      </div>
    </>
  );
}

export default Meditation;

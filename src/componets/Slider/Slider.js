import ReactSlider from "react-slider";
import style from "../Slider/Slider.module.css";
import SessionContext from "../../context/SessionContext";
import { useContext } from "react";
function Slider() {
  const settings= useContext(SessionContext);
  return (
    <>
      <label className={style.label}>{settings.meditationMinutes}:00</label>
      <ReactSlider
        className={style.slider}
        thumbClassName={style.thumb}
        trackClassName={"track"}
        value={settings.meditationMinutes}
        onChange={(newValue) => settings.setMeditationMinutes(newValue)}
        min={1}
        max={45}
      />
    </>
  );
}

export default Slider;

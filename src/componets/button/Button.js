import styles from "../button/Button.module.css";

function Button({ img, handleClick, handleChange, selected, description }) {
  return (
    <button className={selected || styles.button} onChange={handleChange} value>
      <img src={img} onClick={handleClick} alt={description}></img>
    </button>
  );
}

export default Button;

import React, { useState } from "react";
import styles from "./ToggleTheme.module.css";

const ToggleTheme = () => {

	const [theme, setTheme] = useState('light')
	const handleClick = () => {
  setTheme(theme === 'light' ? 'dark' : 'light');
  const containerToggle = document.getElementById("containerToggle");
  containerToggle.style.backgroundColor = theme === 'light' ? "#8f8f61" : "#4A6163";
	}

return (
	<div className={styles.containerToggle} id="containerToggle">
	<input type="checkbox" id="toggle" className={styles.toggleCheckbox} onClick={handleClick}/>
	<label htmlFor="toggle" className={styles.toggleLabel}>
	</label>
	<div className={styles.divBackground}><svg
       xmlns="http://www.w3.org/2000/svg"
       width="16"
       height="16"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
       aria-hidden="true"
       focusable="false"
       >
    <path d="M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10z" />
  </svg>
  <svg
       xmlns="http://www.w3.org/2000/svg"
       width="16"
       height="16"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
       aria-hidden="true"
       focusable="false">
    <path d="M12 1v2m0 18v2M4 4l2 2m12 12 2 2M1 12h2m18 0h2M4 20l2-2M18 6l2-2"/>
  	</svg></div>
</div>
)
}

export default ToggleTheme;
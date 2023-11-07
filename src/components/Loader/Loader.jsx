import styles from "./Loader.module.css";
import LoadingImage from "../../assets/images/loading-peel.png";
import { useGlobalContext } from "../../contexts/DarkModeContext";

const Loader = () => {
  const { isDarkTheme } = useGlobalContext()
return (
  <div id="loader" className={`${styles.loader} ${isDarkTheme ? styles['dark-loader'] : ''}`}> 
            <img src={LoadingImage} alt="loading state" />
            <h1>Loading recipes..</h1>
        </div>
)
}

export default Loader;
import styles from "./Loader.module.css";
import LoadingImage from "../../assets/images/loading-peel.png";

const Loader = () => {
return (
  <div id="loader" >
  <img src={LoadingImage} alt="loading state" />
  <h1>Loading recipes..</h1>
  </div>
)
}

export default Loader;
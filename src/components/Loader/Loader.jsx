// import css from "./loader.module.css"
import { Bars } from 'react-loader-spinner';
const Loader = () => {
  return (
    <div className="loaderStyle">
      <Bars
        height={80}
        width={80}
        color="#4fa94d"
        ariaLabel="bars-loading"
        visible={true}
      />
    </div>
  );
};

export default Loader;

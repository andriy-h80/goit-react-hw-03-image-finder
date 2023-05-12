import { RotatingLines } from  'react-loader-spinner';
import { LoaderBox } from './Loader.styled';


const Loader = () => {
    return (
      <LoaderBox>
        <RotatingLines
            strokeColor="#3f51b5"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
        />
      </LoaderBox>
    );
  };

export default Loader;

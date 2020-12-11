import loadingImg from '../images/loading.svg';

const Loading = () => {
  return (
    <div className="loading-container">
      <img className="loading-image" src={loadingImg} alt="loading wheel"></img>
    </div>
  );
};

export default Loading;

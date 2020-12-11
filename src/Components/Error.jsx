const ErrorDisplay = ({ errCode, errMessage, content }) => {
  return (
    <div className="error-display-container">
      <p className="error-display-number">
        {' '}
        {/* <img className="error-img" src={errorImg} alt="error-icon" /> */}
        {errCode}
      </p>
      <p className="error-display-message">{errMessage}</p>
    </div>
  );
};

export default ErrorDisplay;

import "./style.scss";
const Error = ({ message }) => {
  return (
    <div className="wrapperError">
      <p className="error">{message}</p>
    </div>
  );
};

export default Error;

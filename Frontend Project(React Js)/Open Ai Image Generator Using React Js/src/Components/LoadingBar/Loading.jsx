import "bootstrap/dist/css/bootstrap.min.css";
import "./Loading.css";
const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner-grow text-primary adSpinner" role="status"></div>
      <div className="loading-text">Loading....</div>
    </div>
  );
};

export default Loading;

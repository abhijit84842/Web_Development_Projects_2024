import "bootstrap/dist/css/bootstrap.min.css";
import "./Loading.css";
const Loading = () => {
  return (
    <div className="loading-container">
      <div class="spinner-grow text-primary adSpinner" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;

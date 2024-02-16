import "bootstrap/dist/css/bootstrap.min.css";
const LoadingSpinner = () => {
  return (
    <div class="d-flex justify-content-center spinner">
      <div
        class="spinner-border"
        style={{ width: "8rem", height: "8rem" }}
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;

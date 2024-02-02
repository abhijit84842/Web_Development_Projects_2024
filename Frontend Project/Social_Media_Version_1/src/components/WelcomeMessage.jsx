const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <center>
      <h1 className="welcome-message">There are no post</h1>

      <button
        type="button"
        onClick={onGetPostsClick}
        className="btn btn-primary"
      >
        Fetch Post
      </button>
    </center>
  );
};

export default WelcomeMessage;

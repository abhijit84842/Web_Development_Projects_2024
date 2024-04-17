import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <div className="newsletter-container">
      <h1>Get Exclusive Offers On Your Email..</h1>
      <p>Subscribe to our news letter and stay updated</p>
      <div>
        <input type="email" placeholder="Your email id.." />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
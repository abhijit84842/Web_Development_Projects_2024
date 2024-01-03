let CurrentTime = () => {
  let time = new Date();
  return (
    <center>
      <div>
        <p>
          This is the Current Date : {time.toLocaleDateString()} And Time is :
          {time.toLocaleTimeString()}
        </p>
      </div>
    </center>
  );
};

export default CurrentTime;

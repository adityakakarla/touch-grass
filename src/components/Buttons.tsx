import { useState } from "react";
import MyImage from "./MyImage";

function MyButton() {
  const [clickCount, setCount] = useState(0);
  const [imageSource, setImageSource] = useState(
    "https://source.unsplash.com/random/?grass"
  );

  function handleClick() {
    setCount(clickCount + 1);

    let randomNumber = Math.floor(Math.random() * 100).toString();
    setImageSource("https://source.unsplash.com/random/?grass&" + randomNumber)
  }

  function handleResetClick() {
    setCount(0);
  }

  return (
    <>
      <div className="text-center px-5 container">
        <button className="btn btn-success button-image" onClick={handleClick}>
          Click Me
        </button>
        <MyImage imageSource={imageSource} />
      </div>
      <div>
        <h3 className="my-4 text-center">
          You have touched grass {clickCount} times
        </h3>
        <button
          className="btn btn-danger reset-button mt-3"
          onClick={handleResetClick}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default MyButton;

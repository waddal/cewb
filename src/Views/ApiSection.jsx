import React, { useEffect } from "react";
// import { crypto } from "crypto";
// import { createHmac } from "crypto-browserify";
// const { createHmac } = await import("crypto");

// const secret = "abcdefg";
// const hash = createHmac("sha256", secret)
//   .update("I love cupcakes")
//   .digest("hex");

const ApiSection = () => {
  // const characters =
  //   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";

  // function generateVerifier(length) {
  //   let result = " ";
  //   const charactersLength = characters.length;
  //   for (let i = 0; i < length; i++) {
  //     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  //   }

  //   return result;
  // }

  // useEffect(() => {
  //   console.log(generateVerifier(44));
  // }, []);

  return (
    <div className="apiContainer">
      <div className="levelBar">
        <div className="skills hp">hp</div>
      </div>
      <div className="levelBar">
        <div className="skills vim">vim</div>
      </div>
      <div className="levelBar">
        <div className="skills str">str</div>
      </div>
      <div className="levelBar">
        <div className="skills int">int</div>
      </div>
    </div>
  );
};

export default ApiSection;

{
  /* <p>display data pulled from apis like:</p>
      <ol>
        <li>
          <h3>fitbit</h3>
          <button onClick={() => console.log(makeSecret(salad))}>oof</button>
        </li>
        <li>geocache</li>
        <li>meetup</li>
        <li>spotify</li>
      </ol> */
}

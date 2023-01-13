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
    <div>
      <p>display data pulled from apis like:</p>
      <ol>
        <li>
          <h3>fitbit</h3>
          <button onClick={() => console.log(makeSecret(salad))}>oof</button>
        </li>
        <li>geocache</li>
        <li>meetup</li>
        <li>spotify</li>
      </ol>
    </div>
  );
};

export default ApiSection;

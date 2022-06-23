import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["A Full Stack Web Developer", "A Traveller", "A MERN Stack Developer", "An Automobile Enthusiast"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
    </>
  );
};
// export const Type1 = () => {
//   return (
//     <>
//       <Typewriter
//         options={{
//           strings: ["Salem Basumata"],
//           autoStart: true,
//           loop: true,
//           deleteSpeed: 50
//         }}
//       />
//     </>
//   );
// };

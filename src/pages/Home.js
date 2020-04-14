import React from "react";
//import myImage from '../../public/me.jpeg'

function Home(props) {
  return (
    <div className="home-component">
      <div className="image-container">
        <img src={process.env.PUBLIC_URL + '/me.jpeg'} alt="" />
      </div>
      <h1>Aboubakari Soumanou Petoni</h1>
    </div>
  );
}

export default Home;

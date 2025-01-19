import React from "react";

function Home({ name, city, color }) {
  const headerStyle = { color: color };

  return (
    <div id="home">
      <h1 style={headerStyle}>
        {name} <span>in {city}</span>
      </h1>
    </div>
  );
}

export default Home;


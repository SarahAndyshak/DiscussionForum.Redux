import React from "react";

function Header(){

  const headerStyles = {
    textAlign: "center",
    padding: 30,
    margin: 5,
    // backgroundImage:`url(${Grass})`,
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top 35%",
    color: "black",
    boxShadow: "0 2px 5px rgba(0,0,0,0.3)"
  }

  return(
    <React.Fragment>
      <div style={headerStyles}>
        <h1>Discussion Board</h1>
        {/* <hr /> */}
      </div>
    </React.Fragment>
  );
}

export default Header;
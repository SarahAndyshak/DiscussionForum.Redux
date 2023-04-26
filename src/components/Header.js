import React from "react";
import pic3 from './../img/pic3.jpg';
function Header(){

  const headerStyles = {
    textAlign: "center",
    padding: 30,
    margin: 5,
    backgroundImage:`url(${pic3})`,
    // backgroundSize: "100%",
    // backgroundRepeat: "no-repeat",
    backgroundPosition: "center top 79%",
    color: "black",
    boxShadow: "0 2px 5px rgba(0,0,0,0.3)"
  }

  return(
    <React.Fragment>
      <div style={headerStyles}>
        <h1><strong>Memphis Design Fans Talk</strong></h1>
        {/* <hr /> */}
      </div>
    </React.Fragment>
  );
}

export default Header;
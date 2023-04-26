import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PostControl from "./PostControl";
import Container from 'react-bootstrap/Container';

// import './App.css';
import Header from "./Header";

function App() {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <PostControl />
      </Container>
    </React.Fragment>
  );
}

export default App;
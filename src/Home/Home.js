import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap';
import "./Home.css";

 const Home = () => {

    const history = useHistory();
    const redirectToTarget = () => {
       history.push("/Profiles");
      };

    return (
      <div className="Home">
        <div className="lander">
          <h1>Home Page</h1>
          <p>Click Button Navigation</p>
          <form>
            <Button variant="btn btn-success" onClick={redirectToTarget}>Go to Profile Page</Button>
          </form>
        </div>
      </div>
    );
  };

  export default Home;

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap';
import axios from "axios";
import "./Home.css";

 const Home = () => {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/photos').then(res =>{
          const photos = res.data;
          setPhotos(photos);
      });
  }, []);

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
        <div className="axiosPhoto">
            <ul>
                {photos.map(photo => (
                    <li key={photo.id}>
                      {photo.title}, {photo.url}, {" "} <br></br>
                      <img src={photo.url} alt={photo.title} />
                    </li>
                ))}
            </ul>
        </div>
      </div>
    );
  };

  export default Home;

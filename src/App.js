import logo from './logo.svg';
import './App.css';
import {getPictureOfTheDay} from "./api";
import {useEffect, useState} from "react";

function App() {
  //useState is a hook, used previously
  //pod = picture of the day
  const [pod,setPod] = useState(null);
  //useEffect is a hook to trigger actions
  //useEffect is a function
  // takes two parameters - first a function that will happen when the effect triggers
  //  -two the dependency array tells the effect when to run 

  useEffect(() => {
    //useEffect hooks cannot call out to async calls directly
    const getImage = async () => {
      const response = await getPictureOfTheDay();
      console.log("Parsed response body:", response);

      setPod(response);
    }

    getImage();
  }, []);

  return (
    <div>
      {
        pod ?
          <>
            <h1>{pod.title}</h1>
            <p>{pod.explanation}</p>
            <img src={pod.hdurl} alt={pod.title}></img>         
          </>
          :
          <h1>Loading...</h1>        
      }
    </div>
  );
}

export default App;

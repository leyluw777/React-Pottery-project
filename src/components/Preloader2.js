import React, { useState, useEffect } from 'react'
import HomePage from './HomePage';
import Lottie from 'react-lottie';
import * as location from '../1055-world-locations.json'
import * as success from '../75839-jump-through-4-hoops.json'


const defaultOptions1 = {
    loop: true,
    autoplay: true, 
    animationData: location.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true, 
    animationData: success.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

function Preloader2() {
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(undefined);
    const [completed, setcompleted] = useState(undefined);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                setloading(true);
                setTimeout(() => {
                    setcompleted(true)
                },1000);
            });
        }, 2000)

        
    }, [])



    return (
        <>
        {!completed ? (
          <>
            {!loading ? (
              <Lottie options={defaultOptions1} height={200} width={200}  />
            ) : (
              <Lottie options={defaultOptions2} height={100} width={100} />
            )}
          </>
        ) : (
          <>
            <HomePage />
          </>
        )}
      </>
    );
}

export default Preloader2

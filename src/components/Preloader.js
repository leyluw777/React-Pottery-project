import React, { useState, useEffect } from 'react'
import ReactLoading from 'react-loading';


function Preloader() {
    const [data, setData] = useState([]);
    const [done, setDone] = useState(undefined);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                setDone(true)
            });
        }, 2000)
    }, [])



    return (
        <>
        {
            !done ?    <ReactLoading type={"bars"} color={"green"} height={500} width={200} />
       :
       <ul>
           {
               data.map(post => 
                <li key={post.id}> {post.title} </li>
                )
           }
       </ul>
        }
          
        </>
    )
}

export default Preloader

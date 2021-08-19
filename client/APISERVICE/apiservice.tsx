// import React, { useState } from "react";
// const URL = "http://localhost:";
// const PORT = 3001;

// interface getToursProps {
//     briefDescription: string
//     genre: string
//     id: number
//     images: string
//     location:string
//     rating: number
//     title: string
// }


// export const getTours = (): any => {
//     const [tours, setTours] = useState<Array<any>>([]);
//   fetch("http://10.10.22.219:3001/getTours").then((response) => {
//     return response.json().then((data) => setTours(data));
//   });
// };

// useEffect(()=> {
//     fetch('http://10.10.22.219:3001/getTours')
//     .then((response)=> {
//         return response.json()
//         .then((data) =>
//         setTours(data))
//     })
// })

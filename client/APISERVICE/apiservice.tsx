const BASE_URL =  'http://10.10.22.219:'
const PORT= 3001


export const getIndividualTour = (title: string): any => {
    return fetch(`${BASE_URL}${PORT}/getIndividualTour`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: title}),
      })
      .then((response) => response.json())
      .catch(error => console.log(`myerror: `,error))
}

export const getTours = ():any => {
    return fetch(`${BASE_URL}${PORT}/getTours`)
    .then((response) => response.json())
    .catch(error => console.log(`error api: `, error))
}


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
    .catch(error => console.log(`getTours Error: `, error))
}

export const getTourInfo = (id: number):any => {
    return fetch(`${BASE_URL}${PORT}/addInfo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tourId: id }),
    })
    .then((response) => response.json())
    .catch(error => console.log(`getTourInfo Error: `,error))
}


export const createBooking = (id:number, partySize:number, UserId=1): any => {
    return fetch(`${BASE_URL}${PORT}/newBooking`, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({TourId: id, partySize:partySize, UserId: UserId}),
    })
    .then((response)=> response.json())
    .catch(error => console.log(`Create Booking Error, see PaymentScreen: `, error))
}
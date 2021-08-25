const BASE_URL = "http://192.168.1.231:"
const PORT = 3001;

export const getIndividualTour = (title: string): any => {
  return fetch(`${BASE_URL}${PORT}/getIndividualTour`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: title }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(`myerror: `, error));
};

export const getTours = (): any => {
  return fetch(`${BASE_URL}${PORT}/getTours`)
    .then((response) => response.json())
    .catch((error) => console.log(`getTours Error: `, error));
};

export const getTourInfo = (id: number): any => {
  return fetch(`${BASE_URL}${PORT}/addInfo`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tourId: id }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(`getTourInfo Error: `, error));
};

export const createBooking = (
  id: number,
  partySize: number,
  UserId = 1
): any => {
  return fetch(`${BASE_URL}${PORT}/newBooking`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ TourId: id, partySize: partySize, UserId: UserId }),
  })
    .then((response) => response.json())
    .catch((error) =>
      console.log(`Create Booking Error, see PaymentScreen: `, error)
    );
};

export const joinGame = (password: number, userId = 1): any => {
  return fetch(`${BASE_URL}${PORT}/joinGame`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password: password, userId: userId }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(`Error joining game`, error));
};

export const getClue = (title: string, clueNumber: number): any => {
  console.log(`${BASE_URL}${PORT}/getNextClue`);

  return fetch(`${BASE_URL}${PORT}/getNextClue`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: title, clueNumber: clueNumber }),
  }).then((response) => response.json())
  .catch((error) => console.log(`Error getting next game state: `, error));
};

export const getRegisterInfo = (username: string, password:string, email:string, DOB: string) => {
  return fetch(`${BASE_URL}${PORT}/registerUser`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: username, password: password, email: email, DOB: DOB }),
  }).then((response) => response.json())
  .catch((error) => console.log(`Error Registering`, error)
  );
}

export const getLoginUser = (username: string, password: string) => {
  return fetch(`${BASE_URL}${PORT}/loginUser`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: username, password: password}),
  }).then((response) => response.json())
  .catch((error) => console.log(`Error Log in`, error)
  );
}

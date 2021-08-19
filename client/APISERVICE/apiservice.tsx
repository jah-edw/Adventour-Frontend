const URL = 'http://localhost:';
const PORT = 3001;


export const getTours = async () => {
  const allTours = await fetch(`http://localhost:3001/getTours`);
  console.log('getTours API :')
  return allTours.json()
};

    export const getToursThen = () => {
      fetch(`http://localhost:3001/getTours`)
        .then((response) => {
        return response.json()
          .then((allData) => {
            console.log(allData)
            return allData;
        });
      });
    } 

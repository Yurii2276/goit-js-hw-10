const API_KEY = "VhtyYnkyxMgfx5Bi5E4pd702JpEuRLc28Ufpscydr16jp6skkL1koymAXPZMTipi";

export function fetchBreeds() {
  const BASE_URL = "https://api.thecatapi.com/v1/breeds";

  const headers = new Headers();
  headers.append("x-api-key", API_KEY);

  return fetch(BASE_URL, { headers })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch((error) => {
      throw new Error(error.message);
    });
}






// import axios from "axios";

// const API_KEY = "VhtyYnkyxMgfx5Bi5E4pd702JpEuRLc28Ufpscydr16jp6skkL1koymAXPZMTipi";

// export function fetchBreeds() {
//   const BASE_URL = "https://api.thecatapi.com/v1/breeds";
  
//   axios.defaults.headers.common["x-api-key"] = API_KEY; 
  
//   return axios.get(BASE_URL)
//     .then((response) => {
//       return response.data;
//     })
//     .catch((error) => {
//       throw new Error(error.message);
//     });
// }

// import axios from "axios";

// const API_KEY = "live_VhtyYnkyxMgfx5Bi5E4pd702JpEuRLc28Ufpscydr16jp6skkL1koymAXPZMTipi";
// const headers = {
//   "x-api-key": API_KEY
// };

// export function fetchBreeds() {
//   const BASE_URL = "https://api.thecatapi.com/v1/breeds";

//   return axios.get(BASE_URL, { headers })
//     .then(response => {
//       if (response.status !== 200) {
//         throw new Error(response.statusText);
//       }
//       return response.data;
//     })
//     .catch(error => {
//       throw new Error(error.message);
//     });
// }

// export function fetchCatByBreed(breedId) {
//   const SEARCH_URL = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;

//   return axios.get(SEARCH_URL, { headers })
//     .then(response => {
//       if (response.status !== 200) {
//         throw new Error(response.statusText);
//       }
//       return response.data;
//     })
//     .catch(error => {
//       throw new Error(error.message);
//     });
// }




//  моє старе через фетчь
const API_KEY = "live_VhtyYnkyxMgfx5Bi5E4pd702JpEuRLc28Ufpscydr16jp6skkL1koymAXPZMTipi";
const headers = new Headers();
  headers.append("x-api-key", API_KEY);

export function fetchBreeds() {
  const BASE_URL = "https://api.thecatapi.com/v1/breeds";

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
};


export function fetchCatByBreed(breedId) {
    
  const SEARCH_URL = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&${API_KEY}`;

  return fetch(SEARCH_URL, { headers })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch((error) => {
      throw new Error(error.message);
    });
};







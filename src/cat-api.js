const API_KEY = "c28Ufpscydr16jp6skkL1koymAXPZMTipiVhtyYnkyxMgfx5Bi5E4pd702JpEuRL";
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
    
  const SEARCH_URL = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=VhtyYnkyxMgfx5Bi5E4pd702JpEuRL`;

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







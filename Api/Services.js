import axios from "axios"
const api_key = `166a2d5aac743d61e561ad2ad0fcb67a`
const API_URL = `https://api.themoviedb.org/3/movie/`
const API_URL2 = "https://api.themoviedb.org/3/search/movie";
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjZhMmQ1YWFjNzQzZDYxZTU2MWFkMmFkMGZjYjY3YSIsInN1YiI6IjY0NjNkNzhlZTNmYTJmMDEwM2EyOTU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Str52KXd29AKliw47hHrtwHrgo1x8HQZGCGrMWoICvQ'
    }
  };
  

//get info oclombia 
export const getPelisInfo = async () => {
    try {
        const response = await axios.get(`${API_URL}/popular?api_key=${api_key}`, options);
        return response.data.results;
      } catch (error) {
        console.error('error:', error);
        return [];
      }
}

export const getPelisAccion = async () => { 
  try {
    const response = await axios.get(API_URL2, {
      params: {
        api_key: api_key,
        query: "Accion",
      },
      ...options,
    });
    return response.data.results;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

export const getPelisComedia = async () => { 
  try {
    const response = await axios.get(API_URL2, {
      params: {
        api_key: api_key,
        query: "comedia",
      },
      ...options,
    });
    return response.data.results;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}
export const getPelisDrama = async () => { 
  try {
    const response = await axios.get(API_URL2, {
      params: {
        api_key: api_key,
        query: "Drama",
      },
      ...options,
    });
    return response.data.results;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}


export const getBuscarPeliculas = async (id) => {
  try {
    const response = await axios.get(API_URL2, {
      params: {
        api_key: api_key,
        query: id, // Utiliza el parámetro 'id' proporcionado
      },
      ...options,
    });
    return response.data.results;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

export const getPelisInfoId = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`, {
      params: {
        api_key: api_key,
      },
      ...options,
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

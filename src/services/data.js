const API_URL = "https://restcountries.com/v3.1";

export async function getAllCountries() {
  try {
    const response = await fetch(`${API_URL}/all/`);
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getCountryByName(name) {
  try {
    const response = await fetch(`${API_URL}/name/${name}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getCountryById(id) {
    try {
      const response = await fetch(`${API_URL}/aplha/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
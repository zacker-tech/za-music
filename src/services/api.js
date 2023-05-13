import axios from "axios";

const API_CHART_URL = "/chart";
const API_ALL_GENRES_URL = "/genre";
const API_SEARCH_URL = "/search";
const API_TOP_TRACKS_RADIO_URL = "/radio/37151/tracks";

export const loadTopRadioTracks = async () => {
  try {
    const data = await axios(`${API_TOP_TRACKS_RADIO_URL}?limit=100`);

    if (!data.data) throw Error();

    return data.data.data;
  } catch (err) {
    throw Error("Failed to load radio!");
  }
};

export const loadCharts = async () => {
  try {
    const data = await axios(API_CHART_URL);

    if (!data.data) throw Error();

    return data.data;
  } catch (err) {
    throw Error("Failed to load chart!");
  }
};

export const loadGenres = async () => {
  try {
    const data = await axios.get(API_ALL_GENRES_URL);

    if (!data.data.data) throw Error();

    return data.data.data.filter((genre) => genre.name.toLowerCase() !== "all");
  } catch (err) {
    throw Error("Failed to load genres!");
  }
};

export const search = async (searchQuery) => {
  try {
    const data = await axios.get(`${API_SEARCH_URL}?q=${searchQuery}`);

    if (!data.data.data) throw Error();

    return data.data.data;
  } catch (err) {
    throw Error("Failed to load tracks!");
  }
};

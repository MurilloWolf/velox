const BASE_URL_PROD = "https://dash-bot-api.fly.dev/api";
const BASE_URL_DEV = "http://localhost:4000/api";

const BASE_URL =
  process.env.NODE_ENV === "development" ? BASE_URL_DEV : BASE_URL_PROD;

const ENDPOINTS = {
  RACES: `${BASE_URL}/races`,
  PRODUCTS: `${BASE_URL}/store-products`,
};

export default ENDPOINTS;

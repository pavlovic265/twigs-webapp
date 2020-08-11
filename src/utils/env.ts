interface ProcessEnv {
  [key: string]: string;
}

interface CustomProcessEnv extends ProcessEnv {
  API_URL: string;
  NODE_PATH: string;
}

const env: CustomProcessEnv = {
  API_URL: process.env.REACT_APP_API_URL || "",
  NODE_PATH: process.env.NODE_PATH || "",
};

export default env;

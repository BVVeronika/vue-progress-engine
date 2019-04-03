console.log('ENV', process.env.NODE_ENV);

var apiOrigin = 'https://origin_api'; // npm run build:prod

if (process.env.NODE_ENV === 'development') {
  apiOrigin = 'https://dev_api'; // npm run build:dev || npm start
} else if (process.env.NODE_ENV === 'production') {
  apiOrigin = 'https://prod_api'; // npm run build:prod || npm run serve
} else if (process.env.NODE_ENV === 'local') {
  apiOrigin = 'http://127.0.0.1:8001'; // npm run local
}

export const API_ORIGIN = apiOrigin;
export const API = `${API_ORIGIN}/api/v1`;

export default {
  NODE_ENV: 'development',
  BASEURL: process.env.HOST,
  PORT: process.env.PORT,
  SECRETKEY: process.env.RAZZLE_SECRET_KEY,
  APIURL: process.env.RAZZLE_API_URL,
  APIPORT: process.env.RAZZLE_API_PORT,
  APIPREFIX: '',
  VENDOR: {
    amazon: {
      s3: {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg4IiwiaXNzIjoiM2E0YjA0MzcxMmY5NDc2N2EwODI5OTM5MDAwMjhhYTUifQ.UxXxZZjn2BN0CXjxLDsZ7BsZeLMQhKWCDTmQiZ2PQyo',
        userId: '88',
      },
    },
  },
};

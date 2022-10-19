module.exports = {
  reactStrictMode: true,
  env: {
    staticPath: "http://localhost:3001/",
    apiEndPoint: "http://localhost:3001/api",
    REDIS_URL: ""
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**.localhost',
        port: '3001',
      },
    ],
  },
}
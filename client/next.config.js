module.exports = {
  env: {
    staticPath: "http://localhost:3001/",
    apiEndPoint: "http://localhost:3001/api",
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
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i0.wp.com'],
  },
  env: {
    FIREBASE_API_KEY: "AIzaSyDAOBA4wNoOUet3mqiEu_XyHvoNXEl47KE",
    FIREBASE_AUTH_DOMAIN: "ecomarce-fullstrack.firebaseapp.com",
    FIREBASE_PROJECT_ID: "ecomarce-fullstrack",
    FIREBASE_STORAGE_BUCKET: "ecomarce-fullstrack.appspot.com",
    FIREBASE_MESSAGING_SENDER_ID: "36709471276",
    FIREBASE_APP_ID: "1:36709471276:web:066b62604d7fe642182d89"
  }
}

module.exports = nextConfig

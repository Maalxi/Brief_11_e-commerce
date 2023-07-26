/** @type {import('next').NextConfig} */
const nextConfig = {}

// next.config.js
module.exports = {
  images: {
    domains: ['127.0.0.1'], // Ajoutez le hostname (domaine) à la liste des domaines autorisés pour les images
  },
};

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
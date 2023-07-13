const {images} = require("next/dist/build/webpack/config/blocks/images");
/** @type {import('next').NextConfig} */

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.valorant-api.com',
            },
        ],
    },
}

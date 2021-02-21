const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const baseConfiguration = {
  images: {
    path: '/_next/image', // The default.
    loader: 'imgix', // We aren't actually using imgix.
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    return config;
  },
};

const plugins = [
  [
    optimizedImages,
    {
      optimizeImagesInDev: false,
      handleImages: ['ico', 'jpeg', 'png', 'svg', 'webp', 'gif'],
      removeOriginalExtension: true,
      pngquant: {
        // package: imagemin-pngquant
        speed: 4,
        strip: true,
        quality: [0.3, 0.5],
      },
      webp: {
        // package: webp-loader
      },
    },
  ],
];

module.exports = withPlugins(plugins, baseConfiguration);

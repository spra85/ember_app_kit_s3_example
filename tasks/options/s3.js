module.exports = {
    options: {
      key: '<%= env.AWS_ACCESS_KEY_ID %>',
      secret: '<%= env.AWS_SECRET_ACCESS_KEY %>',
      bucket: '<%= env.AWS_ASSETS_BUCKET %>',
      access: 'public-read',
      gzip: true,
      headers: {}
    },
    deploy: {
      upload: [
        {
          src: 'dist/assets/**/*',
          rel: 'dist/',
        },
      ]
    }
};

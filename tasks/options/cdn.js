module.exports = {
  options: {
    cdn: 'http://' + process.env.AWS_ASSETS_BUCKET + '.s3.amazonaws.com',
    flatten: false,
  },
  dist: {
    src: ['./dist/index.html']
  }
};

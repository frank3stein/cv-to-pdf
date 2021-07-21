module.exports = {
    plugins: {
      "postcss-import": {},
      "postcss-preset-env": {
        stage: 0,
        features: {
          "nesting-rules": true,
          "custom-properties": true
        },
        browsers: "last 2 versions"
      },
      cssnano: {}
    }
};
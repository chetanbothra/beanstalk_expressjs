module.exports = {
  apps: [
    {
      name: "image-compression",
      append_env_to_name: true, // <===== add this line
      script: "index.js", // path needs to be relative from ecosystem.config.js
      env: {
        NODE_ENV: 'development',
      },
      env_staging: {
        NODE_ENV: 'staging',
      },
      env_production: {
      NODE_ENV: 'production',
    },

}
]
};
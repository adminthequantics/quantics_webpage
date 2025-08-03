module.exports = {
  apps: [{
    name: 'thequanticsapp',
    script: 'npx',
    args: 'serve -s dist -l 5001',
    instances: 1,
    exec_mode: 'fork',
    autorestart: true,
    watch: false,
    env: {
      NODE_ENV: 'production'
    }
  }]
};

require('dotenv').config({ path: __dirname + '/.env' });

module.exports = {
  apps: [{
    name: 'thequanticsapp',
    script: '/var/www/thequantics/dist/index.html',
    instances: '2',
    exec_mode: 'cluster',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    log_date_format: 'YYYY-MM-DD HH:mm Z',
    error_file: '/var/log/thequanticsapp.error.log',
    out_file: '/var/log/thequanticsapp.out.log',
    merge_logs: true,
    
    // Environment variables (development)
    env: {
      NODE_ENV: 'development',
      PORT: 5001,
      STATIC_DIR: '/var/www/thequantics/dist'
    },
    
    // Production environment variables
    env_production: {
      NODE_ENV: 'production',
      PORT: 5001,
      STATIC_DIR: '/var/www/thequantics/dist'
    }
  }]
};
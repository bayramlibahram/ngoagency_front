module.exports = {
  apps: [
    {
      name: "pomegranate_front",
      script: "node_modules/next/dist/bin/next",
      instances: "3",
      exec_mode: "cluster",
      max_memory_restart: "350M",
      env_production: {
        NODE_ENV: "production",
      },
      env_development: {
        NODE_ENV: "development",
      },
      interpreter: "/home/bahram/.bun/bin/bun",
      args: "start -p 4447",
    },
  ],
};

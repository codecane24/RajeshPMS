const { defineConfig } = require('vite');

module.exports = defineConfig(async () => {
  const react = (await import('@vitejs/plugin-react')).default;
  return {
    plugins: [react()],
  };
});

import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',       // simulate the browser
    globals: true,              // so you can use `describe`, `it`, etc. without importing
    include: ['src/**/*.test.{js,jsx}'], // pick up your component test files
    // No setupFiles needed if you import jest-dom in each test
  },
})

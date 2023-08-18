import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Radar from 'vite-plugin-radar'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Radar({
      // Google Analytics tag injection
      gaMeasurementId: 'G-XH90TFFRFZ'
    })
  ],
  base:"/VocabBoost/"
})

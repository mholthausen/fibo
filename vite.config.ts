import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import compression from 'compression';

export default defineConfig({
  plugins: [
    react({
      include: '**/*.{ts,js,tsx}'
    }),
    viteCompression({
      verbose: true,
      disable: false,
      deleteOriginFile: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz'
    }),
    {
      name: 'configure-server',
      configureServer(server) {
        const expressCompression = compression() as unknown as (
          req: unknown,
          res: unknown,
          next: () => void
        ) => void;
        server.middlewares.use(expressCompression);
      }
    }
  ],
  base: '/',
  build: {
    outDir: 'dist',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        dead_code: true,
        unused: true,
        passes: 3
      },
      output: {
        comments: false
      }
    }
  },
  server: {
    open: true
  }
});

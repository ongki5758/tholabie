import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(), 
      tailwindcss(),
      {
        name: 'serve-img',
        configureServer(server) {
          server.middlewares.use('/img', (req, res, next) => {
            const url = req.url?.split('?')[0] || '';
            const filePath = path.join(__dirname, 'img', url);
            if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
              res.setHeader('Content-Type', getMimeType(filePath));
              res.end(fs.readFileSync(filePath));
            } else {
              next();
            }
          });
        },
        closeBundle() {
          const distImgPath = path.resolve(__dirname, 'dist/img');
          const srcImgPath = path.resolve(__dirname, 'img');
          if (fs.existsSync(srcImgPath)) {
            if (!fs.existsSync(distImgPath)) {
              fs.mkdirSync(distImgPath, { recursive: true });
            }
            fs.cpSync(srcImgPath, distImgPath, { recursive: true });
          }
        }
      }
    ],
    // If you are deploying to GitHub Pages (e.g., https://username.github.io/repo-name/),
    // set the base property to your repository name:
    // base: '/repo-name/',
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});

function getMimeType(filePath: string) {
  const ext = path.extname(filePath).toLowerCase();
  const mimes: Record<string, string> = {
    '.webp': 'image/webp',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.svg': 'image/svg+xml',
    '.gif': 'image/gif',
  };
  return mimes[ext] || 'application/octet-stream';
}

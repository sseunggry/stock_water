import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    // base: process.env.PUBLIC_URL || '/', // 기본 경로 설정
    resolve: {
        alias: {
            'fonts': path.resolve(__dirname, 'src/assets/fonts'),
            'images': path.resolve(__dirname, 'src/assets/images'),
            'styles': path.resolve(__dirname, 'src/assets/styles'),
            'components': path.resolve(__dirname, 'src/components'),
            'hooks': path.resolve(__dirname, 'src/hooks'),
            'pages': path.resolve(__dirname, 'src/pages'),
            'routes': path.resolve(__dirname, 'src/routes'),
            'service': path.resolve(__dirname, 'src/service'),
            'reducer': path.resolve(__dirname, 'src/reducer'),
            'utils': path.resolve(__dirname, 'src/utils')
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use 'styles/util/index' as *;`
            }
        }
    },
    server: {
        open: true,
        port: 9999
    }
})

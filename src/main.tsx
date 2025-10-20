import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/manrope/index.css';
import '@fontsource/inter/index.css';
import './main.css';
import App from './App.tsx';
import ThemeLoader from './theme.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeLoader>
            <App />
        </ThemeLoader>
    </StrictMode>,
);

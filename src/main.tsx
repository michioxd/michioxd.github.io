import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Theme } from '@radix-ui/themes';
import '@fontsource/manrope/index.css';
import '@fontsource/inter/index.css';
import './main.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Theme appearance="dark" accentColor="plum">
            <App />
        </Theme>
    </StrictMode>,
);

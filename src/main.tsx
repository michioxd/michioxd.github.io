import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import "@radix-ui/themes/styles.css";
import "@fontsource/manrope/index.css";
import '@fontsource/inter/index.css';
import { Theme } from '@radix-ui/themes';
import { ParallaxProvider } from 'react-scroll-parallax';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ParallaxProvider>
            <Theme accentColor="bronze" appearance='dark'>
                <App />
            </Theme>
        </ParallaxProvider>
    </StrictMode>,
)

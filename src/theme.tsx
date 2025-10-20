import { createContext, useContext, useState } from 'react';
import { radixColors } from './types/colors';
import { Theme } from '@radix-ui/themes';

const ThemeCtx = createContext<{
    color: radixColors;
    setColor?: (color: radixColors) => void;
}>({
    color: 'plum',
    setColor: () => {},
});

export default function ThemeLoader({ children }: { children: React.ReactNode }) {
    const [clr, setClr] = useState<radixColors>('plum');

    return (
        <ThemeCtx.Provider value={{ color: clr, setColor: setClr }}>
            <Theme appearance="dark" accentColor={clr}>
                {children}
            </Theme>
        </ThemeCtx.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
    return useContext(ThemeCtx);
};

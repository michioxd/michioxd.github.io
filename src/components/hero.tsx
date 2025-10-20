import { cn } from '../utils/class';
import { useEffect, useState } from 'react';
import cls from './hero.module.scss';
import bg0 from '../assets/bg/0.png';
import bg1 from '../assets/bg/1.png';
import bg2 from '../assets/bg/2.png';
import bg3 from '../assets/bg/3.png';
import bg4 from '../assets/bg/4.png';
import bg5 from '../assets/bg/5.png';
import bg6 from '../assets/bg/6.png';
import bg7 from '../assets/bg/7.png';
import bg8 from '../assets/bg/8.png';
import { radixColors } from '../types/colors';
import { useTheme } from '../theme';
import { IconButton, Tooltip } from '@radix-ui/themes';
import { PiCaretLeft, PiCaretRight } from 'react-icons/pi';

const bgs: {
    src: string;
    accent: radixColors;
}[] = [
    {
        src: bg0,
        accent: 'plum',
    },
    {
        src: bg1,
        accent: 'crimson',
    },
    {
        src: bg2,
        accent: 'blue',
    },
    {
        src: bg3,
        accent: 'pink',
    },
    {
        src: bg4,
        accent: 'plum',
    },
    {
        src: bg5,
        accent: 'indigo',
    },
    {
        src: bg6,
        accent: 'ruby',
    },
    {
        src: bg7,
        accent: 'teal',
    },
    {
        src: bg8,
        accent: 'lime',
    },
];

export default function Hero() {
    const { setColor } = useTheme();
    const [indexBg, setIndexBg] = useState<number>(() => {
        const turn = localStorage.getItem('bg-turn');
        return turn ? parseInt(turn, 10) : 0;
    });

    useEffect(() => {
        const turn = parseInt(localStorage.getItem('bg-turn') || '0');
        const nextIndex = (turn + 1) % bgs.length;
        localStorage.setItem('bg-turn', nextIndex.toString());
        setIndexBg(nextIndex);
    }, []);

    useEffect(() => {
        if (setColor) {
            if (bgs[indexBg].accent) {
                setColor(bgs[indexBg].accent);
            }
        }
    }, [indexBg, setColor]);

    const changeBg = (next: boolean) => {
        const newIndex = next ? (indexBg + 1) % bgs.length : (indexBg - 1 + bgs.length) % bgs.length;
        localStorage.setItem('bg-turn', newIndex.toString());
        setIndexBg(newIndex);
    };

    return (
        <div className={cls.mainHero}>
            <div
                className={cn(cls.hero, 'w-full flex flex-col group')}
                style={
                    {
                        '--bg': `url(${bgs[indexBg].src})`,
                    } as React.CSSProperties
                }
            >
                <div
                    className={cn(
                        'w-full flex flex-row justify-between absolute bottom-0 p-2 z-10 duration-300 group-hover:opacity-100 opacity-0',
                    )}
                >
                    <Tooltip content="Previous Background" side="top">
                        <IconButton onClick={() => changeBg(false)} variant="soft">
                            <PiCaretLeft size={20} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip content="Next Background" side="top">
                        <IconButton onClick={() => changeBg(true)} variant="soft">
                            <PiCaretRight size={20} />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
            <div className={cn(cls.heroReflect)}>
                <div className={cn(cls.content)}>
                    <h2 className={cn(cls.main, 'PrettyTitle text-2xl absolute m-2 ml-4 z-10')}>
                        <span className={cn(cls.t1, 'text-lg')}>hi there! i'm</span>
                        &nbsp;michioxd&nbsp;
                        <span className={cn(cls.t2, 'text-sm')}>{'ฅ^>⩊<^ฅ ✩₊˚.⋆☾⋆⁺₊✧'}</span>
                    </h2>
                    <h2 className={cn(cls.main, 'PrettyTitle text-2xl absolute m-2 ml-4 z-10', cls.textButReflect)}>
                        <span className={cn(cls.t1, 'text-lg')}>hi there! this is</span>
                        &nbsp;michioxd&nbsp;
                        <span className={cn(cls.t2, 'text-sm')}>{'ฅ^>⩊<^ฅ ✩₊˚.⋆☾⋆⁺₊✧'}</span>
                    </h2>
                </div>
                <div
                    className={cn(cls.reflect)}
                    style={
                        {
                            '--bg': `url(${bgs[indexBg].src})`,
                        } as React.CSSProperties
                    }
                ></div>
            </div>
        </div>
    );
}

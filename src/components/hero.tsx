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

const listOfBg = [bg0, bg1, bg2, bg3, bg4, bg5, bg6];

export default function Hero() {
    const [bg, setBg] = useState<string>(() => {
        const index = Math.floor(Math.random() * listOfBg.length);
        return listOfBg[index];
    });

    useEffect(() => {
        const index = Math.floor(Math.random() * listOfBg.length);
        setBg(listOfBg[index]);
    }, []);
    return (
        <div className={cls.mainHero}>
            <div
                className={cn(cls.hero, 'w-full flex flex-col')}
                style={
                    {
                        '--bg': `url(${bg})`,
                    } as React.CSSProperties
                }
            ></div>
            <div className={cn(cls.heroReflect)}>
                <div className={cn(cls.content)}>
                    <h2 className={cn('PrettyTitle text-2xl absolute m-2 ml-4 z-10')}>
                        <span className="text-lg">hi there! this is</span>
                        &nbsp;michioxd&nbsp;
                        <span className="text-sm">{'ฅ^>⩊<^ฅ ✩₊˚.⋆☾⋆⁺₊✧'}</span>
                    </h2>
                    <h2 className={cn('PrettyTitle text-2xl absolute m-2 ml-4 z-10', cls.textButReflect)}>
                        <span className="text-lg">hi there! this is</span>
                        &nbsp;michioxd&nbsp;
                        <span className="text-sm">{'ฅ^>⩊<^ฅ ✩₊˚.⋆☾⋆⁺₊✧'}</span>
                    </h2>
                </div>
                <div
                    className={cn(cls.reflect)}
                    style={
                        {
                            '--bg': `url(${bg})`,
                        } as React.CSSProperties
                    }
                ></div>
            </div>
        </div>
    );
}

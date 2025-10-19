import { Link, Text } from '@radix-ui/themes';
import cls from './Footer.module.scss';
import logo from './../assets/images/full-ver.svg';

export default function Footer() {
    return (
        <div className={cls.Footer}>
            <div className={cls.Inner}>
                <img srcSet={logo} alt="logo" className={cls.Logo} />
                <div className={cls.Content}>
                    <Text size="1" color="gray">
                        Landing v5. Website created with{' '}
                        <Link
                            color="gray"
                            href="https://vite.dev/guide/#scaffolding-your-first-vite-project"
                            target="_blank"
                        >
                            React + Vite
                        </Link>
                        .
                    </Text>
                    <Text size="1" color="gray">
                        &copy; 2025 michioxd.{' '}
                        <Link color="gray" href="https://github.com/michioxd/michioxd.github.io" target="_blank">
                            Available under the CC BY-NC-SA 4.0 license
                        </Link>
                        .
                    </Text>
                </div>
            </div>
        </div>
    );
}

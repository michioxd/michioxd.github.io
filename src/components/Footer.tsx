import { Link, Select, Text } from '@radix-ui/themes';
import cls from './Footer.module.scss';
import logo from './../assets/images/full-ver.svg';
import { cn } from '../utils/class';

const knownVersion = [
    {
        title: 'Archived version',
        items: [
            {
                title: 'v4',
                href: 'https://lv4.michioxd.ch',
            },
            {
                title: 'v3',
                href: 'https://lv3.michioxd.ch',
            },
            {
                title: 'v2',
                href: 'https://lv2.michioxd.ch',
            },
            {
                title: 'v1',
                href: 'https://lv1.michioxd.ch',
            },
            {
                title: 'v0',
                href: 'https://lv0.michioxd.ch',
            },
        ],
    },
    {
        title: 'Last viewable archived',
        items: [
            {
                title: '20220629123349',
                href: 'https://web.archive.org/web/20220629123349/https://michiois.live/',
            },
        ],
    },
    {
        title: 'Broken archived',
        items: [
            {
                title: '20211218020944',
                href: 'https://web.archive.org/web/20211213104113/https://michiois.live/',
            },
            {
                title: '20210729055242',
                href: 'https://web.archive.org/web/20210729055242/https://michiois.live/',
            },
        ],
    },
];

export default function Footer() {
    return (
        <div className={cls.Footer}>
            <div className={cls.Inner}>
                <img srcSet={logo} alt="logo" className={cls.Logo} />
                <div className={cn(cls.Content, 'w-full')}>
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
                <div>
                    <Select.Root
                        defaultValue="current"
                        onValueChange={(v) => {
                            if (v !== 'current') {
                                window.location.href = v;
                            }
                        }}
                    >
                        <Select.Trigger variant="soft" color="gray" />
                        <Select.Content>
                            <Select.Group>
                                <Select.Label>Current version</Select.Label>
                                <Select.Item value="current">v5</Select.Item>
                                {knownVersion.map((group) => (
                                    <Select.Group key={group.title}>
                                        <Select.Separator />
                                        <Select.Label>{group.title}</Select.Label>
                                        {group.items.map((item) => (
                                            <Select.Item key={item.title} value={item.href}>
                                                {item.title}
                                            </Select.Item>
                                        ))}
                                    </Select.Group>
                                ))}
                            </Select.Group>
                        </Select.Content>
                    </Select.Root>
                </div>
            </div>
        </div>
    );
}

import {
    PiBookDuotone,
    PiDiscordLogoDuotone,
    PiEnvelopeDuotone,
    PiGithubLogoDuotone,
    PiNewspaperDuotone,
    PiPowerDuotone,
    PiTelegramLogoDuotone,
    PiTwitterLogoDuotone,
} from 'react-icons/pi';
import { radixColors } from '../types/colors';

const ListContact: {
    name: string;
    sub: string;
    icon: React.ReactNode;
    url: string;
    color?: radixColors;
}[] = [
    {
        name: 'Discord',
        sub: 'michioxd',
        icon: <PiDiscordLogoDuotone size={25} />,
        url: 'https://discord.com/users/536175851247501347',
        color: 'indigo',
    },
    {
        name: 'GitHub',
        sub: 'michioxd',
        icon: <PiGithubLogoDuotone size={25} />,
        url: 'https://github.com/michioxd',
        color: 'gray',
    },
    {
        name: 'Twitter',
        sub: '@michioxd',
        icon: <PiTwitterLogoDuotone size={25} />,
        url: 'https://twitter.com/michioxd',
        color: 'cyan',
    },
    {
        name: 'Email',
        sub: 'neko@michioxd.ch',
        icon: <PiEnvelopeDuotone size={25} />,
        url: 'mailto:neko@michioxd.ch',
        color: 'red',
    },
    {
        name: 'Telegram',
        sub: '@michioxd',
        icon: <PiTelegramLogoDuotone size={25} />,
        url: 'https://t.me/michioxd',
        color: 'blue',
    },
];

const ListOther: {
    name: string;
    sub: string;
    icon: React.ReactNode;
    url: string;
    color?: radixColors;
}[] = [
    {
        name: 'guest book',
        sub: 'leave a message for me',
        icon: <PiBookDuotone size={25} />,
        url: 'https://michioxd.atabook.org/',
    },
    {
        name: 'blog',
        sub: 'visit my blog (not updated often)',
        icon: <PiNewspaperDuotone size={25} />,
        url: 'https://blog.michioxd.ch',
    },
    {
        name: 'services status',
        sub: 'check if my services are up or down',
        icon: <PiPowerDuotone size={25} />,
        url: 'https://status.michioxd.ch',
    },
];

export { ListContact, ListOther };

import {
    PiDiscordLogoDuotone,
    PiEnvelopeDuotone,
    PiGithubLogoDuotone,
    PiNewspaperDuotone,
    PiPowerDuotone,
    PiTelegramLogoDuotone,
    PiTwitterLogoDuotone,
} from 'react-icons/pi';

const ListContact = [
    {
        name: 'Discord',
        user: 'michioxd',
        icon: <PiDiscordLogoDuotone size={25} />,
        url: 'https://discord.com/users/536175851247501347',
    },
    {
        name: 'GitHub',
        user: 'michioxd',
        icon: <PiGithubLogoDuotone size={25} />,
        url: 'https://github.com/michioxd',
    },
    {
        name: 'Twitter',
        user: '@michioxd',
        icon: <PiTwitterLogoDuotone size={25} />,
        url: 'https://twitter.com/michioxd',
    },
    {
        name: 'Email',
        user: 'neko@michioxd.ch',
        icon: <PiEnvelopeDuotone size={25} />,
        url: 'mailto:neko@michioxd.ch',
    },
    {
        name: 'Telegram',
        user: '@michioxd',
        icon: <PiTelegramLogoDuotone size={25} />,
        url: 'https://t.me/michioxd',
    },
];

const ListOther = [
    {
        name: 'blog',
        user: 'visit my blog (not updated often)',
        icon: <PiNewspaperDuotone size={25} />,
        url: 'https://blog.michioxd.ch',
    },
    {
        name: 'services status',
        user: 'check if my services are up or down',
        icon: <PiPowerDuotone size={25} />,
        url: 'https://status.michioxd.ch',
    },
];

export { ListContact, ListOther };

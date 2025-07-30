import { ParallaxBanner } from "react-scroll-parallax";
import cls from "./Home.module.scss";
import Hoshino from "./../assets/images/hoshino.webp";
import { Element } from 'react-scroll'
import { AspectRatio, Badge, Button, Card, Grid, Heading, IconButton, Link, Text, Tooltip } from "@radix-ui/themes";
import { PiCodeDuotone, PiDiscordLogoDuotone, PiEnvelopeDuotone, PiGithubLogoDuotone, PiHeartDuotone, PiInfoDuotone, PiMagicWandDuotone, PiPhoneCallDuotone, PiTelegramLogoDuotone, PiTwitterLogoDuotone } from "react-icons/pi";
import type { BaseButtonProps } from "@radix-ui/themes/src/components/base-button.js";

import tsIcon from "./../assets/icons/ts.svg";
import jsIcon from "./../assets/icons/js.svg";
import nodeJSIcon from "./../assets/icons/node-js.svg";
import phpIcon from "./../assets/icons/php.svg";
import reactIcon from "./../assets/icons/react.svg";
import csIcon from "./../assets/icons/cs.svg";
import goIcon from "./../assets/icons/go.svg";
import cppIcon from "./../assets/icons/cpp.svg";
import psIcon from "./../assets/icons/ps.svg";

import BMP_0 from './../assets/projects/bmp_0.webp';
import SOUNDDARK from './../assets/projects/sounddark.webp';
import GSVN from "./../assets/projects/gamestorevn.com_.webp";
import TinyDRPC from "./../assets/projects/tinydrpc.webp";
import tcvn2uni from "./../assets/projects/tcvn2uni.webp";
import nyanspace from "./../assets/projects/nyanspace.webp";
import banner from "./../assets/images/banner.webp";
import luckit from "./../assets/projects/luckit.webp";

const ListSocial = [
    {
        name: "Discord",
        icon: <PiDiscordLogoDuotone size={25} />,
        url: "https://discord.com/users/536175851247501347"
    },
    {
        name: "GitHub",
        icon: <PiGithubLogoDuotone size={25} />,
        url: "https://github.com/michioxd"
    },
    {
        name: "Twitter",
        icon: <PiTwitterLogoDuotone size={25} />,
        url: "https://twitter.com/michioxd"
    },
    {
        name: "Email",
        icon: <PiEnvelopeDuotone size={25} />,
        url: "mailto:neko@michioxd.ch"
    },
    {
        name: "Telegram",
        icon: <PiTelegramLogoDuotone size={25} />,
        url: "https://t.me/michioxd"
    }
];

const List = [
    {
        image: luckit,
        name: "luckit",
        type: "Extension",
        description: "An extension for Chromium-based browser, unofficial Locket client for you to update your friends moment directly on your favorite browser",
        tech: [
            "TypeScript",
            "React"
        ],
        buttons: [
            {
                name: "GitHub",
                url: "https://github.com/michioxd/luckit"
            },
            {
                name: "Chrome",
                url: 'https://chromewebstore.google.com/detail/luckit/gkpedjnafgjmkjlcfcgcjonblhjiifmo'
            }
        ]
    },
    {
        image: TinyDRPC,
        name: "TinyDRPC",
        type: "Tools",
        description: "Tiny Discord Rich Presence Client, customize your \"Playing\" status, written in C# using discord-rpc-csharp",
        tech: [
            "C#"
        ],
        buttons: [
            {
                name: "GitHub",
                url: "https://github.com/michioxd/tinydrpc"
            },
            {
                name: "Download",
                url: "https://github.com/michioxd/TinyDRPC/releases/latest"
            }
        ]
    },
    {
        image: tcvn2uni,
        name: "tcvn2uni",
        type: "Tools",
        description: "Convert your document (Word, Excel, PowerPoint) in TCVN3 to Unicode directly on your browser",
        tech: [
            "TypeScript"
        ],
        buttons: [
            {
                name: "Website",
                url: "https://michioxd.github.io/tcvn2uni/"
            },
            {
                name: "GitHub",
                url: "https://github.com/michioxd/tcvn2uni"
            }
        ]
    },
    {
        image: nyanspace,
        name: "nyanspace",
        type: "Android",
        description: "An Android app to manage your Linux server via SSH. There is no need to install anything (e.g., endpoint api, etc.) on your server.",
        tech: [
            "TypeScript",
            "React Native"
        ],
        buttons: [
            {
                name: "GitHub",
                url: "https://github.com/michioxd/nyanspace"
            },
            {
                name: "Download",
                url: "https://github.com/michioxd/nyanspace/releases/latest"
            }
        ]
    },
    {
        image: SOUNDDARK,
        name: "SoundDark",
        type: "Extension",
        description: "A better Dark theme for SoundCloud",
        tech: [
            "JavaScript",
            "Chromium",
            "Firefox"
        ],
        buttons: [
            {
                name: "GitHub",
                url: "https://github.com/michioxd/sounddark"
            },
            {
                name: "Chrome",
                url: 'https://chromewebstore.google.com/detail/sounddark/ablcfojnfkneoplpflnpbeglgkjmiman'
            },
            {
                name: "Egde",
                url: "https://microsoftedge.microsoft.com/addons/detail/sounddark/mdjnpmfeinnmbhanpikmfcbigpnjcplj"
            },
            {
                name: "Firefox",
                url: "https://addons.mozilla.org/en-US/firefox/addon/sounddark/"
            }
        ]
    },
    {
        image: BMP_0,
        name: "RobuxZone",
        type: "Web",
        tech: [
            "React",
            "TypeScript"
        ],
        buttons: [
            {
                name: "Website",
                url: "https://robuxzone.com"
            }
        ]
    },
    {
        image: GSVN,
        name: "GameStoreVN",
        type: "Web",
        tech: [
            "React",
            "TypeScript"
        ],
        buttons: [
            {
                name: "Website",
                url: "https://gamestorevn.com"
            }
        ]
    },
]

const skills: {
    name: string,
    icon: string,
    description: string,
    color: BaseButtonProps["color"],
    textColor: string
}[] = [
        {
            name: "TypeScript",
            icon: tsIcon,
            description: "javascript suck :)",
            color: "blue",
            textColor: "#007acc"
        },
        {
            name: "JavaScript",
            icon: jsIcon,
            description: "well i gotchu typescript",
            color: "yellow",
            textColor: "#f7df1e"
        },
        {
            name: "Node.js",
            icon: nodeJSIcon,
            description: "i'm a backend dev :3",
            color: "green",
            textColor: "#3c873a"
        },
        {
            name: "PHP",
            icon: phpIcon,
            description: "shh... i switched to node.js",
            color: "purple",
            textColor: "#777bb4"
        },
        {
            name: "C#",
            icon: csIcon,
            description: "can i make desktop app with this?",
            color: "purple",
            textColor: "#a179dc"
        },
        {
            name: "C++",
            icon: cppIcon,
            description: "\"stupid student\" award?",
            color: "blue",
            textColor: "#649ad2"
        },
        {
            name: "Go",
            icon: goIcon,
            description: "a little bit",
            color: "cyan",
            textColor: "#00add8"
        },
        {
            name: "React (Native)",
            icon: reactIcon,
            description: "i'm a frontend dev too",
            color: "indigo",
            textColor: "#61dafb"
        },
        {
            name: "Photoshop",
            icon: psIcon,
            description: "i love to design my waifu :3",
            color: "sky",
            textColor: "#31a8ff"
        }
    ]

export default function PageHome() {
    return (
        <div className={cls.HomePage}>
            <Element name="home" className={cls.Main}>
                <ParallaxBanner
                    layers={[{ image: Hoshino, speed: -40, className: cls.BannerInner }]}
                    className={cls.Banner}
                />
                <div className={cls.Info}>
                    <Heading className={cls.Hello} size="6">
                        hi there, i'm michioxd
                    </Heading>
                    <Text size="2" color="gray">
                        i'm do everying thing i love and love u too <PiHeartDuotone />
                    </Text>
                </div>
            </Element>
            <Element name="my-skills" className={cls.Section}>
                <div className={cls.Heading}>
                    <IconButton className={cls.Icons} size="4" variant="surface">
                        <PiMagicWandDuotone size={25} />
                    </IconButton>
                    <div className={cls.Inf}>
                        <Heading style={{ "--text-color": "#e2d1d4" } as React.CSSProperties} className={"PrettyTitle"} size="4">
                            my skills
                        </Heading>
                        <Text size="1" color="gray">
                            ughh... i'm not gud.. sorry...
                        </Text>
                    </div>
                </div>
                <Grid columns={{
                    initial: "1",
                    md: "3",
                    sm: "2",
                    xs: "1"
                }} gap={{
                    initial: "1",
                    md: "3",
                    sm: "2",
                    xs: "1"
                }} width="auto">
                    {skills.map((skill, index) => (
                        <Card variant="surface" key={index} className={cls.TechCard}>
                            <IconButton size="4" color={skill.color} variant="soft">
                                <img src={skill.icon} alt={skill.name} className={cls.TechLogo} />
                            </IconButton>
                            <div>
                                <Heading style={{ "--text-color": skill.textColor } as React.CSSProperties} className={"PrettyTitle"} size="4">
                                    {skill.name}
                                </Heading>
                                <Text style={{ marginTop: '0.2rem' }} as="div" color="gray" size="1">
                                    {skill.description}
                                </Text>
                            </div>
                        </Card>
                    ))}
                </Grid>
            </Element>
            <Element name="my-projects" className={cls.Section}>
                <div className={cls.Heading}>
                    <IconButton className={cls.Icons} size="4" variant="surface">
                        <PiCodeDuotone size={25} />
                    </IconButton>
                    <div className={cls.Inf}>
                        <Heading style={{ "--text-color": "#e2d1d4" } as React.CSSProperties} className={"PrettyTitle"} size="4">
                            my projects
                        </Heading>
                        <Text size="1" color="gray">
                            heh...? too bad...
                        </Text>
                    </div>
                </div>
                <Grid columns={{
                    initial: "1",
                    md: "3",
                    sm: "2",
                    xs: "1"
                }} gap={{
                    initial: "1",
                    md: "3",
                    sm: "2",
                    xs: "1"
                }} width="auto" gapX="3" gapY="3">
                    {List.map((project, index) => (
                        <Card variant="surface" key={index} className={cls.Projects}>
                            <AspectRatio ratio={16 / 9}>
                                <img src={project.image} alt={project.name} className={cls.ProjectImage} />
                                <div className={cls.ProjectTech}>
                                    {project.tech.map((tech, index) => (
                                        <Badge variant="outline" key={index} size="1" className={cls.ProjectTechItem}>
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </AspectRatio>

                            <div className={cls.ProjectInfo}>
                                <Heading size="3" className={"PrettyTitle"}>
                                    {project.name} <Badge size="1">{project.type}</Badge>
                                </Heading>
                                <Text size="1" color="gray" className={cls.ProjectDescription}>
                                    {project.description}
                                </Text>
                            </div>
                            <div className={cls.space}></div>
                            <div className={cls.Action}>
                                {project.buttons.map((button, index) => (
                                    <a href={button.url} target="_blank" rel="noreferrer">
                                        <Button size="1" key={index} variant="surface" className={cls.ProjectButton}>
                                            {button.name}
                                        </Button>
                                    </a>
                                ))}
                            </div>
                        </Card>
                    ))}
                </Grid>
            </Element>
            <Element name="about-me" className={cls.Section}>
                <div className={cls.Heading}>
                    <IconButton className={cls.Icons} size="4" variant="surface">
                        <PiInfoDuotone size={25} />
                    </IconButton>
                    <div className={cls.Inf}>
                        <Heading style={{ "--text-color": "#e2d1d4" } as React.CSSProperties} className={"PrettyTitle"} size="4">
                            about me
                        </Heading>
                        <Text size="1" color="gray">
                            本当に、江藤、恥ずかしい。
                        </Text>
                    </div>
                </div>
                <div className={cls.BodyAbout}>
                    <img src={banner} alt="banner" className={cls.BannerAbout} />

                    <div className={cls.Content}>
                        <Text size="2" color="gray">
                            hi, i'm michioxd <Text size="1" color="gray">(you can call me as michio, mashiro, neko all fine~)</Text>, from Vietnam. i'm a fullstack developer, i love kawaii thing, specially nekooo and oji-san (hoshino you known lmao). i'm not good at anything, but i'm trying to be better. i love to make something new, something cool, something that can help people. i'm trying become princess before gta 6 heh...
                        </Text>
                    </div>
                </div>
            </Element>
            <Element name="contact-me" className={cls.Section}>
                <div className={cls.Heading}>
                    <IconButton className={cls.Icons} size="4" variant="surface">
                        <PiPhoneCallDuotone size={25} />
                    </IconButton>
                    <div className={cls.Inf}>
                        <Heading style={{ "--text-color": "#e2d1d4" } as React.CSSProperties} className={"PrettyTitle"} size="4">
                            contact
                        </Heading>
                        <Text size="1" color="gray">
                            pls don't call me at 3am...
                        </Text>
                    </div>
                </div>
                <div className={cls.BodyContact}>
                    <Text align="center" size="3" color="gray">
                        For work, please contact me via email: <Link color="gray" href="mailto:neko@michioxd.ch">neko@michioxd.ch</Link>
                    </Text>

                    <div className={cls.List}>
                        {ListSocial.map((social, index) => (
                            <Tooltip content={social.name} key={index}>
                                <a href={social.url} target="_blank" title={social.name} rel="noreferrer">
                                    <IconButton size="4" variant="surface" className={cls.Social}>
                                        {social.icon}
                                    </IconButton>
                                </a>
                            </Tooltip>
                        ))}
                    </div>
                </div>
            </Element>
        </div>
    )
}

import BMP_0 from './../assets/projects/bmp_0.webp';
import SOUNDDARK from './../assets/projects/sounddark.webp';
import GSVN from "./../assets/projects/gamestorevn.com_.webp";
import TinyDRPC from "./../assets/projects/tinydrpc.webp";
import nyanspace from "./../assets/projects/nyanspace.webp";
import luckit from "./../assets/projects/luckit.webp";
import MFS from "./../assets/projects/mfs.webp";
import nyaadenwa from "./../assets/projects/nyaadenwa.png";
import bakafiles from "./../assets/projects/bakafiles.png";
import materialIconPicker from './../assets/projects/material-icon-picker.png';
import monsubcu from './../assets/projects/monsubcu.jpg';
import minevncloud from './../assets/projects/minevncloud.png';
import genbokeh from './../assets/projects/genbokeh.png';

const Projects = [
    {
        image: nyaadenwa,
        name: "nyaadenwa",
        type: "Tools",
        wip: true,
        description: "Manage your Android Phone directly from your browser",
        tech: [
            "TypeScript",
            "React"
        ],
        buttons: [
            {
                name: "GitHub",
                url: "https://github.com/michioxd/nyaadenwa"
            },
            {
                name: "Website",
                url: 'https://nyaadenwa.michioxd.ch'
            }
        ]
    },
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
        image: genbokeh,
        name: "GenBokeh",
        type: "Tools",
        description: "A modern web application that generates beautiful bokeh wallpapers using HTML5 Canvas and Web Workers. Built with TypeScript, Vite, and dat.GUI",
        tech: [
            "TypeScript"
        ],
        buttons: [
            {
                name: "GitHub",
                url: "https://github.com/michioxd/genbokeh"
            },
            {
                name: "Website",
                url: "https://genbokeh.michioxd.ch"
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
        image: nyanspace,
        name: "nyanspace",
        type: "Android",
        wip: true,
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
        image: materialIconPicker,
        name: "Material Icon Picker for MUI",
        type: "Extension",
        description: "A Visual Studio Code extension that helps you pick Material icons for your React MUI-based projects.",
        tech: [
            "TypeScript"
        ],
        buttons: [
            {
                name: "GitHub",
                url: "https://github.com/michioxd/vscode-mui-material-icon-picker"
            },
            {
                name: "Marketplace",
                url: "https://marketplace.visualstudio.com/items?itemName=michioxd.vscode-mui-material-icon-picker"
            }
        ]
    },
    {
        image: SOUNDDARK,
        name: "SoundDark",
        type: "Extension",
        description: "A better Dark theme for SoundCloud. Discontinued because SoundCloud has a built-in dark mode now.",
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
        image: MFS,
        name: "Mon Fansub",
        description: "Mon Fansub Team Official Website",
        type: "Web",
        tech: [
            "React",
            "TypeScript",
            "Node.js"
        ],
        buttons: [
            {
                name: "Website",
                url: "https://www.monfansubvn.com"
            },
            {
                name: "Fanpage",
                url: "https://www.facebook.com/profile.php?id=61573406124701"
            }
        ]
    },
    {
        image: monsubcu,
        name: "Mon Fansub - Doraemon 1979",
        description: "Mon Fansub sub website for Doraemon 1979 series",
        type: "Web",
        tech: [
            "React",
            "TypeScript",
            "tRPC"
        ],
        buttons: [
            {
                name: "Website",
                url: "https://www.monsubcu.com"
            },
            {
                name: "Fanpage",
                url: "https://www.facebook.com/profile.php?id=61573406124701"
            }
        ]
    },
    {
        image: minevncloud,
        name: "MineVN Cloud",
        description: "MineVN Cloud Client dashboard",
        type: "Web",
        tech: [
            "React",
            "TypeScript",
            "tRPC"
        ],
        buttons: [
            {
                name: "Website",
                url: "https://dash.minevn.cloud"
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
    {
        image: bakafiles,
        name: "bakafiles",
        type: "Web",
        description: "A simple and \"broken\" file manager written in PHP",
        tech: [
            "PHP"
        ],
        buttons: [
            {
                name: "GitHub",
                url: "https://github.com/michioxd/bakafiles"
            }
        ]
    }
];

export default Projects;
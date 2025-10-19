import tsIcon from "./../assets/icons/ts.svg";
import jsIcon from "./../assets/icons/js.svg";
import nodeJSIcon from "./../assets/icons/node-js.svg";
import phpIcon from "./../assets/icons/php.svg";
import reactIcon from "./../assets/icons/react.svg";
import csIcon from "./../assets/icons/cs.svg";
import goIcon from "./../assets/icons/go.svg";
import cppIcon from "./../assets/icons/cpp.svg";
import psIcon from "./../assets/icons/ps.svg";
import mongoIcon from "./../assets/icons/mongo.svg";
import tailwindIcon from "./../assets/icons/tailwind.svg";
import type { radixColors } from "../types/colors";

const skills: {
    name: string,
    icon: string,
    description: string,
    color: radixColors,
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
            description: "shh... i switched to node.js (bare btw)",
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
            description: "ultra fassstttt",
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
        },
        {
            name: "MongoDB",
            icon: mongoIcon,
            description: "loved nosql dbms",
            color: "grass",
            textColor: "#47a248"
        },
        {
            name: "TailwindCSS",
            icon: tailwindIcon,
            description: "css made easy why not?",
            color: "blue",
            textColor: "#06b6d4"
        }
    ];

export default skills;
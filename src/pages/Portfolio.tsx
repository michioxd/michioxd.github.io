import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Grid, Link, Typography } from "@mui/material";
import BC from "../components/BC";
import Title from "../components/Title";

import MFS_0 from './../assets/portfolio/mfs_0.png';
import BMP_0 from './../assets/portfolio/bmp_0.png';
import SOUNDDARK from './../assets/portfolio/sounddark.png';
import GSVN from "./../assets/portfolio/gamestorevn.com_.png";
import TinyDRPC from "./../assets/portfolio/tinydrpc.png";
import tcvn2uni from "./../assets/portfolio/tcvn2uni.png";
const List = [
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
                name: "MS Store",
                url: "https://microsoftedge.microsoft.com/addons/detail/sounddark/mdjnpmfeinnmbhanpikmfcbigpnjcplj"
            },
            {
                name: "Firefox Add-ons",
                url: "https://addons.mozilla.org/en-US/firefox/addon/sounddark/"
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
        image: MFS_0,
        name: "Mon Fansub",
        type: "Web",
        tech: [
            "React",
            "TypeScript",
            "PHP",
            "Fullstack"
        ],
        buttons: [
            {
                name: "Website",
                url: "https://www.monfansubvn.com"
            }
        ]
    },
    {
        image: BMP_0,
        name: "Black MP",
        type: "Web",
        tech: [
            "React",
            "TypeScript",
            "Frontend"
        ],
        buttons: [
            {
                name: "Website",
                url: "https://black-mp.com"
            }
        ]
    },
    {
        image: GSVN,
        name: "GameStoreVN",
        type: "Web",
        tech: [
            "React",
            "TypeScript",
            "Frontend"
        ],
        buttons: [
            {
                name: "Website",
                url: "https://gamestorevn.com"
            }
        ]
    },
]

export default function PagePortfolio() {
    return (
        <>
            <BC data={[
                {
                    title: "Portfolio",
                    currentPage: true
                }
            ]} />
            <Title primary="Portfolio" secondary="ポートフォリオ" />
            <Box sx={{ mt: 2 }}>
                <Grid container spacing={2}>

                    {List.map((d, i) => (
                        <Grid item sm={6} md={4} key={i}>
                            <Card>
                                <Chip size="small" color="primary" label={d.type} variant="filled" sx={{ zIndex: 9, position: 'absolute', m: 1 }} />
                                <CardMedia
                                    component="img"
                                    image={d.image}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {d.name}
                                    </Typography>
                                    <Typography sx={{ mb: 2 }} fontSize="12px">
                                        {d.description}
                                    </Typography>
                                    <Box>
                                        {d.tech.map((da, i) => (
                                            <Chip color="primary" sx={{ mr: 1 }} variant="outlined" size="small" key={i} label={da}></Chip>
                                        ))}
                                    </Box>
                                </CardContent>
                                <CardActions>
                                    {d.buttons && d.buttons.map((d, i) => (
                                        <Button key={i} component={Link} target="_blank" href={d.url}>
                                            <Typography fontSize="12px">{d.name}</Typography>
                                        </Button>
                                    ))}
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

            </Box>
        </>
    )
}
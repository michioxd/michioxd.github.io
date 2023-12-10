import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Grid, Link, Typography } from "@mui/material";
import BC from "../components/BC";
import Title from "../components/Title";

import MFS_0 from './../assets/portfolio/mfs_0.png';
import BMP_0 from './../assets/portfolio/bmp_0.png';
import SOUNDDARK from './../assets/portfolio/sounddark.png';
const List = [
    {
        image: MFS_0,
        name: "Mon Fansub",
        type: "Web",
        tech: [
            "React",
            "Node.js",
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
            "Node.js",
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
        image: SOUNDDARK,
        name: "SoundDark",
        type: "Extension",
        description: "A better Dark theme for SoundCloud",
        tech: [
            "React",
            "Node.js",
            "Frontend"
        ],
        buttons: [
            {
                name: "GitHub",
                url: "https://github.com/michioxd/sounddark"
            },
            {
                name: "Microsoft Store",
                url: "https://microsoftedge.microsoft.com/addons/detail/sounddark/mdjnpmfeinnmbhanpikmfcbigpnjcplj"
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
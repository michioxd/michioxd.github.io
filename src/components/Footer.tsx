import { Box, Container, Divider, IconButton, Link, Typography } from "@mui/material";
import cls from "./Footer.module.scss";
import { Img } from "react-image";
import { Link as LinkRouter } from "react-router-dom";
import LogoFull from "./../assets/full.svg";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { ReactNode } from "react";

const SocialList: {
    title: string,
    icon: ReactNode,
    url: string
}[] = [
        {
            icon: (<GitHubIcon />),
            url: 'https://github.com/michioxd',
            title: 'GitHub'
        },
        {
            icon: (<FacebookIcon />),
            url: 'https://facebook.com/michioxd',
            title: 'Facebook'
        },
        {
            icon: (<TwitterIcon />),
            url: 'https://twitter.com/michioxd',
            title: 'Twitter'
        },
        {
            icon: (<YouTubeIcon />),
            url: "https://www.youtube.com/@michioxd",
            title: "YouTube"
        }
    ];

const padZero = (num: number) => (num < 10 ? "0" + num : num);

export default function Footer() {
    const commitDate = new Date(parseInt(__COMMIT_DATE__) * 1000);

    const formattedBuild =
        __COMMIT_HASH__ +
        " (" +
        padZero(commitDate.getHours()) +
        ":" +
        padZero(commitDate.getMinutes()) +
        ":" +
        padZero(commitDate.getSeconds()) +
        " " +
        padZero(commitDate.getDate()) +
        "-" +
        padZero(commitDate.getMonth() + 1) +
        "-" +
        commitDate.getFullYear() + ")";

    return (
        <div className={cls.Footer}>
            <Container>
                <Box sx={{
                    display: 'flex', flexDirection: {
                        md: "row",
                        sm: "column",
                        xs: "column"
                    }
                }}>
                    <Img src={LogoFull} className={cls.Logo} />
                    <Box sx={{
                        ml: {
                            md: 2,
                            sm: 0,
                            xs: 0
                        }, mt: {
                            sm: 2,
                            xs: 2
                        }, display: 'flex', flexDirection: 'column', justifyContent: 'center'
                    }}>
                        <Typography variant="h5">
                            Michio da nekoooo!!!
                        </Typography>
                        <Typography mb={1} fontSize="10px" variant="body2">aka Mashiro</Typography>
                        <Typography fontSize="12px" variant="body2">
                            &copy; 2023 michioxd. Built with <Link color="inherit" target="_blank" href="https://vitejs.dev/guide/#getting-started">React + Vite + TypeScript</Link> + <Link title="Open Source license" component={LinkRouter} to="/opensource-license" color="inherit">deps</Link>
                        </Typography>
                        <Typography fontSize="10px" variant="body2">
                            This site is available on my <Link color="inherit" target="_blank" href="https://github.com/michioxd/michioxd.github.io">GitHub Repository</Link>.
                        </Typography>
                        <Typography variant="body2" fontSize="8px">
                            Commit: <Link color="inherit" target="_blank" href={"https://github.com/michioxd/michioxd.github.io/commit/" + __COMMIT_HASH__}>{formattedBuild}</Link>
                        </Typography>
                    </Box>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box sx={{
                    display: 'flex', flexDirection: "row", alignItems: 'center', justifyContent: 'flex-end'
                }}>
                    {SocialList.map((d, i) => (
                        <IconButton key={i} component={LinkRouter} to={d.url} target="_blank" title={d.title}>
                            {d.icon}
                        </IconButton>
                    ))}
                </Box>
            </Container>
        </div>
    )
}
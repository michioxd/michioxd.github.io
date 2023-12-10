import { AppBar, Box, Button, Container, IconButton, Typography } from "@mui/material";
import { Img } from "react-image";
import Logo from "./../assets/full-ver.svg";
import { Link as LinkRouter } from "react-router-dom";

import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import RingVolumeIcon from '@mui/icons-material/RingVolume';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
interface NavType {
    icon: JSX.Element,
    primaryText: string,
    secondaryText: string,
    color: string,
    to: string
}

const NavList: NavType[] = [
    {
        icon: (<CottageOutlinedIcon />),
        color: "#f075ab",
        primaryText: "Home",
        secondaryText: "家庭",
        to: "/"
    },
    {
        icon: (<AccountTreeIcon />),
        color: "#7068bd",
        primaryText: "Portfolio",
        secondaryText: "ポートフォリオ",
        to: "/portfolio"
    },
    {
        icon: (<RingVolumeIcon />),
        color: "#93cebe",
        primaryText: "Contact",
        secondaryText: "接触",
        to: "/contact"
    },
    {
        icon: (<HomeRepairServiceIcon />),
        color: "#ffe0a6",
        primaryText: "Tools",
        secondaryText: "道具",
        to: "/tools"
    },
    {
        icon: (<RssFeedIcon />),
        color: "#806988",
        primaryText: "Blog",
        secondaryText: "ブログ",
        to: "/blog"
    }
]

const NavItem = ({ icon, primaryText, secondaryText, color, to }: NavType) => {
    return (
        <Button sx={{ ml: 1 }} component={LinkRouter} to={to}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <IconButton sx={{ backgroundColor: color + " !important", color: "#fff" }} disableRipple>
                    {icon}
                </IconButton>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', ml: 1 }}>
                    <Typography sx={{ fontSize: '14px', textTransform: 'initial', textShadow: '0px 0px 2px' }}>{primaryText}</Typography>
                    <Typography variant="body2" sx={{ fontSize: '9px', textTransform: 'initial', textShadow: '0px 0px 2px' }}>{secondaryText}</Typography>
                </Box>
            </Box>
        </Button>
    )
}

export default function Header() {
    return (
        <AppBar sx={{ boxShadow: '' }} color="inherit" position="fixed">
            <Container>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <LinkRouter style={{ margin: '5px' }} to="/">
                        <Img src={Logo} height={'50px'} />
                    </LinkRouter>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        {NavList.map((d, i) => (
                            <NavItem
                                key={i}
                                {...d}
                            />
                        ))}
                    </Box>
                </Box>
            </Container>
        </AppBar>
    )
}
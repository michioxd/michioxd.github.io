import { Avatar, Card, CardContent, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import Title from "../components/Title";
import cls from "./Home.module.scss";
import { Img } from "react-image";

import HotelIcon from '@mui/icons-material/Hotel';
import CodeIcon from '@mui/icons-material/Code';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';

export default function PageHome() {
    return (
        <>
            <Title primary="About me" secondary="私のこと" />
            <Grid sx={{ mt: 2 }} container className={cls.Home}>
                <Grid item xs={12} md={3}>
                    <Card sx={{
                        mr: {
                            md: 2,
                            sm: 0
                        },
                        mb: {
                            md: 0,
                            sm: 2,
                            xs: 2
                        }
                    }}>
                        <Img src={"https://www.gravatar.com/avatar/35421891b164c29bab7640be09832acd939a3ea15fccbfb68144befef58d6d82?s=512"} style={{ width: '100%' }} />
                    </Card>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Card className={cls.HomeMain}>
                        <div className={cls.Background} />
                        <CardContent className={cls.HomeContent}>
                            <Typography variant="h6">hello, my name is Michio (aka Mashiro)</Typography>
                            <Typography fontSize={12} variant="body2">i made so much <span title="stupid" style={{ cursor: "help" }}>baka</span> things, i do everything i love, programming, design, play game,..., love moeeee things, love nekoooooo!!!</Typography>
                            <br />
                            <Typography fontSize={17} variant="h6">what i can do?</Typography>
                            <List dense sx={{ width: '100%', flexDirection: { md: 'row', xs: 'column' }, display: 'flex' }} >
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: '#ffc7c7' }}>
                                            <HotelIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primaryTypographyProps={{ fontSize: '16px' }} secondaryTypographyProps={{ fontSize: '12px' }} primary="sleep" secondary="since ..." />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: '#569ee3' }}>
                                            <CodeIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primaryTypographyProps={{ fontSize: '16px' }} secondaryTypographyProps={{ fontSize: '12px' }} primary="programming" secondary="since 2019" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: '#d4eaff' }}>
                                            <FormatColorFillIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primaryTypographyProps={{ fontSize: '16px' }} secondaryTypographyProps={{ fontSize: '12px' }} primary="design" secondary="since 2018" />
                                </ListItem>
                            </List>
                            <br />
                            <Typography fontSize={17} variant="h6">what i cannot do?</Typography>
                            <Typography fontSize={12} variant="body2">die... lmaooooooooooooooooooooooooooooooo</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}
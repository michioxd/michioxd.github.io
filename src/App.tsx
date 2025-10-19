import { Avatar, Badge, Button, Card, Flex, Grid, Heading, HoverCard, IconButton, Link, Text } from '@radix-ui/themes';
import { PiCodeDuotone, PiInfoDuotone, PiMagicWandDuotone, PiPhoneCallDuotone } from 'react-icons/pi';
import Hero from './components/hero';
import skills from './data/skills';
import Footer from './components/Footer';
import Projects from './data/projects';
import cls from './App.module.scss';
import { cn } from './utils/class';
import { ListContact } from './data/contact';
import HeaderSection from './components/Header';

function App() {
    return (
        <>
            <div className="flex-1 max-w-[1440px] m-4 flex flex-col ">
                <Hero />
                <Flex>
                    <Grid
                        columns={{
                            initial: '1',
                            md: '3',
                        }}
                        gap="3"
                        className="w-full h-full"
                    >
                        <div className="flex flex-col gap-3 relative">
                            <div className="relative">
                                <Card size="2">
                                    <HeaderSection
                                        icons={<PiInfoDuotone size={24} />}
                                        title="about me"
                                        subtitle="本当に、江藤、恥ずかしい。"
                                    />
                                    <div className="mt-2 flex flex-col gap-2">
                                        <div className="flex items-center justify-center flex-1 my-2">
                                            <Avatar
                                                src="https://www.gravatar.com/avatar/35421891b164c29bab7640be09832acd939a3ea15fccbfb68144befef58d6d82?s=512"
                                                fallback="neko"
                                                size="9"
                                            />
                                        </div>
                                        <Heading size="4" className="PrettyTitle" style={{ textAlign: 'center' }}>
                                            hello! xin chào! こんにちは!
                                        </Heading>
                                        <Text size="1" color="gray" className="!leading-normal">
                                            i'm michioxd, from Vietnam, a fullstack developer. i love kawaii thing,
                                            specially nekooo and oji-san (
                                            <Link
                                                href="https://bluearchive.fandom.com/wiki/Takanashi_Hoshino"
                                                target="_blank"
                                                color="gray"
                                            >
                                                hoshino
                                            </Link>{' '}
                                            you known lmao). i'm not good at anything, but i'm trying to be better. i
                                            love to make something new, something cool, something that can help people.
                                            i'm trying become princess before gta 6 heh... no idea btw{' '}
                                            {'ฅ^>⩊<^ฅ ✩₊˚.⋆☾⋆⁺₊✧'}
                                        </Text>
                                    </div>
                                </Card>
                            </div>
                            <div className="relative">
                                <Card size="2">
                                    <HeaderSection
                                        icons={<PiMagicWandDuotone size={24} />}
                                        title="my skills"
                                        subtitle="bruh im just a noob tho"
                                    />
                                    <div className="flex gap-1 flex-wrap mt-2">
                                        {skills.map((skill, index) => (
                                            <HoverCard.Root>
                                                <HoverCard.Trigger>
                                                    <Badge size="3" color={skill.color} key={index}>
                                                        {skill.name}
                                                    </Badge>
                                                </HoverCard.Trigger>
                                                <HoverCard.Content>
                                                    <Flex gap="4">
                                                        <IconButton size="4" color={skill.color} variant="soft">
                                                            <img
                                                                src={skill.icon}
                                                                alt={skill.name}
                                                                className={'w-8 h-8 rounded-md'}
                                                            />
                                                        </IconButton>
                                                        <div>
                                                            <Heading
                                                                style={
                                                                    {
                                                                        '--text-color': skill.textColor,
                                                                    } as React.CSSProperties
                                                                }
                                                                className={'PrettyTitle'}
                                                                size="4"
                                                            >
                                                                {skill.name}
                                                            </Heading>
                                                            <Text
                                                                style={{
                                                                    marginTop: '0.2rem',
                                                                }}
                                                                as="div"
                                                                color="gray"
                                                                size="1"
                                                            >
                                                                {skill.description}
                                                            </Text>
                                                        </div>
                                                    </Flex>
                                                </HoverCard.Content>
                                            </HoverCard.Root>
                                        ))}
                                    </div>
                                </Card>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div>
                                <Card size="2">
                                    <HeaderSection
                                        icons={<PiCodeDuotone size={24} />}
                                        title="my projects"
                                        subtitle="heh...? too bad..."
                                    />
                                    <div className="flex flex-col gap-2 mt-2">
                                        {Projects.map((project, index) => (
                                            <Card variant="surface" key={index}>
                                                <div
                                                    className={cn(
                                                        'absolute top-0 right-0 w-2/3 overflow-hidden z-0',
                                                        cls.projectPreview,
                                                    )}
                                                >
                                                    <img
                                                        src={project.image}
                                                        alt={project.name}
                                                        className="object-center object-cover"
                                                    />
                                                </div>
                                                <div className="relative z-10">
                                                    <div className="relative flex flex-col gap-1">
                                                        <HoverCard.Root>
                                                            <HoverCard.Trigger>
                                                                <Heading
                                                                    size="3"
                                                                    className={
                                                                        'PrettyTitle !flex flex-row items-center gap-1 cursor-pointer'
                                                                    }
                                                                >
                                                                    {project.name}{' '}
                                                                    <Badge size="1">{project.type}</Badge>
                                                                </Heading>
                                                            </HoverCard.Trigger>
                                                            <HoverCard.Content>
                                                                <a href={project.image} target="_blank">
                                                                    <img
                                                                        src={project.image}
                                                                        alt={project.name}
                                                                        className="w-full rounded-md border border-zinc-800"
                                                                    />
                                                                </a>
                                                            </HoverCard.Content>
                                                        </HoverCard.Root>
                                                        <Text size="1" color="gray">
                                                            {project.description}
                                                        </Text>
                                                        <div className="flex flex-wrap gap-1">
                                                            {project.tech.map((tech, index) => (
                                                                <Badge variant="outline" key={index} size="1">
                                                                    {tech}
                                                                </Badge>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="flex-1"></div>
                                                    <div className="flex flex-row-reverse flex-1 gap-1 mt-2">
                                                        {project.buttons.map((button, index) => (
                                                            <a href={button.url} target="_blank" rel="noreferrer">
                                                                <Button size="1" key={index} variant="soft">
                                                                    {button.name}
                                                                </Button>
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            </Card>
                                        ))}
                                    </div>
                                </Card>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div>
                                <Card size="2">
                                    <HeaderSection
                                        icons={<PiPhoneCallDuotone size={24} />}
                                        title="contact me"
                                        subtitle="pls don't call me at 3am..."
                                    />
                                    <div className="mt-2 flex-col flex gap-2">
                                        {ListContact.map((contact, index) => (
                                            <Link key={index} href={contact.url} target="_blank">
                                                <Card className="!flex flex-row gap-2">
                                                    <IconButton size="3" variant="surface">
                                                        {contact.icon}
                                                    </IconButton>
                                                    <div className={'flex flex-col'}>
                                                        <Heading
                                                            style={
                                                                {
                                                                    '--text-color': '#e2d1d4',
                                                                } as React.CSSProperties
                                                            }
                                                            className={'PrettyTitle'}
                                                            size="3"
                                                        >
                                                            {contact.name}
                                                        </Heading>
                                                        <Text size="1" className="!text-[10px]" color="gray">
                                                            {contact.user}
                                                        </Text>
                                                    </div>
                                                </Card>
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="mt-2">
                                        <Text align="center" size="1" color="gray">
                                            For work, please contact me via email:{' '}
                                            <Link color="gray" href="mailto:neko@michioxd.ch">
                                                neko@michioxd.ch
                                            </Link>
                                        </Text>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </Grid>
                </Flex>
            </div>
            <Footer />
        </>
    );
}

export default App;

import { Avatar, Badge, Button, Card, Flex, Grid, Heading, HoverCard, IconButton, Link, Text } from '@radix-ui/themes';
import { PiCodeDuotone, PiDownloadDuotone, PiInfoDuotone, PiLinkDuotone, PiLockDuotone, PiMagicWandDuotone, PiPhoneCallDuotone } from 'react-icons/pi';
import Hero from './components/hero';
import skills from './data/skills';
import Footer from './components/Footer';
import AllProjects from './data/projects';
import cls from './App.module.scss';
import { cn } from './utils/class';
import { ListContact, ListOther } from './data/contact';
import HeaderSection from './components/Header';
import Instructions from './components/instructions';

const GPGKey = "0AE35740A8756C89AF01BA543D6E98A548407572";

const Projects = () => {
    return (
        <>
            <div>
                <Card size="2">
                    <HeaderSection
                        icons={<PiCodeDuotone size={24} />}
                        title="my projects"
                        subtitle="heh...? too bad..."
                    />
                    <div className="mt-2 overflow-auto md:max-h-[685px]">
                        <div className="flex flex-wrap flex-col gap-2">
                            {AllProjects.map((project, index) => (
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
                                                        {project.name} <Badge size="1">{project.type}</Badge>
                                                        {project.wip && (
                                                            <Badge size="1" color="yellow">
                                                                WIP
                                                            </Badge>
                                                        )}
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
                                            <Text size="1" color="gray" className="!text-[10px]">
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
                    </div>
                </Card>
            </div>
        </>
    );
};

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
                                                src="https://www.gravatar.com/avatar/35421891b164c29bab7640be09832acd939a3ea15fccbfb68144befef58d6d82?s=1024"
                                                fallback="neko"
                                                size="9"
                                            />
                                        </div>
                                        <Heading size="4" className="PrettyTitle" style={{ textAlign: 'center' }}>
                                            hello! xin chào! こんにちは!
                                        </Heading>
                                        <Text size="1" color="gray" className="!leading-normal">
                                            i'm{' '}
                                            <Link
                                                href="https://github.com/michioxd"
                                                className="!underline"
                                                target="_blank"
                                                color="gray"
                                            >
                                                michioxd
                                            </Link>
                                            , from{' '}
                                            <Instructions
                                                link="https://en.wikipedia.org/wiki/Vietnam"
                                                name="Vietnam🇻🇳"
                                                title="🇻🇳Vietnam (Việt Nam)"
                                                content="Vietnam is a Southeast Asian nation celebrated for its vibrant culture, long history, stunning landscapes, and remarkable transformation from a war-torn past to one of Asia's fastest-growing economies."
                                            />
                                            . i love{' '}
                                            <Instructions
                                                link="https://en.wiktionary.org/wiki/Kawaii"
                                                name="kawaii"
                                                title="Kawaii (可愛い)"
                                                content="Kawaii (可愛い) is a Japanese term meaning “cute” or “adorable,” representing a cultural aesthetic that celebrates innocence, softness, and charm across fashion, art, and pop culture."
                                            />{' '}
                                            thing, specially{' '}
                                            <Instructions
                                                link="https://en.wiktionary.org/wiki/Catgirl"
                                                name="nekomimi"
                                                title="Nekomimi (猫耳)"
                                                content="Nekomimi (猫耳) means “cat ears” in Japanese, referring to characters—usually human—with cat-like ears and behaviors, blending feline charm with human appeal in anime and pop culture."
                                            />{' '}
                                            and oji-san (
                                            <Instructions
                                                link="https://bluearchive.fandom.com/wiki/Takanashi_Hoshino"
                                                name="hoshino"
                                                title="Takanashi Hoshino (Blue Archive)"
                                                content="Takanashi Hoshino is a character from Blue Archive, known for her sleepy demeanor, loyalty as an older-sister figure, and role as the laid-back yet dependable deputy of the Abydos High School Countermeasures Committee."
                                            />{' '}
                                            you known lmao), love{' '}
                                            <Instructions
                                                link="https://en.wikipedia.org/wiki/Programmer"
                                                name="programming"
                                                title="Programmer"
                                                content="A programmer is a person who writes and maintains computer code, turning ideas and logic into functioning software, systems, or applications."
                                            />{' '}
                                            , love{' '}
                                            <Instructions
                                                link="https://en.wikipedia.org/wiki/Rhythm_game"
                                                name="rhythm game"
                                                title="Rhythm Game"
                                                content="A rhythm game is a music-based video game where players match inputs to the beat, melody, or rhythm of a song, testing timing, reflexes, and sense of music."
                                            />{' '}
                                            . i'm not good at anything, but i'm trying to be better. i love to make
                                            something new, cool and something that can help people. i'm trying become{' '}
                                            <Instructions
                                                link="https://en.wikipedia.org/wiki/Lolita_fashion"
                                                name="princess"
                                                title="Lolita Fashion"
                                                content="Lolita fashion is a Japanese street style inspired by Victorian and Rococo clothing, featuring elaborate dresses, lace, and elegance to express cuteness, modesty, and individuality."
                                            />{' '}
                                            before{' '}
                                            <Instructions
                                                link="https://en.wikipedia.org/wiki/Grand_Theft_Auto_VI"
                                                name="gta 6"
                                                title="GTA VI (Grand Theft Auto VI)"
                                                content="GTA VI (Grand Theft Auto VI) is an upcoming open-world action-adventure game by Rockstar Games®, set in a modernized Vice City, promising expansive storytelling, realism, and next-generation graphics."
                                            />{' '}
                                            heh... no idea btw {'ฅ^>⩊<^ฅ ✩₊˚.⋆☾⋆⁺₊✧'}
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
                            <div className="relative">
                                <Card size="2">
                                    <HeaderSection
                                        icons={<PiLockDuotone size={24} />}
                                        title="gpg key"
                                        subtitle="ensure that's me!"
                                    />
                                    <div className="mt-2 flex flex-col gap-2">
                                        <Text size="1" color="gray">
                                            To verify my signed emails, software releases and commits. You may need my public <Instructions
                                                content="GPG (GNU Privacy Guard) is a free encryption software that provides cryptographic privacy and authentication through public-key cryptography, commonly used for securing communications and data."
                                                link="https://en.wikipedia.org/wiki/GNU_Privacy_Guard"
                                                name="GPG key"
                                                title="GPG (GNU Privacy Guard)"
                                            />. My latest GPG key can be found on <Link color="gray" href={"https://keys.openpgp.org/search?q=" + GPGKey} className="!underline" target="_blank">keys.openpgp.org</Link>.
                                        </Text>
                                        <div className='flex flex-col gap-0'>
                                            <Text size="1" color="gray">
                                                Current GPG Key Fingerprint (SHA-1) (01-07-2027):
                                            </Text>
                                            <Text asChild size="1">
                                                <code className='select-all'>
                                                    {GPGKey.match(/.{1,4}/g)?.join(' ')}
                                                </code>
                                            </Text>
                                        </div>
                                        <div className='flex justify-end w-full'>
                                            <Button className='!w-fit' size="1" asChild variant="soft">
                                                <a href={"https://keys.openpgp.org/vks/v1/by-fingerprint/" + GPGKey} target="_blank" rel="noreferrer">
                                                    <PiDownloadDuotone size={14} />
                                                    Download GPG Key
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Projects />
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
                                                    <IconButton size="3" variant="soft" color={contact.color}>
                                                        {contact.icon}
                                                    </IconButton>
                                                    <div className={'flex flex-col'}>
                                                        <Heading className={'PrettyTitle'} size="3">
                                                            {contact.name}
                                                        </Heading>
                                                        <Text size="1" className="!text-[10px]" color="gray">
                                                            {contact.sub}
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
                            <div>
                                <Card size="2">
                                    <HeaderSection
                                        icons={<PiLinkDuotone size={24} />}
                                        title="related links"
                                        subtitle="no idea"
                                    />
                                    <div className="mt-2 flex-col flex gap-2">
                                        {ListOther.map((contact, index) => (
                                            <Link key={index} href={contact.url} target="_blank">
                                                <Card className="!flex flex-row gap-2">
                                                    <IconButton size="3" variant="soft" color={contact.color}>
                                                        {contact.icon}
                                                    </IconButton>
                                                    <div className={'flex flex-col'}>
                                                        <Heading className={'PrettyTitle'} size="3">
                                                            {contact.name}
                                                        </Heading>
                                                        <Text size="1" className="!text-[10px]" color="gray">
                                                            {contact.sub}
                                                        </Text>
                                                    </div>
                                                </Card>
                                            </Link>
                                        ))}
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

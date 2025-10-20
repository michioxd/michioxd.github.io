import { Flex, Heading, HoverCard, Link, Text } from '@radix-ui/themes';
import { PiArrowSquareOutDuotone } from 'react-icons/pi';

const Instructions = ({
    link,
    name,
    title,
    content,
}: {
    link: string;
    name: React.ReactNode;
    title: React.ReactNode;
    content: React.ReactNode;
}) => {
    return (
        <HoverCard.Root>
            <HoverCard.Trigger>
                <Link href={link} className="!underline" target="_blank" color="gray">
                    {name}
                </Link>
            </HoverCard.Trigger>
            <HoverCard.Content>
                <Flex gap="1" direction="column">
                    <Heading size="3" className="!font-[500]">
                        {title}
                    </Heading>
                    <Text as="div" color="gray" size="1">
                        {content}{' '}
                    </Text>
                    <Link size="1" href={link} target="_blank" className="!flex flex-row !w-fit !justify-center">
                        Learn more&nbsp;
                        <PiArrowSquareOutDuotone size={14} />
                    </Link>
                </Flex>
            </HoverCard.Content>
        </HoverCard.Root>
    );
};

export default Instructions;

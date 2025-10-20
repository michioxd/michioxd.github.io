import { IconButton, Heading, Text } from '@radix-ui/themes';
import type React from 'react';

export default function HeaderSection({
    icons,
    title,
    subtitle,
}: {
    icons?: React.ReactNode;
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
}) {
    return (
        <div className={'flex flex-row items-center gap-2'}>
            <IconButton size="3" variant="surface">
                {icons}
            </IconButton>
            <div className={'flex flex-col'}>
                <Heading className={'PrettyTitle'} size="3">
                    {title}
                </Heading>
                <Text size="1" className="!text-[10px]" color="gray">
                    {subtitle}
                </Text>
            </div>
        </div>
    );
}

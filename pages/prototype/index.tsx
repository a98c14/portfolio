import BaseContainer from 'components/common/BaseContainer';
import StyledLink from 'components/common/StyledLink';
import HomeContainer from 'components/home/HomeContainer';
import React, { useEffect, useState } from 'react';
import { animated, config, useTransition } from 'react-spring';

const ROUTES = [
    { text: 'About', href: '/about' },
    { text: 'Work', href: '/work' },
    { text: 'Prototype', href: '/prototype' },
];

const TEMP = [
    { text: 'Work', href: '/work' },
    { text: 'Prototype', href: '/prototype' },
];

const AnimatedStyledLink = animated(StyledLink);

export default function Home() {
    const [items, setItems] = useState(ROUTES);

    const transitions = useTransition(items, {
        keys: (item) => item.href,
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        delay: 100,
        config: config.molasses,
        trail: 50,
    });

    return (
        <HomeContainer>
            <div className="flex flex-row gap-32">
                {transitions((style, item) => (
                    <StyledLink text={item.text} href={item.href} style={style} key={item.href} />
                ))}
            </div>
        </HomeContainer>
    );
}

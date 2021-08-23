import Link from 'next/link';
import { animated, SpringValue } from 'react-spring';

type TextButtonProps = {
    text: string;
    href: string;
    style: any;
};

export default function StyledLink({ text, href, style }: TextButtonProps) {
    return (
        <Link href={href} passHref>
            <animated.a
                style={{ ...style }}
                className="duration-300 font-extralight text-3xl text-shadow hover:text-shadow-md text-blue-100 hover:text-white cursor-pointer"
                key={href}
            >
                {text}
            </animated.a>
        </Link>
    );
}

import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import useLocalization from 'hooks/useLocalization';
import Head from 'next/head';
import React from 'react';
import Background from './Background';

type BaseContainerProps = {
    children: React.ReactNode;
};

// Base container component that provides header, body and footer
export default function BaseContainer({ children }: BaseContainerProps) {
    const { S, Key } = useLocalization();
    return (
        <div className="h-screen w-screen flex flex-col">
            <Head>
                <title>{S(Key.AppName)}</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;400&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Background />
            {children}
        </div>
    );
}

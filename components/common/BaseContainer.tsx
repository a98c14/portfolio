import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import useLocalization from 'hooks/useLocalization';
import Head from 'next/head';
import React from 'react';

type BaseContainerProps = {
    children: React.ReactNode;
};

// Base container component that provides header, body and footer
export default function BaseContainer({ children }: BaseContainerProps) {
    const { S, Key } = useLocalization();
    return (
        <>
            <Head>
                <title>{S(Key.AppName)}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}

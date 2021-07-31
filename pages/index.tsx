import BaseContainer from 'components/common/BaseContainer';
import HomeContainer from 'components/home/HomeContainer';
import Head from 'next/head';
import React from 'react';

export default function Home() {
    return (
        <HomeContainer>
            <div className="flex flex-col gap-6 w-full h-full items-center justify-center ">
                <div className="font-medium text-5xl text-blue-200">Selim Yeşilkaya</div>
                <div className="flex flex-row gap-2">
                    <button className="btn btn-primary">About</button>
                    <button className="btn btn-primary">Work</button>
                    <button className="btn btn-primary">Prototype</button>
                </div>
            </div>
        </HomeContainer>
    );
}

import BaseContainer from 'components/common/BaseContainer';
import BlackBars from 'components/common/BlackBars';
import React from 'react';

type HomeContainerProps = {
    children: React.ReactNode;
};

export default function HomeContainer({ children }: HomeContainerProps) {
    return (
        <BaseContainer>
            <BlackBars>
                <main className="flex w-full h-full">
                    <div className="flex flex-col gap-20 w-full h-full items-center justify-center">{children}</div>
                </main>
            </BlackBars>
        </BaseContainer>
    );
}

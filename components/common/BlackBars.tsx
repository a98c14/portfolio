type BlackBarsProps = {
    children: React.ReactNode;
};

export default function BlackBars({ children }: BlackBarsProps) {
    return (
        <div className="flex flex-col h-full">
            <div className="bg-black h-40" />
            <div className="h-full">{children}</div>
            <div className="bg-black h-40" />
        </div>
    );
}

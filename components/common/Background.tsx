export default function Background() {
    return (
        <div
            className="w-screen h-screen absolute"
            style={{ backgroundImage: 'radial-gradient(farthest-corner at 100px 100px,#333c47 0%, #04072c 100%)', zIndex: -1 }}
        />
    );
}

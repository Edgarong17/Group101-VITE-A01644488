export const dumbComponent = ({count = 0}: { count?: number }) => {
    return (
        <div>
        <h1>Dumb Component</h1>
        <p>This is a simple dumb component for testing purposes.</p>
        <p>Count: {count}</p>
        </div>
    );
}
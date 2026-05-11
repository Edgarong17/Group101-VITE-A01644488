
export type CounterProps = {
    initialCount?: number;
}

export interface IButtonsProps {
    dataTestId: string,
    //setCounter: (value: number) => void;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
}
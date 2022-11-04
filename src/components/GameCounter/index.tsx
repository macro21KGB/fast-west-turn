import { FC } from "react";

interface GameCounterProps {
    count: number;
}

const GameCounter: FC<GameCounterProps> = (props) => {

    const { count } = props;

    return (
        <div className="flex justify-center items-center rounded bg-gray-300 min-w-10">
            <p className="font-medium p-0 m-0 text-white">#{count}</p>
        </div>
    );
}

export default GameCounter;
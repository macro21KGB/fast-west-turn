import { FC, useEffect, useState } from "react";
import GameCounter from "../GameCounter";
import { getGamesFromStorage } from "../../utils";

interface NavbarProps {
    onAdd: () => void;
}


export default function Navbar(props: NavbarProps) {

    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        const gamesInLocalStorage = getGamesFromStorage();
        setCount(gamesInLocalStorage.length);

    }, [])

    return (
        <nav className="px-4 py-3 m-3 shadow flex justify-between rounded-md items-center">
            <p className="font-bold text-gray-600">Fast West Turn</p>

            <div id="others" className="flex gap-2">
                <GameCounter count={count} />
                <button onClick={props.onAdd} className="rounded-full text-bg-gray-300 hover:bg-gray-200 active:bg-gray-300 bg-gray-100 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
            </div>
        </nav>

    );
}
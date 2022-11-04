import Button from "../Button";
import { useRef, useState } from "react"
import './index.css'

enum Directions {
    Left = "left",
    Right = "right",
    Both = "both",
    Choose = "choose",
    None = "none"
}

interface PlayAreaProps {
    onFinish: () => void
}

export default function PlayArea(props: PlayAreaProps) {

    const directionRef = useRef<SVGSVGElement>(null);

    const { onFinish } = props

    const [currentDirection, setCurrentDirection] = useState<Directions>(Directions.None);


    const removeAllRotationClasses = () => {
        const roationClasses = ["rotate-left", "rotate-right", "rotate-both",];
        roationClasses.forEach((rotationClass) => {
            directionRef.current?.classList.remove(rotationClass);
        });
        directionRef.current?.children[0].classList.remove("flip");
    }

    const selectIconToDisplay = () => {
        switch (currentDirection) {
            case Directions.Left || Directions.Right:
                return (<path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />);
            case Directions.Both:
                return (<path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />);
            case Directions.Choose:
                return (<path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />);

            default:
                return (<path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />);

        }
    }

    const handleDirectionChange = (direction: Directions) => {
        removeAllRotationClasses();
        setCurrentDirection(direction);
        rotateDirectionIcon(direction);
    }


    const rotateDirectionIcon = (direction: Directions) => {
        if (!directionRef.current)
            return;

        if (direction === Directions.Left) {

            directionRef.current.children[0].classList.add("flip");
            directionRef.current.classList.add("rotate-left");
        }
        else if (direction === Directions.Right) {
            directionRef.current.classList.add("rotate-right");
        }
        else if (direction === Directions.Both) {
            directionRef.current.classList.add("rotate-both");
        }
        else if (direction === Directions.Choose) {
            directionRef.current.classList.add("rotate-right");
        }
        else {
            removeAllRotationClasses();
        }
    }

    return (
        <div className="flex justify-center items-center flex-col h-max w-max">
            <svg ref={directionRef} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="text-gray-700 w-65" >
                {selectIconToDisplay()}
            </svg>

            <div id="buttons" className="mt-10 grid grid-cols-3 grid-rows-3 gap-2">

                {/* LEFT */}
                <Button label="Go left" onClick={() => handleDirectionChange(Directions.Left)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </Button>

                {/* BOTH */}
                <Button label="Both" onClick={() => handleDirectionChange(Directions.Both)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                    </svg>

                </Button>

                {/* RIGHT */}
                <Button label="Go right" onClick={() => handleDirectionChange(Directions.Right)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </Button>

                {/* CHOOSE */}
                <Button label="Choose" onClick={() => handleDirectionChange(Directions.Choose)} isLong={true} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                    </svg>

                </Button>
                <Button borderColor="#00ae00" textColor="#00ae00" label="Declare Winner" onClick={onFinish} isLong={true} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                    </svg>
                </Button>

            </div>
        </div>
    )
}

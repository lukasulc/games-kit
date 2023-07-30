'use client'
import Chip from "@/app/(components)/(custom)/Chip";
import { useEffect, useRef, useState } from "react";
import StartLorumGame from "./[id]/page";


export type LorumGameOption = {
    id: string,
    fullName: string,
    isSelected: boolean,
    description: string,
}

export type LorumGamePlayerStats = {
    [player_id: string]: number[]

}

export type LorumResult = { playerId: string, games: string[], scores: number[], sum?: number }


let lorumGames: LorumGameOption[] = [
    {
        id: 'Hearts', fullName: 'Hearts', isSelected: true,
        description: "Collecting all of the hearts yields -8 points. Otherwise, you get a point for each heart you have.",
    },
    {
        id: 'KH&LC', fullName: 'King of hearts and last card', isSelected: true,
        description: "Don't collect the King of hearts and the last trick. Each yields 4 points.",
    },
    {
        id: 'More', fullName: 'As much as possible', isSelected: true,
        description: "Gather as much tricks as possible. Each yields -1 point.",
    },
    {
        id: 'Less', fullName: 'As less as possible', isSelected: true,
        description: "Gather as few tricks as possible. Each yields 1 point.",
    },
    {
        id: 'Queens', fullName: 'Queens', isSelected: true,
        description: "Gather as few Queens as possible. Each yields 2 point.",
    },
    {
        id: 'JC', fullName: 'Jack of clubs', isSelected: false,
        description: "Prevent the player across you from collecting the Jack of clubs. Player across the one who collected the Jack of clubs gets 8 points.",
    },
    {
        id: 'Lorum', fullName: 'Lorum', isSelected: true,
        description: "Get rid of all of the cards by placing them in order. Order of cards: 7 8 9 10 J Q K A. You can start with any card. You can put a 7 on an A making a closed loop.",
    },
    {
        id: 'Prog', fullName: 'Prognosis', isSelected: false,
        description: "Predict how many tricks you will gather. If you guess correctly you get negative number of points of the predicted number, otherwise you get that many points.",
    },
];

function onChipClick(props: any) {
    console.log(props.obj.id, lorumGames.find(obj => obj.id === props.obj.id));

    props.hook((prevState: any[]) => {
        return prevState.map(obj => obj.id === props.obj.id ? { ...obj, isSelected: !obj.isSelected } : obj)
    })

}

export default function SetupGame({ params }: { params: { name: string } }) {
    console.dir("bla", params,)

    const cssSelected = "bg-red-700 hover:bg-red-800 text-red-100"
    const cssNotSelected = "bg-red-100 hover:bg-red-200 text-red-700"

    const [gameId, setGameId] = useState<string>("");
    const [games, setGames] = useState(lorumGames);
    const [results, setResults] = useState<LorumResult[]>([]);

    console.log(results);


    const inputRef: any = useRef(null);

    function onGameResultChange(event: any) {
        console.log(inputRef, event, event.id, event.currentTarget.id);
        console.log(inputRef.current.childNodes[1].childNodes[1].childNodes[0].value);
    }

    function saveStateToLocalStorage(num: number) {
        // useLocalStorage("game_id", crypto.randomUUID());
        // useLocalStorage("numOfPlayers", JSON.stringify(num));
        // useLocalStorage("games", JSON.stringify(games));

        let selectedGames: string[] = games.filter(game => game.isSelected === true).map(({ id }) => id)
        let res: LorumResult[] = []
        for (let index = 0; index < num; index++) {
            res.push({ playerId: index.toString(), games: selectedGames, scores: [...Array(selectedGames.length)] })
        }
        console.log(res,);

        setResults(res);

        // useLocalStorage("gameResults", JSON.stringify(gameValues));
        setGameId(crypto.randomUUID())
        // setNumOfPlayers(num);
        // setGames(gameValues);
    }

    return (
        <main className="flex items-center flex-col p-12 gap-y-6 h-screen">
            <h1 className="text-3xl font-bold">
                Lorum
                {/* {params.name.toUpperCase()} */}
            </h1>

            {/* <div className={`transition-opacity duration-500 opacity-${numOfPlayers === 0 ? "100" : "0"}`}></div> Fading opacity*/}
            {gameId === "" ?
                <>
                    <div className="grid sm:grid-cols-4 grid-cols-2">
                        {games.map((game, index) => (<Chip key={game.id} obj={game} hook={setGames} onBtnClick={onChipClick} className={game.isSelected ? cssSelected : cssNotSelected} />))}
                    </div>
                    <h2 className="">Number of players?</h2>
                    <div className="flex justify-evenly w-full md:w-5/12">

                        <button onClick={() => saveStateToLocalStorage(3)} className="flex justify-center">
                            <i className="bi bi-3-circle-fill text-6xl"></i>
                        </button>
                        <button onClick={() => saveStateToLocalStorage(4)} className="flex justify-center">
                            <i className="bi bi-4-circle-fill text-6xl"></i>
                        </button>
                    </div>
                    {/* {
                        gameId !== "" ? <>
                            <h2 className="text-xl">or</h2>
                            <button>Continue where you left off</button>
                        </> : <></>
                    } */}
                </> :
                <>
                    <StartLorumGame results={results} setResults={setResults} gameId={gameId} setGameId={setGameId}></StartLorumGame>
                </>
            }

        </main>
    )
}

function getStorageValue<T,>(key: string, defaultValue: T) {
    // getting stored value
    if (typeof window !== "undefined") {
        const saved = localStorage.getItem(key);
        return saved !== null ? JSON.parse(saved) as T : defaultValue;
    }
    return defaultValue
}

export const useLocalStorage = <T,>(key: string, defaultValue: T) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    });

    useEffect(() => {
        // storing input name
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};
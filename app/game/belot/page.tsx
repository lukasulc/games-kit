'use client'
import Chip from "@/app/(components)/(custom)/Chip"
import PlayerNameGroup from "@/app/(components)/(custom)/PlayerNameGroup";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';

export type LorumGame = {
    id: string,
    fullName: string,
    isSelected: boolean,
    description: string,
}



export default function Game({ params }: { params: { name: string } }) {
    console.dir(params)

    const [numOfPlayers, setNumOfPlayers] = useState(0);
    return (
        <main className="flex items-center flex-col p-12 gap-y-6 h-screen">
            <h1 className=" text-3xl font-bold">
                Belot
                {/* {params.name.toUpperCase()} */}
            </h1>

            {/* <div className={`transition-opacity duration-500 opacity-${numOfPlayers === 0 ? "100" : "0"}`}></div> Fading opacity*/}
            {numOfPlayers === 0 ?
                <>
                    <h2 className="">Number of players?</h2>
                    <div className="flex justify-evenly w-full md:w-5/12">
                        <button onClick={() => setNumOfPlayers(2)} className="flex justify-center">
                            <i className="bi bi-2-circle-fill text-6xl"></i>
                        </button>
                        <button onClick={() => setNumOfPlayers(3)} className="flex justify-center">
                            <i className="bi bi-3-circle-fill text-6xl"></i>
                        </button>
                        <button onClick={() => setNumOfPlayers(4)} className="flex justify-center">
                            <i className="bi bi-4-circle-fill text-6xl"></i>
                        </button>
                    </div>
                </> :
                <>
                    <Accordion defaultActiveKey="0" className="w-full">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Accordion Item #1</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Button className="text-black" as="input" type="reset" value="Reset" onClick={() => setNumOfPlayers(0)} />
                </>
            }

        </main>
    )
}
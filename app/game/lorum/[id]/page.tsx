"use client"
import { ChangeEvent, Dispatch, FocusEvent, SetStateAction } from "react";
import { Accordion, Table } from "react-bootstrap";
import { LorumResult } from "../page";


export default function StartLorumGame({ results, setResults, gameId, setGameId }: { results: LorumResult[], setResults: Dispatch<SetStateAction<LorumResult[]>>, gameId: string, setGameId: Dispatch<SetStateAction<string>> }) {
    const games = Object.values(results).pop()?.games

    function updateResult(playerIdx: number, gameIdx: number, event: any) {
        if (!event.target.value) {
            return
        }

        const newResults = results.map((result, res_idx) => {
            if (res_idx === playerIdx) {
                result.scores[gameIdx] = parseInt(event.target.value);
                result.sum = result.scores.reduce((partialSum, a) => partialSum + (a ? a : 0), 0);
                result.sum = result.sum === 0 ? undefined : result.sum;
            }
            return result
        })

        setResults(newResults);
        console.log(results);
    }

    function checkNameExits(playerIdx: number, newName: string, e: ChangeEvent<HTMLInputElement>) {
        if (results.filter(({ playerId }) => playerId === newName).length > 1 || newName === "") {
            console.log(results.filter(({ playerId }) => playerId === newName).length > 1, newName === "", newName, results.map(({ playerId }) => playerId));

            for (let index = 0; index < results.length; index++) {
                if (!results.map(({ playerId }) => playerId).includes(newName + index)) {
                    newName = newName + index;
                    break
                }

            }
            updateName(playerIdx, newName)
        }
    }

    function updateName(playerIdx: number, newName: string) {
        setResults(results.map((res, res_idx) => {
            if (res_idx === playerIdx) {
                res.playerId = newName;
            }
            return res;
        }));
        console.log(results);
    }

    return (
        <>
            <div className="flex flex-row justify-between w-full">
                <button onClick={() => setGameId("")}><i className="bi bi-arrow-return-left"></i> Back</button>
                <button onClick={() => {
                    setGameId("");
                    setResults(results.map(result => {
                        result.scores = [...Array(result.scores.length)];
                        result.sum = undefined;
                        return result
                    }));
                }}><i className="bi bi-plus-square"></i> New Game</button>
            </div>
            <Accordion defaultActiveKey="0">
                {
                    results.map((result, res_idx) =>

                        <Accordion.Item eventKey={res_idx.toString()}>
                            <Accordion.Header>Round #{res_idx + 1} - {result.playerId}</Accordion.Header>
                            <Accordion.Body>
                                <Table striped bordered hover className="w-1/2">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            {
                                                results.map(
                                                    (result, res_idx) =>
                                                    (
                                                        <th key={res_idx}>
                                                            <input className="w-10" type="text" value={result.playerId}
                                                                onChange={(e) => updateName(res_idx, e.target.value)}
                                                                onBlur={e => checkNameExits(res_idx, e.target.value, e)} />
                                                        </th>
                                                    )
                                                )
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {games?.map((game, game_idx) => (
                                            <tr key={game_idx}>
                                                <td>{game}</td>
                                                {
                                                    results.map(
                                                        (result, res_idx) =>
                                                            (<td key={res_idx}><input onBlur={(e) => updateResult(res_idx, game_idx, e)} className="w-10" type="number" maxLength={4} defaultValue={result.scores[game_idx]} /></td>)
                                                    )
                                                }
                                            </tr>
                                        ))}
                                        <tr key="sum">
                                            <td>Sum</td>
                                            {
                                                results.map(
                                                    (_, res_idx) => (<td key={res_idx}>{results[res_idx].sum}</td>)
                                                )
                                            }
                                        </tr>
                                    </tbody>
                                </Table>
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                }
            </Accordion>

        </>
    )
}

'use client'
import { useRef, useState } from "react";
import { InputGroup, Form } from "react-bootstrap";


const PlayerNameGroup = () => {
    const [abbreviation, setAbbreviation] = useState('')
    const inputRef: any = useRef(null);

    function handleClick() {
        console.log(inputRef);
        setAbbreviation(inputRef.current.value)
    }

    return (
        <InputGroup className="mb-3">
            <InputGroup.Text >Name</InputGroup.Text>
            <Form.Control ref={inputRef} aria-label="Name" placeholder="Input player/team name" onKeyUp={handleClick} />
            <Form.Control aria-label="Abbreviation" placeholder="Suggested abbreviation will be shown" value={abbreviation} />
        </InputGroup>
    );
}
export default PlayerNameGroup;
import { useState } from "react";
import Chance from "chance";
import { Button, ButtonGroup } from '@chakra-ui/react'

export default function word() {

    let [word, setWord] = useState('random name');
    let chance = new Chance();

    return (
        <>
            <h1>
                Words page 🆎
            </h1>
            <Button colorScheme='teal' size='md' onClick={()=>setWord(chance.name())}>
                Generate New Name
            </Button>
            <h2>{word}</h2>
        </>
    )
}

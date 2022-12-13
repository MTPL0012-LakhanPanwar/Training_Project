import React, { useEffect, useState } from 'react'
import UseHook from './useEffect';
import Button from '@mui/material/Button';

export default function MaterialUi() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [isShow, setISshow] = useState(true);

    useEffect(
        () => {
            console.log("Increament counter one", counter1);
        }, [counter1]
    );

    useEffect(
        () => {
            console.log("Increament counter secound", counter2);
        }, [counter2]
    );

    return (
        <div>
            <p>{counter1}</p>
            <Button variant="contained" color="secondary"
                onClick={() => { setCounter1(counter1 + 1) }}>
                increament counter1
            </Button>

            <p>{counter2}</p>
            <Button variant="contained" color="primary"
                onClick={() => { setCounter2(counter2 + 1) }}>
                increament counter2
            </Button>

            {isShow && <UseHook/>}
            <Button variant="contained" color="success"
                onClick={() => { setISshow(isShow === false) }}>
                Toggle
            </Button>
        </div>
    )
}

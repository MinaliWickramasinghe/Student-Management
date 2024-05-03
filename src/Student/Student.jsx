import { Box } from "@mui/material";
import TextInput from './TextInput'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Display from "../Display/Display";
// import { useState } from "react";
import React, { useState, useRef } from "react";
import './Style.css';


export default function Student() {

    const [stu, setStu] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [add, setAdd] = useState('');
    const [scl, setScl] = useState('');
    const [helper, setHelper] = useState('');

    const nameRef = useRef();
    const ageRef = useRef();
    const addRef = useRef();
    const sclRef = useRef();

    const changeName = event => {
        setName(event.target.value);
    }
    const changeAdd = event => {
        setAdd(event.target.value);
    }
    const changeAge = event => {
        setAge(event.target.value);
    }
    const changeScl = event => {
        setScl(event.target.value);
    }
    const changeList = (index) => {
        const delStu = [...stu];
        delStu.splice(index, 1);
        setStu(delStu);
        console.log("delet");
    }

    const submit = () => {
        if (!nameRef.current.value || !ageRef.current.value || !addRef.current.value || !sclRef.current.value ){
            setHelper("Incorrect entry")
            return;
        }else{
            setHelper("")
        }

        const newStu = {
            id: stu.length + 1,
            dName: name,
            dAge: age,
            dAdd: add,
            dScl: scl
        };

        setStu([...stu, newStu]);
        console.log("Student added:", newStu);

        nameRef.current.value = '';
        ageRef.current.value = '';
        addRef.current.value = '';
        sclRef.current.value = '';

        console.log("Input fields cleared.");

    };

    return (
        <>
            <Box display='flex' justifyContent='center'>
                <Box border={1} borderRadius={5} className="form" sx={{ width: 250, p: 3 }} >
                    <Stack spacing={2} direction="column">
                        <TextInput labelName={'Student Name'} onChange={changeName} ref={nameRef} helper={helper} />
                        <TextInput labelName={'Age'} onChange={changeAge} ref={ageRef} helper={helper} />
                        <TextInput labelName={'Address'} onChange={changeAdd} ref={addRef} helper={helper} />
                        <TextInput labelName={'School'} onChange={changeScl} ref={sclRef} helper={helper} />
                        <Box display='flex' justifyContent='center' >
                            <Button variant="contained" onClick={submit} sx={{ width: 100 }}> Submit </Button>
                        </Box>
                    </Stack>
                </Box>
            </Box >
            <hr />
            <Box display='flex' justifyContent='space-around' flex-wrap='wrap' >
                {stu.map((val, index) => (
                    <Display key={val.id}
                        dName={val.dName}
                        dAge={val.dAge}
                        dAdd={val.dAdd}
                        dScl={val.dScl}
                        del={() => changeList(index)}
                    />
                ))}
            </Box>
        </>

    )
}

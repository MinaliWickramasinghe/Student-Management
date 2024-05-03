import { Box } from "@mui/material";
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Display({ dName, dAge, dAdd, dScl, del }) {
    return (
        <Box display='flex' justifyContent='center' >
            <Box border={1} borderRadius={5} className="form" sx={{ width: 150, p: 3 }} >
                <Stack spacing={2} direction="column">
                    <label>Name : {dName} </label>
                    <label>Age : {dAge} </label>
                    <label>Address : {dAdd} </label>
                    <label>School : {dScl} </label>
                    <Box>
                        <DeleteIcon sx={{ color: "red", ml: 15 }} onClick={del} />
                    </Box>
                </Stack>
            </Box>
        </Box >
    )
}
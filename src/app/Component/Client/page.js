"use client"

import { useState } from "react"
import AddIcon from '@mui/icons-material/Add'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';
import RemoveIcon from '@mui/icons-material/Remove';


export default function Counter(){
    const [counter, setCounter] = useState(0)

    return(
        <>
        <Box 
        sx={{
            height : "100vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Box 
            sx={{
                display : "flex",
                width: "50%",
                justifyContent: "center",
                alignItems : "center"
            }}>
                <Fab  variant="circular"  color="success" 
                sx={{
                    marginRight : "10px"
                }}
                onClick={() => setCounter(counter + 1)}>
               <AddIcon /> 
               </Fab>
               <Typography>Count Is :{counter}</Typography>
               <Fab  variant="circular" color="error" sx={{
                marginLeft: "10px"
               }}
               onClick={() => setCounter(counter - 1)}
               >
               <RemoveIcon /> 
               </Fab>
            </Box>
        </Box>
        </>
    )
}
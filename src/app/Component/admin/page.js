import React from 'react'
import {Box} from '@mui/material'

export async function dataet (){
    const data = fetch("http://localhost:3000/api/hello")
    const resposnse = await(await data).json()
    return resposnse
}
async function  page() {
    const data = dataet()
    const user =  await data
    console.log("user", user)
    


  return (
    <>
    <Box
    sx={{ display: "flex", height: "100vh", alignItems: "center"}}
    >
        
    </Box>
    </>
  )
}

export default page

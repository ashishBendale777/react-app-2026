import { Box, Typography } from '@mui/material'
import React from 'react'
import reactImg from "../assets/images/react.png"

const About = () => {
    return (
        <>
            <Box padding={4}>
                <Typography sx={{
                    textAlign: "center",
                }} variant='h4'>About Us</Typography>
                <Box sx={{
                    display: "flex"
                }}>
                    <Box
                        sx={{
                            flex: 1,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                        <Box
                            sx={{
                                height: "320px",
                                width: "320px"
                            }}
                            component="img"
                            src={reactImg}></Box>
                    </Box>
                    <Box sx={{
                        flex: 1
                    }}>
                        <Typography textAlign={"center"}
                            variant='h5'>Mission</Typography>
                        <Typography
                            textAlign={"justify"}
                            fontSize={"30px"}
                            >
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident ut laborum, aliquid pariatur asperiores officiis minus et nostrum voluptates obcaecati ratione iure sequi optio illum? Qui natus ex minus praesentium!
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default About
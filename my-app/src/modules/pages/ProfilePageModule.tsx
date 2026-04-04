import {Box, Container, Typography} from "@mui/material";
import NavBar from "@/components/Navbar/NavBar";
import ButtonStation from "@/components/Buttons/ButtonStation";


export default function ProfilePageModule(){
    return(

        <Box
            sx={{
                height: '90vh',
                width: '100%',
            }}
        >
            <NavBar/>
            <Container
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Box>

                </Box>
            </Container>
        </Box>
    )
}
import {Button, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const HomeHeader = () => {
    return(
        <Grid container justifyContent={'space-evenly'} mt={1} alignItems={'center'}>
            <Typography variant={'h3'}>
                Contact Dashboard
            </Typography>
            <Grid>
                <Link to={'/addContact'}>
                    <Button variant={'outlined'} sx={{borderRadius:2}}>
                        ADD CONTACT
                    </Button>
                </Link>
            </Grid>
        </Grid>
    )
}

export default HomeHeader
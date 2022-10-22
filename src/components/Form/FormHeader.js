import {Button, Grid} from "@mui/material";
import {Link} from "react-router-dom";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";


const FormHeader = () => {
    return(
        <>
            <Grid mb={2}>
                <Link to={'/'}>
                    <Button variant={'outlined'} sx={{borderRadius: 2}}>
                        <KeyboardBackspaceRoundedIcon sx={{mr: 0.5}}/>
                        BACK
                    </Button>
                </Link>
            </Grid>
            <Grid>
                FORM CONTACT
            </Grid>
        </>
    )
}

export default FormHeader
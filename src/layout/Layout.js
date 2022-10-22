import {Grid} from "@mui/material";
import {Outlet} from "react-router-dom";
import HeaderLayout from "./headerLayout";


const Layout = () => {
    return(
        <Grid>
            <HeaderLayout/>
            <Outlet/>
            <Grid>
                Footer
            </Grid>
        </Grid>
    )
}

export default Layout
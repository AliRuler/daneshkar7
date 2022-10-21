import {Grid} from "@mui/material";
import HomeHeader from "../components/Home/HomeHeader";
import TableContact from "../components/Home/TableContact";


const Home = () => {
    return(
        <Grid>
            <HomeHeader/>
            <TableContact/>
        </Grid>
    )
}

export default Home
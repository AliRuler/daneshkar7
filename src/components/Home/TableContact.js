import {Grid} from "@mui/material";
import {useSelector} from "react-redux";
import TableRow from "./TableRow";

const TableContact = () => {
    //useSelector for redux state
    const contacts = useSelector(state => state.contacts)
    return (
        <Grid container>
            {contacts.map( contact => <TableRow contact={contact}/>)}
        </Grid>
    )
}

export default TableContact
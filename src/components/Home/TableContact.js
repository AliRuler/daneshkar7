import {Grid} from "@mui/material";
import {useSelector} from "react-redux";
import TableRow from "./TableRow";

const TableContact = () => {
    //useSelector for redux state
    const contacts = useSelector(state => state.contacts)
    return (
        <Grid container>
            {contacts.map( contact => (
                <Grid container key={contact.id}>
                    <TableRow contact={contact}/>
                </Grid>
            ))}
        </Grid>
    )
}

export default TableContact
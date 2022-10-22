import {Button, Grid, Typography} from "@mui/material";
import rowTable from "../../data/home/rowTable";
import {useDispatch} from "react-redux";
import {deleteContact} from "../../redux/slice/contact.reducer";
import {Link} from 'react-router-dom'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';

const TableRow = ({contact}) => {
    const dispatch = useDispatch()

    const handleDelete = id => {
        dispatch(deleteContact(id))
    }

    return (
        <Grid container alignItems={'center'} flexDirection={'row'} m={2}>
            {rowTable.map(row => (
                <Grid container item alignItems={'center'} xs={1.5} p={2} key={row.id}>
                    <Grid>
                        {row.icon}
                    </Grid>
                    <Grid>
                        <Typography>
                            : {contact[row.title]}
                        </Typography>
                    </Grid>
                </Grid>
            ))}
            <Grid p={2}>
                <Button variant={'outlined'} color={'error'} onClick={() => handleDelete(contact.id)}
                        sx={{borderRadius: 2}}>
                    <DeleteRoundedIcon/>
                    DELETE
                </Button>
            </Grid>
            <Grid p={2}>
                <Button variant={'outlined'} sx={{borderRadius: 2}}>
                    <InfoRoundedIcon sx={{mr: 0.5}}/>
                    INFO
                </Button>
            </Grid>
            <Grid p={2}>
                <Link to={`/updateContact/${contact.id}`}>
                    <Button variant={'outlined'} color={'secondary'} sx={{borderRadius: 2}}>
                        <ModeEditOutlineRoundedIcon sx={{mr: 0.5}}/>
                        UPDATE
                    </Button>
                </Link>
            </Grid>
        </Grid>
    )
}

export default TableRow
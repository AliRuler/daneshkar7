import {Grid} from "@mui/material";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {SingleContactData} from "../../data/singleContact/singleContactData";


const SingleContactTable = () => {
    const contacts = useSelector(state => state.contacts)
    const {ContactId} = useParams()
    const [contact, setContact] = useState({})


    useEffect(()=>{
        setContact(contacts.filter( c => c.id === Number(ContactId))[0])
    },[])

    return (
        <Grid p={2}>
            {SingleContactData.map( sCG => (
                <Grid key={sCG.id}>
                    {sCG.name}: {contact[sCG.name]}
                </Grid>
            ))}
        </Grid>
    )
}

export default SingleContactTable
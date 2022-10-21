import {Button, Grid, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {addContact} from "../redux/slice/contact.reducer";
import {emptyInputs, formInputs} from "../data/form/form";
import {useNavigate, Link} from 'react-router-dom'

const Form = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [form,setForm] = useState(emptyInputs)

    const handleChange = e => {
        setForm({...form,[e.target.name]:e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(addContact(form))
        clearInput()
        navigate('/')
    }

    const clearInput = () => {
        setForm(emptyInputs)
    }

    useEffect(()=>{
        return () => {
            clearInput()
        }
    },[])

    return(
        <Grid p={2}>
            <Grid>
                <Link to={'/'}>
                    <Button variant={'outlined'}>
                        BACK
                    </Button>
                </Link>
            </Grid>
            <Grid>
                FORM CONTACT
            </Grid>
            <Grid my={1}>
                <form onSubmit={handleSubmit}>
                    {formInputs.map(fI => (
                        <TextField onChange={handleChange} name={fI.name} value={form[fI.name]} label={fI.name} sx={{mx:1}}/>
                    ))}
                    <Button variant={'outlined'} sx={{borderRadius:2}} type={'submit'}>
                        SUBMIT
                    </Button>
                </form>
            </Grid>
        </Grid>
    )
}

export default Form
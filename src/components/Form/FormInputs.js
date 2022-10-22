import {Button, Grid, TextField} from "@mui/material";
import {emptyInputs, formInputs} from "../../data/form/form";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {addContact, updateContact} from "../../redux/slice/contact.reducer";


const FormInputs = () => {
    const contacts = useSelector(state => state.contacts)
    const {ContactId} = useParams()
    console.log(ContactId)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [form, setForm] = useState(emptyInputs)
    const [stata, setState] = useState('add')

    const handleChange = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (stata === 'add') {
            dispatch(addContact(form))
        } else if (stata === 'update') {
            dispatch(updateContact(form))
        }
        clearInput()
        navigate('/')
    }

    const clearInput = () => {
        setForm(emptyInputs)
    }

    useEffect(() => {
        return () => {
            clearInput()
        }
    }, [])

    useEffect(() => {
        const c = contacts.filter(contact => contact.id === Number(ContactId))[0]
        if (c) {
            setForm(c)
            setState('update')
        }
    }, [])
    return(
        <Grid my={1}>
            <form onSubmit={handleSubmit} style={{display: 'flex', alignItems: 'center'}}>
                <Grid>
                    {formInputs.map(fI => (
                        <TextField key={fI.id} required onChange={handleChange} name={fI.name} value={form[fI.name]} label={fI.name}
                                   sx={{mx: 1}}/>
                    ))}
                </Grid>
                <Grid>
                    <Button variant={'outlined'} sx={{borderRadius: 2}} type={'submit'}>
                        SUBMIT
                    </Button>
                </Grid>
            </form>
        </Grid>
    )
}

export default FormInputs
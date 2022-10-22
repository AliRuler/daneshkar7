import {Grid} from "@mui/material";
import FormHeader from "../components/Form/FormHeader";
import FormInputs from "../components/Form/FormInputs";

const FormPage = () => {
    return (
        <Grid p={2}>
            <FormHeader/>
            <FormInputs/>
        </Grid>
    )
}

export default FormPage
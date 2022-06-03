import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';
import * as yup from 'yup'
import { FormattedMessage } from 'react-intl';

import { FormControl, Grid, Button, OutlinedInput, InputLabel } from '@mui/material';

// schema needs to be recreated to reflect locale message changes
const schema = () => yup.object({
    email: yup.string().email().required(),
    site:  yup.string().url().required(),
    firstName: yup.string().max(32).required(),
    age: yup.number().integer().min(18).max(120).required()
}).required();

export default function IntForm(props) {
    const { register, trigger, getValues, handleSubmit, control, formState: {errors} } = useForm({
        resolver: yupResolver(schema())
    });
    const onSubmit = data => console.log(JSON.stringify(data, null, 4));

    /* 
     * logic to trigger form update for first render after locale 
     * has changed.
     */
    const intl = useSelector(state => state.app.intl);
    const localeRef = useRef();
    if(localeRef.current && intl.locale != localeRef.current) {
        localeRef.current = intl.locale;
        trigger();
    }
    else { // mount since ref does not have value, skip validation
        localeRef.current = intl.locale;
    }

    if(errors.email) {
        console.log(JSON.stringify(Object.keys(errors.email), null, 4));
        console.log(JSON.stringify(errors.email?.type, null, 4));
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%", maxWidth: "600px", marginLeft: "200px", padding: "10px" }}>
            <Grid container rowSpacing={1} columnSpacing={1}>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="email">email</InputLabel>
                        <OutlinedInput
                            label="email"
                            {...register("email")}
                        />
                    </FormControl>
                    <p>{ errors.email?.message }</p>
                    {/* alternative error approach:
                    <p>{ errors.email && 
                            <FormattedMessage 
                                id={`form.errors.string.${errors.email?.type}`} 
                                values={{values: getValues('email'), path: "email"}}
                            /> }
                    </p>*/}
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="site">site</InputLabel>
                        <OutlinedInput
                            label="site"
                            {...register("site")}
                        />
                    </FormControl>
                    <p>{ errors.site?.message }</p>
                </Grid>

                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="firstName">first name</InputLabel>
                        <OutlinedInput
                            label="first name"
                            {...register("firstName")}
                        />
                    </FormControl>
                    <p>{ errors.firstName?.message }</p>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="age">age</InputLabel>
                        <OutlinedInput
                            label="age"
                            {...register("age")}
                        />
                    </FormControl>
                    <p>{ errors.age?.message }</p>
                </Grid>

                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <Button variant="outlined" onClick={handleSubmit(onSubmit)} fullWidth>Submit</Button>
                </Grid>
            </Grid>
        </form>
    );
}
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import { setLocale } from '../redux/reducers/app';

export default function SelectLanguage(props) {

    let intl = useSelector(state => state.app.intl);
    let dispatch = useDispatch();

    const setLanguage = (event) => {
        const locale = event.target.value;
        console.log("setting locale to " + locale);
        dispatch(setLocale(locale));
    }

    return (
        <FormControl fullWidth>
            <InputLabel id="nav-set-language-label">Language</InputLabel>
            <Select
                labelId="nav-set-language-label"
                id="nav-set-language"
                value={intl.locale}
                label="Language"
                onChange={setLanguage}
            >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="fr">French</MenuItem>
            </Select>
        </FormControl>
    );
}
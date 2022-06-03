import '../styles/components/ToggleMode.scss';
import Switch from '@mui/material/Switch'

import { useDispatch } from 'react-redux';
import { toggleMode } from '../redux/reducers/app';


/*
 * "start" point for components
 */
export default function ToggleMode() {

    //let userTheme = useSelector(state => state.app.theme);
    let dispatch = useDispatch();

    return (
        <Switch className="toggle-mode" onChange={() => dispatch(toggleMode())}></Switch>
    );
}
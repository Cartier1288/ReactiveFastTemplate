import React from 'react';

import { Box, Button } from '@mui/material'
import { useSelector } from 'react-redux';

import ToggleMode from '../components/ToggleMode'
import Counter from '../components/Counter'

export default function Home(props) {
    let userTheme = useSelector(state => state.app.theme);
    return(
        <Box>
          <Box className={`app theme-${userTheme.mode}`}>
            <Box>
              <Button color="primary">Hello, React!</Button>
              <Button color="secondary">Hello, React!</Button>
            </Box>
            <Box>
              <ToggleMode checked />
            </Box>
            <Box>
              <Counter />
            </Box>
          </Box>
        </Box>
    )
}
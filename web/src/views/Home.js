import React from 'react';

import { Box, Button } from '@mui/material'
import { useSelector } from 'react-redux';
import { FormattedMessage as $t } from 'react-intl';

import ToggleMode from '../components/ToggleMode'
import Counter from '../components/Counter'
import IntForm from '../components/IntForm'


export default function Home(props) {
    let userTheme = useSelector(state => state.app.theme);
    return(
        <Box>
          <Box className={`app theme-${userTheme.mode}`}>
            <Box>
              <Button color="primary">
                <$t
                  id="app.home.primary"
                  defaultMessage="Hello, React!"
                />
              </Button>
              <Button color="secondary">
                <$t
                  id="app.home.primary"
                  defaultMessage="Hello, React!"
                />
              </Button>
            </Box>
            <Box>
              <ToggleMode checked />
            </Box>
            <Box>
              <Counter />
            </Box>
            <Box>
              <IntForm />
            </Box>
          </Box>
        </Box>
    )
}
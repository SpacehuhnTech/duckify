import React from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const Header = (props) => {
    return (
        <AppBar position='static' color='primary'>
            <Toolbar>
                <img
                    src='logo512.png'
                    alt='Logo'
                    height='30px'
                />

                <Typography
                    variant='h6'
                    component='h1'
                    noWrap
                >
                    &nbsp;Duckify
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header
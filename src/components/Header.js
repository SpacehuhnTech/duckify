import React from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import InfoIcon from '@mui/icons-material/Info'

const Header = (props) => {
    return (
        <AppBar
            position='static'
            sx={{
                background: '#ffa733',
            }}
        >
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
                    sx={{ flexGrow: 1 }}
                >
                    &nbsp;Duckify
                </Typography>

                <Button
                    //variant='contained'
                    //color='success'
                    sx={{ color: '#fff' }}
                    href='https://docs.duckify.huhn.me'
                    startIcon={<InfoIcon />}>
                    Help
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header
import React from 'react'

import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

import LayoutSelector from './LayoutSelector.js'
import SystemSelector from './SystemSelector.js'

const Controls = (props) => {
    return (
        <Grid container spacing={1}>
            { /* System */}
            { /*
            <Grid item>
                <SystemSelector
                />
            </Grid>
             */}

            { /* Keyboard Layout */}
            <Grid item>
                <LayoutSelector
                    layoutName={props.layoutName}
                    layoutList={props.layoutList}
                    setLayoutName={props.setLayoutName}
                />
            </Grid>

            <Grid item flexGrow={1}></Grid>

            { /* Convert Button */}
            <Grid item>
                <Button
                    variant='contained'
                    color='success'
                    onClick={props.convertDigispark} >
                    Convert
                </Button>
            </Grid>
        </Grid>
    )
}

export default Controls
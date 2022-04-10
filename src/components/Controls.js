import React from 'react'

import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import LayoutSelector from './LayoutSelector.js'
import ConverterSelector from './ConverterSelector.js'
import SystemSelector from './SystemSelector.js'

const Controls = (props) => {
    return (
        <Grid container spacing={1}>
            { /* System */}
            {
                <Grid item>
                    <SystemSelector
                        systemName={props.systemName}
                        layoutList={props.layoutList}
                        setSystemName={props.setSystemName}
                    />
                </Grid>
            }

            { /* Keyboard Layout */}
            <Grid item>
                <LayoutSelector
                    layoutName={props.layoutName}
                    layoutList={props.layoutList[props.systemName]}
                    setLayoutName={props.setLayoutName}
                />
            </Grid>

            { /* System */}
            <Grid item>
                <ConverterSelector
                    converter={props.converter}
                    converterList={props.converterList}
                    setConverter={props.setConverter}
                />
            </Grid>

            { /* Script Name */}
            <Grid item>
                <TextField
                    variant='outlined'
                    size='small'
                    onChange={(e) => props.setScriptName(e.target.value)}
                    value={props.scriptName}
                    label='Script Name'
                />
            </Grid>

            {/* Free Space */}
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
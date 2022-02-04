import React from 'react'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const ConverterSelector = (props) => {
    return (
        <FormControl
            size='small'
            sx={{ minWidth: 120 }}>
            <InputLabel>Mode</InputLabel>
            <Select
                value={props.converter}
                label="Mode"
                onChange={e => props.setConverter(e.target.value)}
            >
                {
                    props.converterList.map(converter =>
                        <MenuItem key={converter.name} value={converter.name}>{converter.name}</MenuItem>
                    )
                }
            </Select>
        </FormControl>
    )
}

export default ConverterSelector
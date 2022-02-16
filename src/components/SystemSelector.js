import React from 'react'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const SystemSelector = (props) => {
    return (
        <FormControl
            size='small'>
            <InputLabel>System</InputLabel>
            <Select
                value={props.systemName}
                label="System"
                onChange={(e) => props.setSystemName(e.target.value) }
            >
                {
                    Object.keys(props.layoutList).map(variant =>
                        <MenuItem key={variant} value={variant}>{variant}</MenuItem>
                    )
                }
            </Select>
        </FormControl>
    )
}

export default SystemSelector
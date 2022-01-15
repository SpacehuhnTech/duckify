import React from 'react'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const LayoutSelector = (props) => {
    const changeLayout = (e) => {
        const newLayout = e.target.value
        props.setLayoutName(newLayout)
    }

    return (
        <FormControl
            sx={{ minWidth: 120 }}
            fullWidth
            size='small'>
            <InputLabel>Keyboard</InputLabel>
            <Select
                value={props.layoutName}
                label="Keyboard"
                onChange={changeLayout}
            >
                {
                    Object.keys(props.layoutList).sort().map(layout =>
                        <MenuItem key={layout} value={layout}>{layout.toUpperCase()}</MenuItem>
                    )
                }
            </Select>
        </FormControl>
    )
}

export default LayoutSelector
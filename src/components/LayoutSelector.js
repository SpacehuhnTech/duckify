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
            sx={{ minWidth: 135 }}
            size='small'>
            <InputLabel>Keyboard</InputLabel>
            <Select
                value={props.layoutName}
                label="Keyboard"
                onChange={changeLayout}
            >
                {
                    props.layoutList.sort((a, b) => {
                        return a.name.localeCompare(b.name)
                    }).map(layout =>
                        <MenuItem key={layout.name} value={layout.name}>{layout.flag} {layout.name.toUpperCase()}</MenuItem>
                    )
                }
            </Select>
        </FormControl>
    )
}

export default LayoutSelector
import React from 'react'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

import Flag from './Flag'

const LayoutSelector = (props) => {
    return (
        <FormControl
            sx={{ minWidth: 135 }}
            size='small'>
            <InputLabel>Keyboard</InputLabel>
            <Select
                value={props.layoutName}
                label="Keyboard"
                onChange={(e) => props.setLayoutName(e.target.value)}
            >
                {
                    props.layoutList.sort((a, b) => {
                        return a.name.localeCompare(b.name)
                    }).map(layout => {
                        const name = layout.name

                        return (
                            <MenuItem key={name} value={name}>
                                <Flag country={name} />&nbsp;{name.toUpperCase()}
                            </MenuItem>
                        )
                    }
                    )
                }
            </Select>
        </FormControl>
    )
}

export default LayoutSelector
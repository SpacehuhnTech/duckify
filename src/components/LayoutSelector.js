import React from 'react'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

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
                        const country = layout.country

                        return (
                            <MenuItem key={name} value={name}>
                                <img
                                    src={`/flags/${country}.svg`}
                                    alt={country}
                                    key={country}
                                    style={{
                                        width: '1em',
                                        paddingBottom: '1px',
                                    }}
                                />
                                &nbsp;{name.toUpperCase()}
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
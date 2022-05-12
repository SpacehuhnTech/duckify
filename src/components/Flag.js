import React from 'react'

import Flags from 'country-flag-icons/react/3x2'
import { hasFlag } from 'country-flag-icons'

const Flag = (props) => {
    const code = props.country.substring(0,2).toUpperCase()
    const Flag = hasFlag(code) ? Flags[code] : Flags['US']

    return (
        <Flag style={{
            width: '1em',
            paddingBottom: '1px',
        }}/>
    )
}

export default Flag
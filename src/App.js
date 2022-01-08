import React from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import version from './version.js'
import digisparkConverter from './modules/digispark.js'

import locale_de from './layouts/de.json'

const cleanLayout = (keys) => {
  /*const newKeyList = []

  keys.forEach(key => {
    if (key.char !== key.us || key.alt || key.altGr || key.shift || key.combo !== '') {
      newKeyList.push(key)
    }
  })

  return newKeyList*/
  return keys
}

const App = () => {
  const [input, setInput] = React.useState('')
  const [output, setOutput] = React.useState('')

  const layout = cleanLayout(locale_de.keys)

  const convert_digispark = () => {
    setOutput(digisparkConverter(input, layout, version))
  }

  const handle_new_input = (event) => {
    setInput(event.target.value)
  }

  return (
    <Box>
      <TextField
        multiline
        fullWidth
        onChange={handle_new_input}
        minRows={4}
      />

      <Button variant='contained' onClick={convert_digispark}>
        Convert
      </Button>

      <TextField
        multiline
        fullWidth
        value={output}
      />

      { /* Version */}
      <Typography
        variant='caption'
        align='center'
        display='block'
        sx={{ color: '#ddd' }}>
        {version.name}
      </Typography>
    </Box>
  )
}

export default App

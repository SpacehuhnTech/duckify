import React from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import version from './version.js'
import digisparkConverter from './modules/digispark.js'

const App = () => {
  const [input, setInput] = React.useState('')
  const [output, setOutput] = React.useState('')

  const convert_digispark = () => {
    setOutput(digisparkConverter(input))
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

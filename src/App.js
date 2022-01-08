import React from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

import version from './version.js'
import digisparkConverter from './modules/digispark.js'

import locale_us from './layouts/us.json'
import locale_de from './layouts/de.json'
import locale_ro from './layouts/ro.json'

const App = () => {
  const [input, setInput] = React.useState('')
  const [output, setOutput] = React.useState('')
  const [layoutStr, setLayoutStr] = React.useState('de')

  const convert_digispark = () => {
    let layout = []
    if(layoutStr === 'us')  layout = locale_us.keys
    if(layoutStr === 'de') layout = locale_de.keys
    if(layoutStr === 'ro') layout = locale_ro.keys

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

      <FormControl sx={{minWidth: 120}}>
        <InputLabel>Layout</InputLabel>
        <Select
          value={layoutStr}
          label="Layout"
          onChange={e => setLayoutStr(e.target.value)}
        >
          <MenuItem value={'us'}>US</MenuItem>
          <MenuItem value={'de'}>DE</MenuItem>
          <MenuItem value={'ro'}>RO</MenuItem>
        </Select>
      </FormControl>

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

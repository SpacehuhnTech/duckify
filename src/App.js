import React from 'react'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
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

import Header from './Header.js'

const App = () => {
  const [input, setInput] = React.useState('')
  const [output, setOutput] = React.useState('')
  const [layoutStr, setLayoutStr] = React.useState('de')

  const convert_digispark = () => {
    let layout = []
    if (layoutStr === 'us') layout = locale_us.keys
    if (layoutStr === 'de') layout = locale_de.keys
    if (layoutStr === 'ro') layout = locale_ro.keys

    setOutput(digisparkConverter(input, layout, version))
  }

  const handle_new_input = (event) => {
    setInput(event.target.value)
  }

  return (
    <Box>
      { /* ===== Header / Navbar ===== */}
      <Header />

      { /* ===== Body (Split View) ===== */}
      <Grid container spacing={1} sx={{ p: 2 }}>

        { /* ===== Controls ===== */}
        <Grid item xs={12}>
          <Grid container spacing={1}>

            { /* Layout */}
            <Grid item>
              <FormControl sx={{ minWidth: 120 }} fullWidth>
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
            </Grid>

            { /* Convert Button */}
            <Grid item>
              <Button variant='contained' color='success' size='large' onClick={convert_digispark} sx={{mt: '.4em'}}>
                Convert
              </Button>
            </Grid>
          </Grid>
        </Grid>

        { /* ===== Input ===== */}
        <Grid item xs={6}>
          <Typography
            variant='overline'
            component='h2'
            align='center'
          >
            Input (Ducky Script)
          </Typography>
          <TextField
            multiline
            fullWidth
            onChange={handle_new_input}
            minRows={4}
          />
        </Grid>

        { /* ===== Output ===== */}
        <Grid item xs={6}>
          <Typography
            variant='overline'
            component='h2'
            align='center'
          >
            Output (Digispark Sketch)
          </Typography>
          <TextField
            multiline
            fullWidth
            value={output}
            minRows={4}
          />
        </Grid>

      </Grid>

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

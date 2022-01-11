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
import Snackbar from '@mui/material/Snackbar'

import version from './version.js'
import digisparkConverter from './modules/digispark.js'
import downloadFile from './modules/downloadHelper.js'

import layoutList from './layouts/layoutList.js'

import Header from './Header.js'

const App = () => {
  const [input, setInput] = React.useState('')
  const [output, setOutput] = React.useState('')

  const [layoutStr, setLayoutStr] = React.useState((navigator.language in layoutList) ? navigator.language : 'us')

  // Snackbar notification
  const [open, setOpen] = React.useState(false)
  const [message, setMessage] = React.useState('Copied to clipboard')

  const convert_digispark = () => {
    let layout = layoutList[layoutStr].keys

    setOutput(digisparkConverter(input, layout, version))
  }

  const handle_new_input = (event) => {
    setInput(event.target.value)
  }

  const copyDuck = () => {
    navigator.clipboard.writeText(input)
    setMessage('Copied to clipboard')
    setOpen(true)
  }

  const downloadDuck = () => {
    const date = new Date()
    const dateStr = date.toISOString().substring(0, 10)

    let script = input

    // Force a linebreak at the end
    if (!input.endsWith('\n')) {
      script += '\n'
      setInput(script)
    }

    downloadFile({
      data: script,
      fileName: `DuckifyScript-${dateStr}.txt`,
      fileType: 'text/plain',
    })
  }

  const copyDigi = () => {
    navigator.clipboard.writeText(output)
    setMessage('Copied to clipboard')
    setOpen(true)
  }

  const downloadDigi = () => {
    const date = new Date()
    const dateStr = date.toISOString().substring(0, 10)

    downloadFile({
      data: output,
      fileName: `DuckifySketch-${dateStr}.ino`,
      fileType: 'text/plain',
    })
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
              <FormControl
                sx={{ minWidth: 120 }}
                fullWidth
                size='small'>
                <InputLabel>Layout</InputLabel>
                <Select
                  value={layoutStr}
                  label="Layout"
                  onChange={e => setLayoutStr(e.target.value)}
                >
                  {
                    Object.keys(layoutList).map(layout =>
                      <MenuItem key={layout} value={layout}>{layout.toUpperCase()}</MenuItem>
                    )
                  }
                </Select>
              </FormControl>
            </Grid>

            { /* Convert Button */}
            <Grid item>
              <Button variant='contained' color='success' onClick={convert_digispark} >
                Convert
              </Button>
            </Grid>
          </Grid>
        </Grid>

        { /* ===== Input ===== */}
        <Grid item xs={12} sm={6}>
          <Typography
            variant='overline'
            component='h2'
            align='center'
            sx={{
              marginBottom: '-2.5em',
              color: '#aaa',
            }}
          >Input (BadUSB Script)</Typography>

          <TextField
            multiline
            fullWidth
            onChange={handle_new_input}
            minRows={12}
            maxRows={12}
          />

          <Button
            variant='text'
            onClick={copyDuck}>
            Copy
          </Button>

          <Button
            variant='text'
            onClick={downloadDuck}>
            Download
          </Button>

        </Grid>

        { /* ===== Output ===== */}
        <Grid item xs={12} sm={6}>
          <Typography
            variant='overline'
            component='h2'
            align='center'
            sx={{
              marginBottom: '-2.5em',
              color: '#aaa',
            }}
          >Output (Digispark Sketch)</Typography>

          <TextField
            multiline
            fullWidth
            value={output}
            minRows={12}
            maxRows={12}
            readOnly
          />

          <Button
            variant='text'
            onClick={copyDigi}>
            Copy
          </Button>

          <Button
            variant='text'
            onClick={downloadDigi}>
            Download
          </Button>
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

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message={message}
      />
    </Box>
  )
}

export default App

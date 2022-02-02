import React from 'react'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Snackbar from '@mui/material/Snackbar'
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton'
import DownloadIcon from '@mui/icons-material/Download'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

import version from './version.js'
import convertToDigispark from './modules/digispark.js'
import downloadFile from './modules/downloadHelper.js'
import layoutList from './layouts/layoutList.js'
import { setCookie, getCookie } from './modules/cookie.js'

import Header from './Header.js'
import LayoutSelector from './LayoutSelector.js'

const loadLayout = () => {
  let layout = 'us'
  const cookieValue = getCookie('layout')

  if (cookieValue !== '' && cookieValue in layoutList) {
    layout = cookieValue
  } else if (navigator.language in layoutList) {
    layout = navigator.language
  }

  setCookie('layout', layout, 365)
  return layout
}

const App = () => {
  const [layoutName, setLayoutName] = React.useState(loadLayout())

  const [input, setInput] = React.useState('')
  const [output, setOutput] = React.useState('')

  // Snackbar notification
  const [open, setOpen] = React.useState(false)
  const [message, setMessage] = React.useState('Copied to clipboard')

  const changeLayout = (newLayout) => {
    setCookie('layout', newLayout)
    setLayoutName(newLayout)
  }

  const getLayout = () => {
    return layoutList[layoutName].keys
  }

  const convertDigispark = () => {
    setOutput(convertToDigispark(input, layoutName, getLayout(), version))
  }

  const handleNewInput = (event) => {
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

            { /* Keyboard Layout */}
            <Grid item>
              <LayoutSelector
                layoutName={layoutName}
                layoutList={layoutList}
                setLayoutName={changeLayout}
              />
            </Grid>

            { /* Convert Button */}
            <Grid item>
              <Button variant='contained' color='success' onClick={convertDigispark} >
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
            }}>
            Input (BadUSB Script)
          </Typography>

          <TextField
            multiline
            fullWidth
            onChange={handleNewInput}
            minRows={14}
            maxRows={14}
            InputProps={{
              style: {
                paddingTop: 20,
                paddingRight: 1,
                paddingBottom: 1,
              }
            }}
          />
          <Grid
            container
            direction='row'
            justifyContent='flex-end'
            alignItems='flex-start'
            sx={{ mt: -5 }}>
            <Grid item>
              <IconButton
                onClick={copyDuck}
                aria-label='copy'>
                <ContentCopyIcon />
              </IconButton>
            </Grid>

            <Grid item>
              <IconButton
                onClick={downloadDuck}
                aria-label='download'>
                <DownloadIcon />
              </IconButton>
            </Grid>
          </Grid>
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
            minRows={14}
            maxRows={14}
            readOnly
            InputProps={{
              style: {
                paddingTop: 20,
                paddingRight: 1,
                paddingBottom: 1,
              }
            }}
          />
          <Grid
            container
            direction='row'
            justifyContent='flex-end'
            alignItems='flex-start'
            sx={{ mt: -5 }}>
            <Grid item>
              <IconButton
                onClick={copyDigi}
                aria-label='copy'>
                <ContentCopyIcon />
              </IconButton>
            </Grid>

            <Grid item>
              <IconButton
                onClick={downloadDigi}
                aria-label='download'>
                <DownloadIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>

      </Grid>

      { /* Made in Germany :D */}
      <Typography
        align='center'
        display='block'>
        Made with ❤️ by <Link href='https://spacehuhn.com' target='_blank' underline='hover' color='inherit'>Spacehuhn</Link>
      </Typography>

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

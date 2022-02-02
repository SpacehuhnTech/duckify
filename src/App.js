import React from 'react'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Snackbar from '@mui/material/Snackbar'
import Link from '@mui/material/Link'

import version from './version.js'
import convertToDigispark from './modules/digispark.js'
import downloadFile from './modules/downloadHelper.js'
import layoutList from './library/layoutList.js'
import { setCookie, getCookie } from './modules/cookie.js'

import Header from './Header.js'
import Controls from './Controls.js'
import TextArea from './TextArea.js'

const loadLayout = () => {
  let layoutName = 'us'
  const cookieValue = getCookie('layoutName')

  if (cookieValue !== '' && layoutList.some(e => e.name === cookieValue)) {
    layoutName = cookieValue
  } else if (layoutList.some(e => e.name === navigator.language)) {
    layoutName = navigator.language
  }

  setCookie('layoutName', layoutName, 365)
  return layoutName
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
    return layoutList.find(e => e.name === layoutName).json.keys
  }

  const convertDigispark = () => {
    setOutput(convertToDigispark(input, layoutName, getLayout(), version))
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

        { /* ===== Input ===== */}
        <Grid item xs={12} sm={6}>
          <TextArea
            title='Input (BadUSB Script)'
            onCopy={copyDuck}
            onDownload={downloadDuck}
            value={input}
            setValue={setInput}
          />
        </Grid>

        { /* ===== Output ===== */}
        <Grid item xs={12} sm={6}>
          <TextArea
            title='Output (Digispark Sketch)'
            onCopy={copyDigi}
            onDownload={downloadDigi}
            value={output}
            setValue={setOutput}
          />
        </Grid>

        { /* ===== Controls ===== */}
        <Grid item xs={12}>
          <Controls
            layoutName={layoutName}
            layoutList={layoutList}
            setLayoutName={changeLayout}
            convertDigispark={convertDigispark}
          />
        </Grid>

        { /* Made in Germany :D */}
        <Box sx={{ mx: 'auto', mt: 5 }}>
          <Typography
            align='center'
            display='block'>
            Made with ❤️ by <Link href='https://spacehuhn.com' target='_blank' underline='hover' color='inherit'>Spacehuhn</Link>
          </Typography>
        </Box>
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

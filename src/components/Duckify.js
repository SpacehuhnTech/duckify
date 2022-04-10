import React from 'react'

import { useColorMode } from '@docusaurus/theme-common'

import Grid from '@mui/material/Grid'
import Snackbar from '@mui/material/Snackbar'
import Link from '@mui/material/Link'
import Alert from '@mui/material/Alert'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import version from '../version.js'
import downloadFile from '../modules/downloadHelper.js'
import layoutList from '../library/layoutList.js'
import { setCookie, getCookie } from '../modules/cookie.js'
import converterList from '../converter/converterList.js'

import Controls from './Controls.js'
import TextArea from './TextArea.js'

const loadSystem = () => {
  let systemName = 'win'
  const cookieValue = getCookie('systemName')

  if (cookieValue !== '' && Object.keys(layoutList).some(e => e === cookieValue)) {
    systemName = cookieValue
  }

  setCookie('systemName', systemName, 365)
  return systemName
}

const loadLayout = (systemName) => {
  let layoutName = 'us'
  const cookieValue = getCookie('layoutName')

  if (cookieValue !== '' && layoutList[systemName].some(e => e.name === cookieValue)) {
    layoutName = cookieValue
  } else if (layoutList[systemName].some(e => e.name === navigator.language)) {
    layoutName = navigator.language
  }

  setCookie('layoutName', layoutName, 365)
  return layoutName
}

const loadScriptName = () => {
  const date = new Date()
  const dateStr = date.toISOString().substring(0, 10)

  let scriptName = `DuckifyScript-${dateStr}`

  const cookieValue = getCookie('scriptName')

  if (cookieValue !== '') {
    scriptName = cookieValue
  }

  setCookie('scriptName', scriptName, 365)
  return scriptName
}

const loadConverter = () => {
  let converterName = 'Digispark'
  const cookieValue = getCookie('converterName')

  if (cookieValue !== '' && converterList.some(e => e.name === cookieValue)) {
    converterName = cookieValue
  }

  setCookie('converterName', converterName, 365)
  return converterName
}

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Duckify = () => {
  const { colorMode, setColorMode } = useColorMode()

  const [systemName, setSystemName] = React.useState(loadSystem)
  const [layoutName, setLayoutName] = React.useState(loadLayout(systemName))
  const [scriptName, setScriptName] = React.useState(loadScriptName())

  const [converterName, setConverterName] = React.useState(loadConverter())

  const [input, setInput] = React.useState('')
  const [output, setOutput] = React.useState('')

  const [notification, setNotification] = React.useState({ mode: 'none', message: '' })

  // Snackbar notification
  const [open, setOpen] = React.useState(false)
  const [message, setMessage] = React.useState('Copied to clipboard')

  const changeLayout = (newLayout) => {
    setCookie('layoutName', newLayout)
    setLayoutName(newLayout)
  }

  const getLayout = () => {
    return layoutList[systemName].find(e => e.name === layoutName).json.keys
  }

  const convertDigispark = () => {
    const converter = converterList.find(e => e.name === converterName)
    const output = converter.run(input, layoutName, getLayout(), version)

    setOutput(output)

    if (output.includes('#error')) {
      setNotification({ mode: 'error', message: 'Output contains errors (look for #error)' })
    } else {
      setNotification({ mode: 'success', message: 'Script converted successfully! 🎉' })
    }
  }

  const copyDuck = () => {
    navigator.clipboard.writeText(input)
    setMessage('Copied to clipboard')
    setOpen(true)
  }

  const downloadDuck = () => {
    let script = input

    // Force a linebreak at the end
    if (!input.endsWith('\n')) {
      script += '\n'
      setInput(script)
    }

    downloadFile({
      data: script,
      fileName: `${scriptName}.txt`,
      fileType: 'text/plain',
    })
  }

  const copyDigi = () => {
    navigator.clipboard.writeText(output)
    setMessage('Copied to clipboard')
    setOpen(true)
  }

  const downloadDigi = () => {
    downloadFile({
      data: output,
      fileName: `${scriptName}.ino`,
      fileType: 'text/plain',
    })
  }

  return (
    <ThemeProvider theme={colorMode === 'light' ? lightTheme : darkTheme}>
      { /* ===== Body (Split View) ===== */}
      <Grid container spacing={1} sx={{ px: 2 }}>

        { /* ===== Notification ===== */}
        <Grid item xs={12}>
          {notification.mode !== 'none' &&
            <Alert
              severity={notification.mode}
              onClose={() => setNotification({ mode: 'none', message: '' })}
            >
              {notification.message}
              {notification.mode === 'success' &&
                <span>
                  &nbsp;Support this project via&nbsp;
                  <Link href='https://ko-fi.com/spacehuhn' target='_blank' underline='hover' color='inherit'>ko-fi.com/spacehuhn</Link>
                </span>
              }
            </Alert>
          }
        </Grid>

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
            title='Output (Arduino IDE Sketch)'
            onCopy={copyDigi}
            onDownload={downloadDigi}
            value={output}
            setValue={setOutput}
          />
        </Grid>

        { /* ===== Controls ===== */}
        <Grid item xs={12}>
          <Controls
            systemName={systemName}
            setSystemName={(name) => {
              setSystemName(name)
              setCookie('systemName', name, 365)
            }}
            layoutName={layoutName}
            layoutList={layoutList}
            setLayoutName={changeLayout}
            convertDigispark={convertDigispark}
            scriptName={scriptName}
            setScriptName={(name) => {
              setScriptName(name)
              setCookie('scriptName', name, 365)
            }}
            converter={converterName}
            converterList={converterList}
            setConverter={(name) => {
              setConverterName(name)
              setCookie('converterName', name, 365)
            }}
          />
        </Grid>
      </Grid>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message={message}
      />
    </ThemeProvider>
  )
}

export default Duckify

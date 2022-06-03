import React, { useEffect, useState } from 'react'

import { useColorMode } from '@docusaurus/theme-common'

import Grid from '@mui/material/Grid'
import Snackbar from '@mui/material/Snackbar'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import version from '../version'
import downloadFile from '../modules/downloadHelper'
import layoutList from '../library/layoutList'
import { setCookie, getCookie } from '../modules/cookie'
import converterList from '../converter/converterList'
import getLanguage from '../modules/location'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Controls from './Controls'
import TextArea from './TextArea'

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
  } else if (layoutList[systemName].some(e => e.name === getLanguage())) {
    layoutName = getLanguage()
  }

  setCookie('layoutName', layoutName, 365)
  return layoutName
}

const loadScriptName = () => {
  const date = new Date()
  const dateStr = date.toISOString().substring(0, 10)

  let scriptName = `Duckify-${dateStr}`

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
  const colorMode = useColorMode()
  const [theme, setTheme] = useState(lightTheme)

  useEffect(() => {
    setTheme(colorMode.colorMode === 'light' ? lightTheme : darkTheme)
  }, [colorMode])

  const [systemName, setSystemName] = useState('win')
  const [layoutName, setLayoutName] = useState('us')
  const [scriptName, setScriptName] = useState('')

  // Load saved settings
  useEffect(() => {
    const system = loadSystem()
    const layout = loadLayout(system)
    const script = loadScriptName()

    setSystemName(system)
    setLayoutName(layout)
    setScriptName(script)
  }, [])

  const [converterName, setConverterName] = useState(loadConverter())

  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  // Snackbar notification
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('Copied to clipboard')

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
      toast.error('Output contains errors (look for #error)', {
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: 'convert_error',
        theme: (theme === lightTheme) ? 'light' : 'dark',
      })
    } else {
      toast.success('Script converted successfully! 🎉', {
        position: "top-center",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: 'convert_success',
        theme: (theme === lightTheme) ? 'light' : 'dark',
      })
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
    <ThemeProvider theme={theme}>
      { /* ===== Body (Split View) ===== */}
      <Grid container spacing={1} sx={{ px: 2, py: 1 }}>

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

      <ToastContainer
        limit={3}
      />
    </ThemeProvider>
  )
}

export default Duckify

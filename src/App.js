import * as React from 'react'
//import ReactDOM from 'react-dom'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

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
    <div>
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
    </div>
  )
}

export default App

import convertToDigispark from './digispark.js'
import convertToArduino from './arduino.js'

const converterList = [
    {
        name: 'Digispark',
        run: convertToDigispark,
    },
    {
        name: 'Arduino',
        run: convertToArduino,
    },
]

export default converterList
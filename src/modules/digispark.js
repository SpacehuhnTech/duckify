/*
const translate = (char, layout) => {
    const key = layout.find(k => k.char === char)

    if (key) char = key.us

    if (!(char in digisparkTable)) {
        return 'UNDEFINED_KEY'
    }

    if (key) {
        let mods = []
        if (key.shift) mods.push('MOD_SHIFT_LEFT')
        if (key.alt) mods.push('MOD_ALT_LEFT')
        if (key.altGr) mods.push('MOD_ALT_RIGHT')

        if (mods.length > 0) {
            console.log(mods)
            return `${mods.join('|')},${digisparkTable[char]}`
        }
    }

    return digisparkTable[char]
}

const translateString = (str, layout) => {
    let newStr = ''

    for (const char of str) {
        const key = layout.find(k => k.char === char)

        if (key) {
            if (key.combo !== '') {
                if (key.comboShift) newStr += key.combo.toUpperCase()
                else newStr += key.combo
            }

            if (key.shift) {
                newStr += key.us.toUpperCase()
            } else {
                newStr += key.us
            }
        } else {
            newStr += char
        }
    }

    return newStr
}
*/

const modMap = {
    'LCTRL': 0x01,
    'LSHIFT': 0x02,
    'LALT': 0x04,
    'LMETA': 0x08,
    'RCTRL': 0x10,
    'RSHIFT': 0x20,
    'RALT': 0x40,
    'RMETA': 0x80,
}

const keyMap = {
    'a': 0x04,
    'b': 0x05,
    'c': 0x06,
    'd': 0x07,
    'e': 0x08,
    'f': 0x09,
    'g': 0x0a,
    'h': 0x0b,
    'i': 0x0c,
    'j': 0x0d,
    'k': 0x0e,
    'l': 0x0f,
    'm': 0x10,
    'n': 0x11,
    'o': 0x12,
    'p': 0x13,
    'q': 0x14,
    'r': 0x15,
    's': 0x16,
    't': 0x17,
    'u': 0x18,
    'v': 0x19,
    'w': 0x1a,
    'x': 0x1b,
    'y': 0x1c,
    'z': 0x1d,
    ' ': 0x2c,
    '-': 0x2d,
    '=': 0x2e,
    '[': 0x2f,
    ']': 0x30,
    '\\': 0x31,
    '#': 0x32,
    ';': 0x33,
    '\'': 0x34,
    '`': 0x35,
    ',': 0x36,
    '.': 0x37,
    '/': 0x38,
}

const getKeyValue = (key, char) => {
    if (key) {
        return keyMap[key.us] | 0x00
    } else {
        return keyMap[char] | 0x00
    }
}

const getModValue = (key) => {
    let value = 0x00

    if(key.shift) value |= modMap['LSHIFT']
    if(key.alt) value |= modMap['LALT']
    if(key.altGr) value |= modMap['RALT']

    return value
}

const byteToStr = (value) => {
    return `0x${(value < 0x10 ? '0' : '')}${value.toString(16)}`
}

const digisparkConverter = (scriptInput, layout) => {
    let output = `// [ ===== Converted using duckify.huhn.me ===== ] //

#include "DigiKeyboard.h"

void type(const uint8_t* keys, size_t len){  
    for(size_t i=0; i<len; i+=2) {
        DigiKeyboard.sendKeyStroke(pgm_read_byte_near(keys + i+1),pgm_read_byte_near(keys + i));
    }
}

`
    const arr_name = `key_arr_${0}`

    output += `const uint8_t ${arr_name}[] PROGMEM = {`

    for (const char of scriptInput) {
        const key = layout.find(key => key.char === char)
        const value = getKeyValue(key, char)
        let modValue = key ? getModValue(key) : 0x00

        output += `${byteToStr(modValue)},${byteToStr(value)}, `
    }

    output = `${output.slice(0, -2)}};\n`

    output += '\n'
    output += 'void setup() {\n'
    output += '\tDigiKeyboard.sendKeyStroke(0);\n'
    output += `\ttype(${arr_name}, sizeof(${arr_name}));\n`
    output += '}\n\n'
    output += 'void loop() {}\n'

    return output
    /*
    let output = ''

    output += '// [ ===== Converted using duck.spacehuhn.com ===== ] //\n\n'
    output += '#include "DigiKeyboard.h"\n\n'
    output += 'void setup() {\n'
    output += '\tDigiKeyboard.sendKeyStroke(0);\n'

    // Convert the Ducky Script lines to a list and strip whitespaces:
    const script_arr = script_input.split(/\r\n|\r|\n/g)
    // Ducky Statements fall into one of the following 6 categories:
    // Default Delay, Comment, Delay, String, Repeat, Command

    // Check if there is a default delay:
    let default_delay = 0
    if (script_arr[0].slice(0, 7) === 'DEFAULT') {
        default_delay = parseInt(script_arr[0].slice(7))
        script_arr.shift()
    }

    // Variables:
    let prev_line = ''
    let keys = []

    // Process each line from the ducky script:
    for (let line = 0; line < script_arr.length; line++) {

        // Check if the statement is a comment, delay, string, repeat or key combination
        if (script_arr[line].slice(0, 3) === 'REM') {
            prev_line = script_arr[line].replace('REM', '\t//')
        } else if (script_arr[line].slice(0, 5) === 'DELAY') {
            prev_line = '\tDigiKeyboard.delay(' + parseInt(script_arr[line].slice(6)) + ');'
        } else if (script_arr[line].slice(0, 6) === 'STRING') {
            const str = script_arr[line].slice(7)

            const mod_arr = (key) => {
                const arr = []

                if (key.shift) arr.push(digisparkTable['SHIFT'])
                if (key.alt) arr.push(digisparkTable['ALT'])
                if (key.altGr) arr.push(digisparkTable['ALTGR'])

                if (arr.length === 0) arr.push(digisparkTable['NONE'])

                return arr
            }

            const combo_arr = (key) => {
                const arr = []

                if(key.comboShift) arr.push(digisparkTable['SHIFT'])
                else arr.push(digisparkTable['NONE'])

                arr.push(digisparkTable[key.combo])

                return arr
            }

            const key_arr = (str) => {
                const arr = []

                for (const char of str) {
                    const key = layout.find(k => k.char === char)

                    if(!key){
                        console.log(`Couldn find key for: '${char}'`)
                        arr.push(digisparkTable['NONE'])
                        arr.push(digisparkTable[char])
                        continue
                    }

                    if (key.combo !== '') {
                        combo_arr(key).forEach(k => arr.push(k))
                    }
                    
                    arr.push(mod_arr(key).join('|'))
                    arr.push(digisparkTable[key.us])
                }

                return arr
            }

            const arr_name = `key_arr_${line}`
            const arr_value = key_arr(str).join(', ')

            prev_line = `\tconst uint8_t ${arr_name}[] PROGMEM = {${arr_value}};\n`
            prev_line += `\ttype(${arr_name});\n`

        } else if (script_arr[line].slice(0, 6) === 'REPEAT') {
            let repetitions = parseInt(script_arr[line].slice(7)) - 1
            for (let i = 0; i < repetitions; i++) {
                output += prev_line
                output += '\n'

                // Write Default Delay between the commands if it exists:
                if (default_delay !== 0) {
                    output += '\tDigiKeyboard.delay(' + default_delay + ');\n'
                }
            }
        } else {
            // Write beginning of command:
            prev_line = '\tDigiKeyboard.sendKeyStroke('
            // Split statement into keys
            keys = script_arr[line].split(' ')
            // Go through the keys matching them through the dictionary to Digispark keys
            for (let j = 0; j < keys.length; j++) {
                if (j > 0) prev_line += ' '

                //prev_line += translate(keys[j], layout)
                prev_line += 'TODO'

                prev_line += ','
            }
            // Remove last comma and add a parenthesis
            prev_line = prev_line.slice(0, prev_line.length - 1) + ');'
        }

        // Write command to output file and add a new line \n :
        output += prev_line
        output += '\n'

        // Write Default Delay if it exists:
        if (default_delay !== 0) {
            output += '\tDigiKeyboard.delay(' + default_delay + ');\n'
        }
    }
    output += '}\n\n'
    output += 'void loop() {}\n'

    return output
    */
}

export default digisparkConverter
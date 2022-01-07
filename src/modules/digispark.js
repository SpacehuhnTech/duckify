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

    if (key.shift) value |= modMap['LSHIFT']
    if (key.alt) value |= modMap['LALT']
    if (key.altGr) value |= modMap['RALT']

    return value
}

const byteToStr = (value) => {
    //return `0x${(value < 0x10 ? '0' : '')}${value.toString(16)}`
    return `${value.toString()}`
}

const convertString = (str, layout) => {
    let output = '{'

    for (const char of str) {
        const key = layout.find(key => key.char === char)
        const value = getKeyValue(key, char)
        let modValue = key ? getModValue(key) : 0x00

        output += `${byteToStr(modValue)},${byteToStr(value)}, `
    }

    output = `${output.slice(0, -2)}}`

    return {
        type: 'string',
        comment: str.length > 42 ? `${str.substring(0, 42)}...` : str,
        value: output,
    }
}

const digisparkConverter = (scriptInput, layout) => {
    const lines = scriptInput.split(/\r?\n/)
    const arrays = []
    let output = ''

    // Prase each line
    lines.forEach(line => {
        if (line.startsWith('STRING')) {
            arrays.push(convertString(line.substring(7), layout))
        } else if (line.startsWith('REM')) {
            arrays.push({ type: 'comment', comment: line.substring(4), value: '' })
        } else {
            console.warn(`Line '${line.substring(0, 24)}' couldn't be parsed`)
        }
    })

    // Digispark sketch prefix
    output += `// [ ===== Converted using duckify.huhn.me ===== ] //

#include "DigiKeyboard.h"

void type(const uint8_t* keys, size_t len){  
    for(size_t i=0; i<len; i+=2) {
        DigiKeyboard.sendKeyStroke(pgm_read_byte_near(keys + i+1),pgm_read_byte_near(keys + i));
    }
}\n\n`

    // PROGMEM arrays for strings
    arrays.forEach((array, i) => {
        if (array.type === 'string') {
            output += `// ${array.comment}\n`
            output += `const uint8_t key_arr_${i}[] PROGMEM = ${array.value};\n`
        }
    })

    // Digispark sketch setup
    output += `
void setup() {
    DigiKeyboard.sendKeyStroke(0);
\n`

    // Each line
    arrays.forEach((array, i) => {
        if (array.type === 'string') {
            output += `    type(key_arr_${i}, sizeof(key_arr_${i})); // ${array.comment}\n`
        } else if(array.type === 'comment') {
            output += `    // ${array.comment}\n`
        }
    })

    // Digispark sketch suffix
    output += `}\n\nvoid loop() {}\n`

    return output
}

export default digisparkConverter
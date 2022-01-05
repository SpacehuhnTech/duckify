// This converter is inspired by and based upon https://github.com/CedArctic/digiQuack
// digiQuack is licensed under MIT - Copyright (c) 2017 CedArctic
// Give CedArctic a follow :)

const digisparkTable = {
    'WINDOWS': '0, MOD_GUI_LEFT',
    'GUI': '0, MOD_GUI_LEFT',
    'APP': '101',
    'MENU': '101',
    'SHIFT': 'MOD_SHIFT_LEFT',
    'ALT': 'MOD_ALT_LEFT',
    'CONTROL': 'MOD_CONTROL_LEFT',
    'CTRL': 'MOD_CONTROL_LEFT',
    'DOWNARROW': '81',
    'DOWN': '81',
    'LEFTARROW': '80',
    'LEFT': '80',
    'RIGHTARROW': '79',
    'RIGHT': '79',
    'UPARROW': '82',
    'UP': '82',
    'BREAK': '72',
    'PAUSE': '72',
    'CAPSLOCK': '57',
    'DELETE': '42',
    'END': '42',
    'ESC': '41',
    'ESCAPE': '41',
    'HOME': '74',
    'NUMLOCK': '83',
    'PAGEUP': '75',
    'PAGEDOWN': '78',
    'PRINTSCREEN': '70',
    'SCROLLLOCK': '71',
    'SPACE': '44',
    'TAB': '43',
    'ENTER': 'KEY_ENTER',
    'F1': 'KEY_F1',
    'F2': 'KEY_F2',
    'F3': 'KEY_F3',
    'F4': 'KEY_F4',
    'F5': 'KEY_F5',
    'F6': 'KEY_F6',
    'F7': 'KEY_F7',
    'F8': 'KEY_F8',
    'F9': 'KEY_F9',
    'F10': 'KEY_F10',
    'F11': 'KEY_F11',
    'F12': 'KEY_F12',
    'a': 'KEY_A',
    'b': 'KEY_B',
    'c': 'KEY_C',
    'd': 'KEY_D',
    'e': 'KEY_E',
    'f': 'KEY_F',
    'g': 'KEY_G',
    'h': 'KEY_H',
    'i': 'KEY_I',
    'j': 'KEY_J',
    'k': 'KEY_K',
    'l': 'KEY_L',
    'm': 'KEY_M',
    'n': 'KEY_N',
    'o': 'KEY_O',
    'p': 'KEY_P',
    'q': 'KEY_Q',
    'r': 'KEY_R',
    's': 'KEY_S',
    't': 'KEY_T',
    'u': 'KEY_U',
    'v': 'KEY_V',
    'w': 'KEY_W',
    'x': 'KEY_X',
    'y': 'KEY_Y',
    'z': 'KEY_Z',
    'A': 'KEY_A',
    'B': 'KEY_B',
    'C': 'KEY_C',
    'D': 'KEY_D',
    'E': 'KEY_E',
    'F': 'KEY_F',
    'G': 'KEY_G',
    'H': 'KEY_H',
    'I': 'KEY_I',
    'J': 'KEY_J',
    'K': 'KEY_K',
    'L': 'KEY_L',
    'M': 'KEY_M',
    'N': 'KEY_N',
    'O': 'KEY_O',
    'P': 'KEY_P',
    'Q': 'KEY_Q',
    'R': 'KEY_R',
    'S': 'KEY_S',
    'T': 'KEY_T',
    'U': 'KEY_U',
    'V': 'KEY_V',
    'W': 'KEY_W',
    'X': 'KEY_X',
    'Y': 'KEY_Y',
    'Z': 'KEY_Z',
    '1': 'KEY_1',
    '2': 'KEY_2',
    '3': 'KEY_3',
    '4': 'KEY_4',
    '5': 'KEY_5',
    '6': 'KEY_6',
    '7': 'KEY_7',
    '8': 'KEY_8',
    '9': 'KEY_9',
    '0': 'KEY_0',
    '!': '30',
    '"': '49',
    '#': '32',
    '$': '33',
    '%': '34',
    '&': '36',
    '\'': '52',
    '(': '38',
    ')': '39',
    '*': '37',
    '+': '46',
    ',': '54',
    '-': '45',
    '.': '55',
    '/': '56',
    ':': '51',
    ';': '51',
    '<': '54',
    '=': '46',
    '>': '55',
    '?': '56',
    '@': '31',
    '[': '47',
    ']': '48',
    '^': '35',
    '_': '45',
    '`': '53',
    '{': '47',
    '|': '49',
    '}': '48',
    '~': '53'
}

const translate = (char, layout) => {
    const key = layout.find(k => k.char === char)

    if (key) char = key.us

    if (char in digisparkTable) {
        return digisparkTable[char]
    } else {
        // If it is not in the dictionary
        return 'UNDEFINED_KEY'
    }
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
            newStr += key.us
        } else {
            newStr += char
        }
    }

    return newStr
}

const digisparkConverter = (script_input, layout) => {
    let output = ''

    output += '/* [ ===== Converted using duck.spacehuhn.com ===== ] */\n\n'
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
            prev_line = '\tDigiKeyboard.print(\'' + translateString(script_arr[line].slice(7).replaceAll('\\', '\\\\').replaceAll('\'', '\\\''), layout) + '\');'
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

                prev_line += translate(keys[j], layout)

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
}

export default digisparkConverter
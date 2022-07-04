const modMap = {
    // Ducky Script
    'CTRL': 0x01,    // LCTRL
    'CONTROL': 0x01, // LCTRL
    'SHIFT': 0x02,   // LSHIFT
    'ALT': 0x04,     // LALT
    'GUI': 0x08,     // LMETA
    'WINDOWS': 0x08, // LMETA

    // BadUSB Script
    'ALTGR': 0x40, // RALT

    // Extras
    'LCTRL': 0x01,
    'LSHIFT': 0x02,
    'LALT': 0x04,
    'LMETA': 0x08,
    'RCTRL': 0x10,
    'RSHIFT': 0x20,
    'RALT': 0x40,
    'RMETA': 0x80,
}

const charMap = {
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

    '1': 0x1e,
    '2': 0x1f,
    '3': 0x20,
    '4': 0x21,
    '5': 0x22,
    '6': 0x23,
    '7': 0x24,
    '8': 0x25,
    '9': 0x26,
    '0': 0x27,

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

    // Extras
    '\n': 0x28, // ENTER
    'Space': 0x2c, // SPACE
    'Intl\\': 0x64, // Keyboard Non-US \ and |
    'IntlRo': 0x87, // Keyboard International1
    'IntlYen': 0x89, // Keyboard International3
}

const keyMap = {
    'A': 0x04,          // Keyboard a and A
    'B': 0x05,          // Keyboard b and B
    'C': 0x06,          // Keyboard c and C
    'D': 0x07,          // Keyboard d and D
    'E': 0x08,          // Keyboard e and E
    'F': 0x09,          // Keyboard f and F
    'G': 0x0a,          // Keyboard g and G
    'H': 0x0b,          // Keyboard h and H
    'I': 0x0c,          // Keyboard i and I
    'J': 0x0d,          // Keyboard j and J
    'K': 0x0e,          // Keyboard k and K
    'L': 0x0f,          // Keyboard l and L
    'M': 0x10,          // Keyboard m and M
    'N': 0x11,          // Keyboard n and N
    'O': 0x12,          // Keyboard o and O
    'P': 0x13,          // Keyboard p and P
    'Q': 0x14,          // Keyboard q and Q
    'R': 0x15,          // Keyboard r and R
    'S': 0x16,          // Keyboard s and S
    'T': 0x17,          // Keyboard t and T
    'U': 0x18,          // Keyboard u and U
    'V': 0x19,          // Keyboard v and V
    'W': 0x1a,          // Keyboard w and W
    'X': 0x1b,          // Keyboard x and X
    'Y': 0x1c,          // Keyboard y and Y
    'Z': 0x1d,          // Keyboard z and Z

    'F1': 0x3a,         // Keyboard F1
    'F2': 0x3b,         // Keyboard F2
    'F3': 0x3c,         // Keyboard F3
    'F4': 0x3d,         // Keyboard F4
    'F5': 0x3e,         // Keyboard F5
    'F6': 0x3f,         // Keyboard F6
    'F7': 0x40,         // Keyboard F7
    'F8': 0x41,         // Keyboard F8
    'F9': 0x42,         // Keyboard F9
    'F10': 0x43,        // Keyboard F10
    'F11': 0x44,        // Keyboard F11
    'F12': 0x45,        // Keyboard F12

    // Ducky Script
    'ENTER': 0x28,      // Keyboard Return (ENTER)
    'MENU': 0x76,        // PROPS
    'APP': 0x76,         // PROPS
    'DELETE': 0x4c,     // Keyboard Delete Forward
    'HOME': 0x4a,       // Keyboard Home
    'INSERT': 0x49,     // Keyboard Insert
    'PAGEUP': 0x4b,     // Keyboard Page Up
    'PAGEDOWN': 0x4e,   // Keyboard Page Down
    'UP': 0x52,         // Keyboard Up Arrow
    'UPARROW': 0x52,     // UP
    'DOWN': 0x51,       // Keyboard Down Arrow
    'DOWNARROW': 0x51,   // DOWN
    'LEFT': 0x50,       // Keyboard Left Arrow
    'LEFTARROW': 0x50,   // LEFT
    'RIGHT': 0x4f,      // Keyboard Right Arrow
    'RIGHTARROW': 0x4f,  // RIGHT
    'TAB': 0x2b,        // Keyboard Tab
    'END': 0x4d,        // Keyboard End
    'ESC': 0x29,        // Keyboard ESCAPE
    'ESCAPE': 0x29,      // ESC
    'SPACE': 0x2c,      // Keyboard Spacebar
    'PAUSE': 0x48,      // Keyboard Pause
    'BREAK': 0x48,       // PAUSE
    'CAPSLOCK': 0x39,   // Keyboard Caps Lock
    'NUMLOCK': 0x53,    // Keyboard Num Lock and Clear
    'PRINTSCREEN': 0x46, // PRINT
    'SCROLLLOCK': 0x47, // Keyboard Scroll Lock

    // BadUSB Script
    'BACKSPACE': 0x2a,  // Keyboard DELETE (Backspace)

    // Numpad
    'NUM_ASTERIX': 0x55,
    'NUM_MINUS': 0x56,
    'NUM_PLUS': 0x57,
    'NUM_ENTER': 0x58,
    'NUM_1': 0x59,
    'NUM_2': 0x5a,
    'NUM_3': 0x5b,
    'NUM_4': 0x5c,
    'NUM_5': 0x5d,
    'NUM_6': 0x5e,
    'NUM_7': 0x5f,
    'NUM_8': 0x60,
    'NUM_9': 0x61,
    'NUM_0': 0x62,
    'NUM_DOT': 0x63,

    // Extras
    'NONE': 0x00,       // No key pressed
    'ERR_OVF': 0x01,    //  Keyboard Error Roll Over - used for all slots if too many keys are pressed ("Phantom key")
    'MINUS': 0x2d,      // Keyboard - and _
    'EQUAL': 0x2e,      // Keyboard = and +
    'LEFTBRACE': 0x2f,  // Keyboard [ and {
    'RIGHTBRACE': 0x30, // Keyboard ] and }
    'BACKSLASH': 0x31,  // Keyboard \ and |
    'HASHTILDE': 0x32,  // Keyboard Non-US # and ~
    'SEMICOLON': 0x33,  // Keyboard ; and :
    'APOSTROPHE': 0x34, // Keyboard ' and "
    'GRAVE': 0x35,      // Keyboard ` and ~
    'COMMA': 0x36,      // Keyboard , and <
    'DOT': 0x37,        // Keyboard . and >
    'SLASH': 0x38,      // Keyboard / and ?
    'SYSRQ': 0x46,      // Keyboard Print Screen
    'KPSLASH': 0x54,    // Keypad /
    'KPASTERISK': 0x55, // Keypad *
    'KPMINUS': 0x56,    // Keypad -
    'KPPLUS': 0x57,     // Keypad +
    'KPENTER': 0x58,    // Keypad ENTER
    'KP1': 0x59,        // Keypad 1 and End
    'KP2': 0x5a,        // Keypad 2 and Down Arrow
    'KP3': 0x5b,        // Keypad 3 and PageDn
    'KP4': 0x5c,        // Keypad 4 and Left Arrow
    'KP5': 0x5d,        // Keypad 5
    'KP6': 0x5e,        // Keypad 6 and Right Arrow
    'KP7': 0x5f,        // Keypad 7 and Home
    'KP8': 0x60,        // Keypad 8 and Up Arrow
    'KP9': 0x61,        // Keypad 9 and Page Up
    'KP0': 0x62,        // Keypad 0 and Insert
    'KPDOT': 0x63,      // Keypad . and Delete
    '102ND': 0x64,      // Keyboard Non-US \ and |
    'COMPOSE': 0x65,    // Keyboard Application
    'POWER': 0x66,      // Keyboard Power
    'KPEQUAL': 0x67,    // Keypad =
    'F13': 0x68,        // Keyboard F13
    'F14': 0x69,        // Keyboard F14
    'F15': 0x6a,        // Keyboard F15
    'F16': 0x6b,        // Keyboard F16
    'F17': 0x6c,        // Keyboard F17
    'F18': 0x6d,        // Keyboard F18
    'F19': 0x6e,        // Keyboard F19
    'F20': 0x6f,        // Keyboard F20
    'F21': 0x70,        // Keyboard F21
    'F22': 0x71,        // Keyboard F22
    'F23': 0x72,        // Keyboard F23
    'F24': 0x73,        // Keyboard F24
    'OPEN': 0x74,       // Keyboard Execute
    'HELP': 0x75,       // Keyboard Help
    'PROPS': 0x76,      // Keyboard Menu
    'FRONT': 0x77,      // Keyboard Select
    'STOP': 0x78,       // Keyboard Stop
    'AGAIN': 0x79,      // Keyboard Again
    'UNDO': 0x7a,       // Keyboard Undo
    'CUT': 0x7b,        // Keyboard Cut
    'COPY': 0x7c,       // Keyboard Copy
    'PASTE': 0x7d,      // Keyboard Paste
    'FIND': 0x7e,       // Keyboard Find
    'MUTE': 0x7f,       // Keyboard Mute
    'VOLUMEUP': 0x80,   // Keyboard Volume Up
    'VOLUMEDOWN': 0x81, // Keyboard Volume Down
    'KPCOMMA': 0x85,          // Keypad Comma
    'RO': 0x87,               // Keyboard International1
    'KATAKANAHIRAGANA': 0x88, // Keyboard International2
    'YEN': 0x89,              // Keyboard International3
    'HENKAN': 0x8a,           // Keyboard International4
    'MUHENKAN': 0x8b,         // Keyboard International5
    'KPJPCOMMA': 0x8c,        // Keyboard International6
    'HANGEUL': 0x90,        // Keyboard LANG1
    'HANJA': 0x91,          // Keyboard LANG2
    'KATAKANA': 0x92,       // Keyboard LANG3
    'HIRAGANA': 0x93,       // Keyboard LANG4
    'ZENKAKUHANKAKU': 0x94, // Keyboard LANG5
    'KPLEFTPAREN': 0xb6,  // Keypad (
    'KPRIGHTPAREN': 0xb7, // Keypad )
    'LEFTCTRL': 0xe0,   // Keyboard Left Control
    'LEFTSHIFT': 0xe1,  // Keyboard Left Shift
    'LEFTALT': 0xe2,    // Keyboard Left Alt
    'LEFTMETA': 0xe3,   // Keyboard Left GUI
    'RIGHTCTRL': 0xe4,  // Keyboard Right Control
    'RIGHTSHIFT': 0xe5, // Keyboard Right Shift
    'RIGHTALT': 0xe6,   // Keyboard Right Alt
    'RIGHTMETA': 0xe7,  // Keyboard Right GUI
    'MEDIA_PLAYPAUSE': 0xe8,
    'MEDIA_STOPCD': 0xe9,
    'MEDIA_PREVIOUSSONG': 0xea,
    'MEDIA_NEXTSONG': 0xeb,
    'MEDIA_EJECTCD': 0xec,
    'MEDIA_VOLUMEUP': 0xed,
    'MEDIA_VOLUMEDOWN': 0xee,
    'MEDIA_MUTE': 0xef,
    'MEDIA_WWW': 0xf0,
    'MEDIA_BACK': 0xf1,
    'MEDIA_FORWARD': 0xf2,
    'MEDIA_STOP': 0xf3,
    'MEDIA_FIND': 0xf4,
    'MEDIA_SCROLLUP': 0xf5,
    'MEDIA_SCROLLDOWN': 0xf6,
    'MEDIA_EDIT': 0xf7,
    'MEDIA_SLEEP': 0xf8,
    'MEDIA_COFFEE': 0xf9,
    'MEDIA_REFRESH': 0xfa,
    'MEDIA_CALC': 0xfb,
}

const encodeString = (str, layout) => {
    let output = '{'

    const getKeyValue = (key) => {
        return charMap[key] | 0x00
    }

    const getModValue = (key) => {
        let value = 0x00

        if (key.shift) value |= modMap['LSHIFT']
        if (key.alt) value |= modMap['LALT']
        if (key.altGr) value |= modMap['RALT']

        return value
    }

    const getComboModValue = (key) => {
        let value = 0x00

        if (key.comboAlt) value |= modMap['LALT']
        if (key.comboAltGr) value |= modMap['RALT']
        if (key.comboShift) value |= modMap['LSHIFT']

        return value
    }

    for (const char of str) {
        const key = layout.find(key => key.char === char)
        const value = getKeyValue(key ? key.us : char)
        const modValue = key ? getModValue(key) : 0x00

        if (value === 0) {
            console.log(`Couldn't find value for ${char}`, key)
        }

        if (key && key.combo !== '') {
            const comboModValue = getComboModValue(key)
            const comboValue = getKeyValue(key.combo)

            output += `${comboModValue.toString()},${comboValue.toString()}, `
        }

        output += `${modValue.toString()},${value.toString()}, `
    }

    output = `${output.slice(0, -2)}}`

    return output
}

const commentEscape = (str) => {
    str = str.replaceAll('\\', 'bslash')
    str = str.replace(/(?:\r\n|\r|\n)/g, '\n// ')

    return str
}

const commentCut = (str) => {
    str = str.replaceAll('\\', 'bslash')
    str = str.replace(/(?:\r\n|\r|\n)/g, ' ')

    if (str.length > 42) {
        return str.substring(0, 39) + '...'
    }

    return str
}

const convertToArduino = (obj) => {
    const scriptInput = obj.scriptInput
    const layout = obj.layout
    const version = obj.version

    let output = ''

    const keyArrays = []
    const codeLines = []

    let defaultDelay = 0
    let inLoop = false
    let largeString = false
    let largeStringValue = ''

    const lines = scriptInput.split(/\r?\n/)

    const addCodeLine = (value) => {
        const obj = {
            type: 'command',
            value: value,
        }

        if (value.startsWith('#error ') || value.startsWith('#warning ')) {
            obj.type = 'error'
        } else if (value.startsWith('//')) {
            obj.type = 'comment'
        } else if (value.endsWith('{')) {
            obj.type = 'indent-start'
        } else if (value.endsWith('}')) {
            obj.type = 'indent-end'
        }

        codeLines.push(obj)
    }

    // Parse each line
    lines.forEach(line => {
        // Ignore empty lines
        if (line === '' && !largeString) return true

        // LSTRING
        if (line.startsWith('LSTRING_')) {
            const mode = line.substring(8)

            if (mode.length === 0) {
                addCodeLine(`#error Couldn't parse '${line}'`)
            }

            largeString = (mode === 'BEGIN' || mode === 'START')

            // On LSTRING_END
            if (!largeString && largeStringValue.length > 0) {
                const i = keyArrays.length
                const value = largeStringValue
                const comment = commentEscape(value)
                const shortComment = commentCut(value)

                addCodeLine(`// LSTRING_BEGIN`)
                addCodeLine(`duckyString(key_arr_${i}, sizeof(key_arr_${i})); // ${shortComment}`)
                addCodeLine(`// LSTRING_END`)

                keyArrays.push({
                    comment: comment,
                    value: encodeString(value, layout, i),
                })

                largeStringValue = ''
            }
        } else if (largeString) {
            if (largeStringValue.length > 0) largeStringValue += '\n'
            largeStringValue += line
        }
        // STRING
        else if (line.startsWith('STRING ')) {
            const i = keyArrays.length
            const value = line.substring(7)
            const comment = commentEscape(value)
            const shortComment = commentCut(value)

            addCodeLine(`duckyString(key_arr_${i}, sizeof(key_arr_${i})); // STRING ${shortComment}`)

            keyArrays.push({
                comment: comment,
                value: encodeString(value, layout, i),
            })
        }
        // REM
        else if (line.startsWith('REM ')) {
            addCodeLine(`// ${line.substring(4)}`)
        }
        // #
        else if (line.startsWith('# ')) {
            addCodeLine(`// ${line.substring(2)}`)
        }
        // DELAY
        else if (line.startsWith('DELAY ')) {
            const value = parseInt(line.substring(6))
            addCodeLine(`${obj.delay(value)} // DELAY ${value}`)
        }
        // REPEAT
        else if (line.startsWith('REPEAT ') || line.startsWith('REPLAY ')) {
            const value = parseInt(line.substring(7))
            let prevLine = codeLines.at(-1)

            addCodeLine(`for(size_t i=0; i<${value}; ++i) {`)
            addCodeLine(prevLine.value)
            addCodeLine(`}`)
        }
        // DEFAULTDELAY
        else if (line.startsWith('DEFAULTDELAY ') || line.startsWith('DEFAULT_DELAY ')) {
            const value = line.replace('DEFAULTDELAY ', '').replace('DEFAULT_DELAY ', '')

            defaultDelay = parseInt(value)// * 10
        }
        // KEYCODE
        else if (line.startsWith('KEYCODE ')) {
            const value = line.substring(8)
            const words = value.split(' ')

            if (words.length === 1) words.unshift('0')

            const modStr = words[0]
            const mods = parseInt(modStr, /*modStr.startsWith('0x') ?*/ 16/* : 10*/).toString()

            const keys = []

            words.slice(1).forEach(word => {
                const keyStr = word
                const key = parseInt(keyStr, /*keyStr.startsWith('0x') ?*/ 16 /*: 10*/)
                if (key > 0) keys.push(key.toString())
            })

            addCodeLine(`${obj.sendKeyStroke(mods, keys)} // ${line}`)
        }
        // LOCALE
        else if (line.startsWith('LOCALE ') || line.startsWith('DUCKY_LANG ')) {
            addCodeLine(`#warning LOCALE/DUCKY_LANG ignored ('${line}')`)
        }
        // LOOP
        else if (line.startsWith('LOOP_')) {
            const value = line.substring(5)
            const words = value.split(' ')

            if ((words[0] === 'BEGIN' || words[0] === 'START') && !inLoop) {
                inLoop = true

                if (words.length === 2) {
                    const loops = parseInt(words[1])

                    addCodeLine(`for(size_t i=0; i<${loops}; ++i) {`)
                } else {
                    addCodeLine(`while(true) {`)
                }
            } else if (words[0] === 'END' && inLoop) {
                inLoop = false
                addCodeLine(`}`)
            } else {
                addCodeLine(`#error Couldn't parse '${line}'`)
            }
        }
        // LED
        else if (line.startsWith('LED')) {
            const value = line.substring(4)
            addCodeLine(`${obj.led(value === 'ON')} // LED ${value}`)
            /*
            const words = value.split(' ')

            if (words[0] !== '0' && words[0] !== 'OFF') {
                addCodeLine(`${obj.led(words[0],words[1],words[2])} // LED ${value}`)
            } else/* if (words[0] === 'OFF')// {
                addCodeLine(`${obj.led(0,0,0)} // LED ${value}`)
            }*/
        }
        // Key combinations
        else {
            line = line.trim() // remove leading or tailing spaces
            line = line.replace(/\s+/g, ' ') // remove double spaces
            const words = line.split(' ')
            let mods = 0x00
            let keys = []

            words.forEach(word => {
                if (word != '') {
                    if (word in modMap) {
                        mods |= modMap[word]
                    } else if (word in keyMap) {
                        keys.push(keyMap[word])
                    } else if (word in charMap) {
                        keys.push(charMap[word])
                    } else {
                        addCodeLine(`#error Could not parse '${word}'`)
                    }
                }
            })

            if (mods !== 0x00 || keys.length > 0) {
                addCodeLine(`${obj.sendKeyStroke(mods, keys)} // ${line}`)
            }
        }

    })

    // Sketch prefix
    output += `// [ ===== Created using ${version.domain} @ ${version.name} ===== ] //
// Duckify is a free and Open-Source web-app for converting Ducky Script into Arduino code.
// Please consider supporting us on ko-fi.com/spacehuhn <3
// Learn more about us at spacehuhn.com

// Platform: ${obj.platform}
// Keyboard Layout: ${obj.layoutName.toUpperCase()}

${obj.codeImports}

`

    // PROGMEM arrays for strings
    keyArrays.forEach((keyArr, i) => {
        output += `// ${keyArr.comment}
const uint8_t key_arr_${i}[] PROGMEM = ${keyArr.value};\n`
    })

    // String helper function
    output += `
void duckyString(const uint8_t* keys, size_t len) {  
    for(size_t i=0; i<len; i+=2) {
        ${obj.sendKeyStroke('pgm_read_byte_near(keys + i)', ['pgm_read_byte_near(keys + i+1)'])}
    }
}\n`

    // Sketch setup
    output += `
void setup() {
    ${obj.codeSetup}
\n`

    let indent = false

    // Each line
    codeLines.forEach(codeLine => {
        if (codeLine.type === 'indent-end') indent = false

        if (indent) output += `    `
        output += `    ${codeLine.value}\n`

        if (codeLine.indent === 'indent-start') indent = true

        if (defaultDelay && codeLine.type === 'command') {
            if (indent) output += `    `
            output += `    ${obj.delay(defaultDelay)}\n`
        }
    })

    if (inLoop) {
        output += `    }\n`
        output += `    #warning Missing LOOP END\n`
    }

    // Sketch suffix
    output += `}\n\nvoid loop() {}

// Created using ${version.domain} @ ${version.name}`

    return output
}

export default convertToArduino

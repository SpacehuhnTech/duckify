import convert from './arduinoConverter.js'

const convertToDigispark = (scriptInput, layoutName, layout, version) => {
    const delay = (value) => {
        return `DigiKeyboard.delay(${value});`
    }

    const sendKeyStroke = (mods, keys) => {
        return `DigiKeyboard.sendKeyStroke(${keys[0].toString()}, ${mods.toString()});`
    }

    const led = (r,g,b) => {
        const on = (r>0 || g>0 || b>0)
        return `digitalWrite(1, ${on ? 'HIGH' : 'LOW'});`
    }

    const codeImports = `#include "DigiKeyboard.h"`

    const codeSetup = `pinMode(1, OUTPUT); // Enable LED
    digitalWrite(1, LOW); // Turn LED off
    DigiKeyboard.sendKeyStroke(0); // Tell computer no key is pressed`

    return convert({
        platform: 'Digispark',
        layoutName: layoutName,
        scriptInput: scriptInput,
        layout: layout,
        version: version,
        delay: delay,
        sendKeyStroke: sendKeyStroke,
        maxKeys: 1,
        led:led,
        codeImports: codeImports,
        codeSetup: codeSetup,
    })
}

export default convertToDigispark
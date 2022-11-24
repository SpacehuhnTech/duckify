import convert from './arduinoConverter.js'

const convertToArduino = (scriptInput, layoutName, layout, version) => {
    const delay = (value) => {
        return `delay(${value});`
    }

    const sendKeyStroke = (mods, keys) => {
        const modStr = mods.toString()
        const keyStr = keys.concat([0,0,0,0,0,0]).splice(0,6).map(key => key.toString()).join(', ')

        let res = `keyboard::type(${keyStr}, ${modStr});`

        if(keys.length > 6) {
            res += `\n#error Arduino only allows 6 keys + modifiers`
        }

        return res
    }

    const led = (r, g, b) => {
        const on = (r > 0 || g > 0 || b > 0)
        return `digitalWrite(1, ${on ? 'HIGH' : 'LOW'});`
    }

    const codeImports = `
#include <HID.h>

namespace keyboard {
    typedef struct report {
        uint8_t modifiers;
        uint8_t reserved;
        uint8_t keys[6];
    } report;
    
    report prev_report = report { 0x00, 0x00, { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 } };
    
    const uint8_t keyboardDescriptor[] PROGMEM {
        0x05, 0x01, 0x09, 0x06, 0xa1, 0x01, 0x85, 0x02, 0x05, 0x07, 0x19, 0xe0, 0x29, 0xe7, 0x15, 0x00, 0x25, 0x01, 0x75, 0x01, 0x95, 0x08, 0x81, 0x02, 0x95, 0x01, 0x75, 0x08, 0x81, 0x03, 0x95, 0x06, 0x75, 0x08, 0x15, 0x00, 0x25, 0x73, 0x05, 0x07, 0x19, 0x00, 0x29, 0x73, 0x81, 0x00, 0xc0,
    };
    
    report makeReport(uint8_t modifiers = 0, uint8_t key1 = 0, uint8_t key2 = 0, uint8_t key3 = 0, uint8_t key4 = 0, uint8_t key5 = 0, uint8_t key6 = 0);
    
    report makeReport(uint8_t modifiers, uint8_t key1, uint8_t key2, uint8_t key3, uint8_t key4, uint8_t key5, uint8_t key6) {
        return report { modifiers, 0x00, { key1, key2, key3, key4, key5, key6 } };
    }
    
    void begin() {
        static HIDSubDescriptor node(keyboardDescriptor, sizeof(keyboardDescriptor));
        HID().AppendDescriptor(&node);
    }
    
    void send(report* k) {
        HID().SendReport(2, (uint8_t*)k, sizeof(report));
    }
    
    void release() {
        prev_report = makeReport();
        send(&prev_report);
    }

    void type(uint8_t key0, uint8_t key1, uint8_t key2, uint8_t key3, uint8_t key4, uint8_t key5, uint8_t modifiers) {
        prev_report.keys[0] = key0;
        prev_report.keys[1] = key1;
        prev_report.keys[2] = key2;
        prev_report.keys[3] = key3;
        prev_report.keys[4] = key4;
        prev_report.keys[5] = key5;
        prev_report.modifiers = modifiers;
        send(&prev_report);
        release();
    }
}
`

    const codeSetup = `keyboard::begin();
    delay(2000);`

    return convert({
        platform: 'Arduino',
        layoutName: layoutName,
        scriptInput: scriptInput,
        layout: layout,
        version: version,
        delay: delay,
        sendKeyStroke: sendKeyStroke,
        maxKeys: 1,
        led: led,
        codeImports: codeImports,
        codeSetup: codeSetup,
    })
}

export default convertToArduino
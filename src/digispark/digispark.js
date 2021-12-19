// This converter is inspired by and based upon https://github.com/CedArctic/digiQuack
// digiQuack is licensed under MIT - Copyright (c) 2017 CedArctic
// Give CedArctic a follow :)

import { digispark_layouts } from './digispark_layouts.js'

function convert(script_input, locale) {

    let digispark_output = "";

    digispark_output += "/* [ ===== Converted using duck.spacehuhn.com ===== ] */\n\n";
    digispark_output += "#include \"DigiKeyboard.h\"\n\n";
    digispark_output += "void setup() {\n";
    digispark_output += "\tDigiKeyboard.sendKeyStroke(0);\n";

    // Convert the Ducky Script lines to a list and strip whitespaces:
    const script_arr = script_input.split(/\r\n|\r|\n/g);
    // Ducky Statements fall into one of the following 6 categories:
    // Default Delay, Comment, Delay, String, Repeat, Command

    // Check if there is a default delay:
    let default_delay = 0;
    if (script_arr[0].slice(0, 7) === "DEFAULT") {
        default_delay = parseInt(script_arr[0].slice(7));
        script_arr.shift();
    }

    // Variables:
    const layout = (locale in digispark_layouts) ? digispark_layouts[locale] : digispark_layouts["US"];
    let prev_line = "";
    let keys = [];

    // Process each line from the ducky script:
    for (let line = 0; line < script_arr.length; line++) {

        // Check if the statement is a comment, delay, string, repeat or key combination
        if (script_arr[line].slice(0, 3) === "REM") {
            prev_line = script_arr[line].replace("REM", "\t//");
        } else if (script_arr[line].slice(0, 5) === "DELAY") {
            prev_line = "\tDigiKeyboard.delay(" + parseInt(script_arr[line].slice(6)) + ");";
        } else if (script_arr[line].slice(0, 6) === "STRING") {
            prev_line = "\tDigiKeyboard.print(\"" + script_arr[line].slice(7).replaceAll("\\", "\\\\").replaceAll("\"", "\\\"") + "\");";
        } else if (script_arr[line].slice(0, 6) === "REPEAT") {
            let repetitions = parseInt(script_arr[line].slice(7)) - 1;
            for (let i = 0; i < repetitions; i++) {
                digispark_output += prev_line;
                digispark_output += "\n";

                // Write Default Delay between the commands if it exists:
                if (default_delay !== 0) {
                    digispark_output += "\tDigiKeyboard.delay(" + default_delay + ");\n";
                }
            }
        } else {
            // Write beginning of command:
            prev_line = "\tDigiKeyboard.sendKeyStroke(";
            // Split statement into keys
            keys = script_arr[line].split(" ");
            // Go through the keys matching them through the dictionary to Digispark keys
            for (let j = 0; j < keys.length; j++) {
                if(j>0) prev_line += " ";

                if (keys[j] in layout) {
                    prev_line += layout[keys[j]];
                } else {
                    // If it is not in the dictionary
                    prev_line += "UNDEFINED_KEY";
                }
                
                prev_line += ",";
            }
            // Remove last comma and add a parenthesis
            prev_line = prev_line.slice(0, prev_line.length - 1) + ");";
        }

        // Write command to output file and add a new line \n :
        digispark_output += prev_line;
        digispark_output += "\n";

        // Write Default Delay if it exists:
        if (default_delay !== 0) {
            digispark_output += "\tDigiKeyboard.delay(" + default_delay + ");\n";
        }
    }
    digispark_output += "}\n\n";
    digispark_output += "void loop() {}\n";

    return digispark_output;
}

export { convert }
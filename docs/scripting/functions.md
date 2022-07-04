---
id: functions
title: Functions
---

| Command | Example | Description |
| ------- | ------- | ----------- |
| `#` or `REM` | `# Hello World!` | Comment |
| `DEFAULTDELAY` or `DEFAULT_DELAY` | `DEFAULTDELAY 200` | Time in ms between every command |
| `DELAY` | `DELAY 1000` | Delay in milliseconds |
| `STRING` | `STRING Hello World!` | Types the following string |
| `REPEAT` or `REPLAY` | `REPEAT 3` | Repeats the last command n times |
| `LSTRING_BEGIN` and `LSTRING_END` | `LSTRING_BEGIN`<br />`Hello`<br />`World`<br />`LSTRING_END` | Types out everything in between start and end, including linebreaks. |
| `KEYCODE` | `KEYCODE 02 04` | Types a specific key code (modifier key) in hexadecimal |
| `LOOP_BEGIN` and `LOOP_END` | `LOOP_BEGIN 10`<br />`STRING zZ`<br />`LOOP_END`| Loops everything in between start and end for a given amount of times. Create an infinite loop by specifying no number. |
| `LED` | `LED ON`<br />`DELAY 1000`<br />`LED OFF` | Turns onboard LED on or off. |

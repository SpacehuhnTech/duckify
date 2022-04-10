# Scripting

## About

The scripting language used in Duckify is made to be compatible with [Ducky Script](https://github.com/hak5darren/USB-Rubber-Ducky/wiki/Duckyscript). However, some functions and keys were added or modified.
You can find a great Ducky Script Quick Reference [here](https://docs.hak5.org/usb-rubber-ducky-1/the-ducky-script-language/ducky-script-quick-reference).

## Basics

* A single space separates keys
* All keys as part of the same line gets pressed and released simultaneously
* To write text, use the `STRING` function
* Upper and lower case matters!

| Example | Explanation |
| ------- | ------------ |
| `WINDOWS R` | Press the Windows key and the R key simultaneously |
| `STRING Hello World` | Write "Hello World" |

**Example Script:**

```
# Hello World Example Script
DEFAULTDELAY 200
DELAY 2000
GUI R
STRING notepad
ENTER
STRING Hello World!
```

| Line | Explanation |
| ---- | ------------ |
| `# Hello World Example Script` | Comments the script's name. |
| `DEFAULTDELAY 200` | Set the default delay between each line to 200 milliseconds. |
| `DELAY 2000` | Wait 2 seconds. |
| `GUI R` | Press the Windows key and the R key simultaneously to open the run window. |
| `STRING notepad` | Type "notepad". |
| `ENTER` | Press enter key to launch the Windows Notepad application. |
| `STRING Hello World!` | Type "Hello World!" into the newly opened notepad window. |

## Functions

| Command | Example | Description |
| ------- | ------- | ----------- |
| `#` or `REM` | `# Hello World!` | Comment |
| `DEFAULTDELAY` or `DEFAULT_DELAY` | `DEFAULTDELAY 200` | Time in ms between every command |
| `DELAY` | `DELAY 1000` | Delay in milliseconds |
| `STRING` | `STRING Hello World!` | Types the following string |
| `REPEAT` or `REPLAY` | `REPEAT 3` | Repeats the last command n times |
| `LSTRING_START` and `LSTRING_END` | `LSTRING_START`<br />`Hello`<br />`World`<br />`LSTRING_END` | Types out everything in between start and end, including linebreaks. |
| `KEYCODE` | `KEYCODE 02,04` | Types a specific key code (modifier,key) in hexadecimal |
| `LOOP_START` and `LOOP_END` | `LOOP_START 10`<br />`STRING zZ`<br />`LOOP_END`| Loops everything in between start and end for a given amount of times. Create an infinite loop by specifying no number. |
| `LED` | `LED ON`<br />`DELAY 1000`<br />`LED OFF` | Turns onboard LED on or off. |

## Standard Keys

| Key |
| --- |
| `a` - `z` |
| `A` - `Z` |
| `0` - `9` |
| `F1` - `F12` |
| ``` -=[]\#;',`./``` |

## Modifier Keys

| Key |
| --- |
| `CTRL` or `CONTROL` |
| `SHIFT` |
| `ALT` |
| `ALTGR` |
| `WINDOWS` or `GUI` |

## Other Keys

| Key |
| --- |
| `ENTER` |
| `MENU` or `APP` |
| `DELETE` |
| `BACKSPACE` |
| `HOME` |
| `INSERT` |
| `PAGEUP` |
| `PAGEDOWN` |
| `UP` or `UPARROW` |
| `DOWN` or `DOWNARROW` |
| `LEFT` or `LEFTARROW` |
| `RIGHT` or `RIGHTARROW` |
| `TAB` |
| `END` |
| `ESC` or `ESCAPE` |
| `SPACE` |
| `PAUSE` or `BREAK` |
| `CAPSLOCK` |
| `NUMLOCK` |
| `PRINTSCREEN` |
| `SCROLLLOCK` |

## Numpad Keys

| Key |
| --- |
| `NUM_0` - `NUM_9` |
| `NUM_ASTERIX` |
| `NUM_ENTER` |
| `NUM_MINUS` |
| `NUM_DOT` |
| `NUM_PLUS` |
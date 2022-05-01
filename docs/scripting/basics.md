---
id: basics
title: Basics
---

:::info
Duckify's script language is compatible with Ducky Script. However, some functions and keys were added or modified.
You can find a great Ducky Script quick reference [at docs.hak5.org](https://docs.hak5.org/usb-rubber-ducky-1/the-ducky-script-language/ducky-script-quick-reference).
:::

## Basic rules:
* A single space separates keys
* All keys as part of the same line gets pressed and released simultaneously
* To write text, use the `STRING` function
* Upper and lower case matters!

| Example | Explanation |
| ------- | ------------ |
| `WINDOWS R` | Press the Windows key and the R key simultaneously |
| `STRING Hello World` | Write "Hello World" |

## Example Script:

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
| `# This is a comment` | Comment something. |
| `DEFAULTDELAY 200` | Set the default delay between each line to 200 milliseconds. |
| `DELAY 2000` | Wait 2 seconds. |
| `GUI R` | Press the Windows key and the R key simultaneously to open the run window. |
| `STRING notepad` | Type "notepad". |
| `ENTER` | Press enter key to launch the Windows Notepad application. |
| `STRING Hello World!` | Type "Hello World!" into the newly opened notepad window. |

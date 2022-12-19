---
id: about
title: About
---

<img src='/logo512.png' width='128px' alt='Duckify Logo'/>

Duckify is a free and open-source converter for turning BadUSB scripts into Arduino sketches that can run on development boards like the Digispark.

It supports a variety of keyboard layouts, including those for macOS, and is compatible with Ducky Script. 🚀
<!--
<a href='https://ko-fi.com/G2G75FA4V' target='_blank'>
    <img height='36' style={{border:0,height:'36px'}} src='/img/kofi_button.png' border='0' alt='Buy Me a Coffee at ko-fi.com' />
</a>
&nbsp;
<a href='https://discord.com/invite/UZ83QgSdGc'>
<img height='36' style={{border:0,height:'36px'}} src='/img/discord_button.png' alt='Discord Server button'/>
</a>
-->

## Usage

<details>
  <summary>1. ✍️ Add your BadUSB Script</summary>
  <div>
    <img src='/img/Duckify_1_BadUSB_Script.jpg' alt='Duckify Usage Adding BadUSB Script'/>
    <p>
    Paste your BadUSB script into the text area on the left.
    The scripting language is compatible to Ducky Script. You can find a complete reference at <a href='/docs/scripting/basics'>Scripting</a>.
    </p>
  </div>
</details>

<details>
  <summary>2. ⚙️ Change layout and other options</summary>
  <div>
    <img src='/img/Duckify_2_Settings.jpg' alt='Duckify Usage Chaning settings'/>
    <p>
    At the bottom, you can set the keyboard layout according to the target computer. 
    Over 30 different layouts are available for both macOS and Windows.
    You can also give the script a name, which will be used as the filename if you download your script.
    </p>
  </div>
</details>

<details>
  <summary>3. 👇 Hit Convert and download output</summary>
  <div>
    <img src='/img/Duckify_3_Convert_Download.jpg' alt='Duckify Usage Converting'/>
    <p>
    After clicking Convert, the Arduino code appears in the right text area.
    A notification tells you if the conversion was successful or errors occurred.
    You can copy the generated output or download it to open it in Arduino IDE.
    </p>
  </div>
</details>

<details>
  <summary>4. ⚡ Flash Arduino sketch</summary>
  <div>
    <img src='/img/Duckify_4_Arduino.jpg' alt='Duckify Usage Flashing in Arduino'/>
    <p>
    Open the downloaded sketch and open it in Arduino IDE. Make sure you selected your board and hit upload.
    For a more detailed tutorial, see <a href='/docs/digispark/getting-started'>Digispark Basics</a>.
    </p>
  </div>
</details>

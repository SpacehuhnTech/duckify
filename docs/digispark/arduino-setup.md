---
id: arduino-setup
title: Arduino Setup
---

## Drivers

To make the Digispark work with Arduino on Windows, you need to install drivers.  
:::info Drivers
[Download Digispark drivers for Windows](https://github.com/digistump/DigistumpArduino/releases/download/1.6.7/Digistump.Drivers.zip). Unzip and run "Install Drivers.exe".
:::

## Setup Arduino-IDE

1. [Download and install Arduino IDE](https://www.arduino.cc/en/software)
2. Start Arduino IDE
3. Go to **File** > **Preferences** > **Additional Boards Manager URLs** and paste  
`https://raw.githubusercontent.com/ArminJo/DigistumpArduino/master/package_digistump_index.json` then click OK to save and close the Preferences
![Digispark Board URL](/img/Digispark-URL-Arduino.jpg)
4. Go to **Tools** > **Board** > **Boards Manager**, search for `Digispark` and install "Digistump AVR Boards"
![Install Digispark Boards](/img/Install-Digispark.jpg)

## Flash example sketch

You can upload an example to ensure everything is correctly set up and working.

:::info 6s delay
The Digispark goes into a bootloader mode for 6 seconds when plugged in. You can only upload new firmware in these 6s. Afterward, it will leave this mode and run the code you flashed onto it. So you **always have this 6-second delay** before your code starts.
:::

1. Go to **Tools** > **Board** > **Digistump Boards** and select **Digispark**
2. Open **File** > **Examples** > **Digispark_Examples** > **Blink**
3. Click Upload (in the top left)
4. Plugin your Digispark when told (check the output at the bottom)

When done, the LED on your Digispark should start blinking.

:::tip
One user reported that on Kali Linux, they had to copy the file https://raw.githubusercontent.com/micronucleus/micronucleus/master/commandline/49-micronucleus.rules to the /etc/udev/rules.d folder.
:::
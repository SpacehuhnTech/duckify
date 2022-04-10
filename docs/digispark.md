# Digispark

## About

![Digispark](/img/Digispark.jpg ':size=200')

The Digispark is a very simplistic development board.
It's based on the ATTiny85, is Arduino compatible, has a USB-A plug built-in (so no dangling cables!), and it's very affordable!

The Digispark comes with a keyboard library that allows us to utilize it as a BadUSB.

🛍️ Amazon.com affiliate Link: https://amzn.to/3KjGhWq  
🛍️ Amazon.de affiliate Link: https://amzn.to/3tuJ6xh

## Drivers

Download Digispark drivers for Windows here:  
https://github.com/digistump/DigistumpArduino/releases/download/1.6.7/Digistump.Drivers.zip  
Unzip and run "Install Drivers.exe". Without the drivers, you might be unable to flash the Digispark.

## Arduino-IDE Setup

Before you can start using the Digispark, you have to prepare Arduino IDE:
1. Download and Install Arduino IDE: https://www.arduino.cc/en/software
2. Open Arduino IDE
3. Go to *File > Preferences > Additional Boards Manager URLs* and paste `https://raw.githubusercontent.com/ArminJo/DigistumpArduino/master/package_digistump_index.json` then click OK to save and close the Preferences
4. Go to *Tools > Board > Boards Manager*, search for `Digispark` and install "Digistump AVR Boards"

![Digispark Board URL](/img/Digispark-URL-Arduino.jpg)
![Install Digispark Boards](/img/Install-Digispark.jpg)

With that out of the way, let's upload your first sketch to the Digispark to make sure everything is properly set up before you use it as a BadUSB.

1. Go to *Tools > Board > Digistump Boards* and select *Digispark*
2. Open *File > Examples > Digispark_Examples > Blink*
3. Click Upload (in the top left)
4. Insert your Digispark when told (you'll see the output at the bottom)
5. When done, the LED on your Digispark should now blink

> [!NOTE]
> Digispark goes into a bootloader mode for 6 seconds when plugged in. If no new firmware is uploaded, it will leave this mode and run the code you flashed onto it. You will **always have this 6-second delay** before your code starts.

## Duckify Usage

![Duckify Digispark Screenshot](/img/duckify-screenshot.jpg)

Enter your BadUSB Script on the left. 
For example, wait 5 seconds and then type out "Hello World": 
```
DELAY 5000
STRING Hello World
```

At the bottom, set the system and layout according to your target.   
For example, `win` and `DE` for a German Windows machine.  
**Make sure mode is on `Digispark`**.  
Optionally you can also specify a script name, which is used as a filename when you download a script.  

Click on convert at the bottom right.  

Collect the converted sketch on the right output area. You can copy and paste it in Arduino or download and open the sketch. 
Upload the sketch to your Digispark and enjoy your BadUSB.

## Changing USB VID/PID

You can make the Digispark appear as an Apple keyboard, so an Apple computer will recognize it and skip the keyboard setup assistant.
But to achieve this, you have to manipulate the USB PID (Product ID) and VID (Vendor ID) deep in the Arduino Digispark files:

![Arduino Path](/img/Arduino-Path.jpg)

1. In Arduino, open *File > Preferences*
2. Click on the Path at the bottom (it's a shortcut)
3. Open *packages > digistump > hardware > avr > 1.7.5 (or other version number) > libraries > DigiKeyboard*
4. Make a copy of *usbconfig.h* and call it *usbconfig_BACKUP.h* in case something goes wrong, and you want to undo the changes
5. Open *usbconfig.h* in a text editor
6. Replace the following lines:  
* `#define USB_CFG_VENDOR_ID 0xc0, 0x16` 
to `#define USB_CFG_VENDOR_ID 0xAC, 0x05` to use 05AC as USB VID which is owned to Apple.
* `#define USB_CFG_DEVICE_ID 0xdb, 0x28` 
to `#define USB_CFG_DEVICE_ID 0x50, 0x02` to use  0250 as USB PID which is the Apple Aluminium Keyboard with ISO layout.
* [Optional] Change `#define USB_CFG_VENDOR_NAME     'd','i','g','i','s','t','u','m','p','.','c','o','m'` 
to `#define USB_CFG_VENDOR_NAME     'A','p','p','l','e'`
and `#define USB_CFG_VENDOR_NAME_LEN 13` 
to `#define USB_CFG_VENDOR_NAME_LEN 5`
* [Optional] Change `#define USB_CFG_DEVICE_NAME     'D','i','g','i','K','e','y'` to `#define USB_CFG_DEVICE_NAME     'K','e','y','b','o','a','r','d'` and `#define USB_CFG_DEVICE_NAME_LEN 7` to `#define USB_CFG_DEVICE_NAME_LEN 7`
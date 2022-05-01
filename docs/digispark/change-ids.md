---
id: change-ids
title: Edit VID & PID
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

You can make the Digispark appear as a different device, such as an Apple keyboard. 
This is useful if you want to skip the keyboard setup assistant on macOS.

:::tip
You can change the IDs to anything you want. Websites like [devicehuhnt.com](https://devicehunt.com/) have a database that you can search for registered USB devices.
:::

But to achieve this, you have to manipulate the USB Product ID (PID) and Vendor ID (VID) deep in the Arduino Digispark files.

1. In Arduino, open **File** > **Preferences**
2. Click on the Path at the bottom (it's a shortcut)
![Arduino Path](/img/Arduino-Path.jpg)
3. Open **packages** > **digistump** > **hardware** > **avr** > **1.7.5** (or other version number) > **libraries** > **DigiKeyboard**
4. Make a copy of **usbconfig.h** and call it **usbconfig_BACKUP.h** in case you need to undo the changes
5. Open **usbconfig.h** in a text editor
6. Replace the following lines:  

:::info
Download a already modified [usbconfig.h here](/assets/usbconfig.h) to save you time. Otherwise, continue below and don't overlook the other tabs!
:::

<Tabs
  defaultValue='vid'
  values={[
    {label: 'USB VID', value: 'vid'},
    {label: 'USB PID', value: 'pid'},
    {label: 'Vendor Name', value: 'vendor'},
    {label: 'Device Name', value: 'device'},
  ]}>
  <TabItem value='vid'>
    <p>To set 05AC as USB VID (Apple), replace</p>
    <pre>
        #define USB_CFG_VENDOR_ID 0xc0, 0x16
    </pre>
    <p>with</p>  
    <pre>
        #define USB_CFG_VENDOR_ID 0xAC, 0x05
    </pre>
  </TabItem>

  <TabItem value='pid'>
    <p>To use 0250 as USB PID (Apple Aluminium Keyboard with ISO layout), replace</p>
    <pre>
        #define USB_CFG_DEVICE_ID 0xdb, 0x28
    </pre>
    <p>with</p>  
    <pre>
        #define USB_CFG_DEVICE_ID 0x50, 0x02
    </pre>
  </TabItem>

  <TabItem value='vendor'>
    <p>To set the vendor name to Apple, replace</p>
    <pre>
        #define USB_CFG_VENDOR_NAME     'd','i','g','i','s','t','u','m','p','.','c','o','m'
    </pre>
    <p>with</p>  
    <pre>
        #define USB_CFG_VENDOR_NAME     'A','p','p','l','e'
    </pre>
    <hr/>
    <p>and</p>
    <pre>
        #define USB_CFG_VENDOR_NAME_LEN 13
    </pre>
    <p>with</p>  
    <pre>
        #define USB_CFG_VENDOR_NAME_LEN 5
    </pre>
  </TabItem>
  
  <TabItem value='device'>
    <p>To set the device name to Keyboard, replace</p>
    <pre>
        #define USB_CFG_DEVICE_NAME     'D','i','g','i','K','e','y'
    </pre>
    <p>with</p>  
    <pre>
        #define USB_CFG_DEVICE_NAME     'K','e','y','b','o','a','r','d'
    </pre>
    <hr/>
    <p>and</p>
    <pre>
        #define USB_CFG_DEVICE_NAME_LEN 7
    </pre>
    <p>with</p>  
    <pre>
        #define USB_CFG_DEVICE_NAME_LEN 8
    </pre>
  </TabItem>
</Tabs>
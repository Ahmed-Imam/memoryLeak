# React Native Memory Leak Demonstration Repository

This repository is created to demonstrate a memory leak issue observed in a React Native Android application. The issue is associated with the following package versions:

- `"react-native-screens": "^3.22.0"`
- `"@react-navigation/bottom-tabs": "^6.3.2"`
- `"@react-navigation/drawer": "^6.4.4"`
- `"@react-navigation/native": "^6.0.11"`
- `"@react-navigation/native-stack": "^6.7.0"`
- `"react-native-reanimated": "^3.3.0"`
- `"react-native-gesture-handler": "^2.12.0"`

## Application Setup and Issue Reproduction

To set up the application and reproduce the memory leak issue, follow these steps:

1. Start the application with the command: `yarn start`
2. Fire up your emulator.
3. Within the application, navigate to the home screen.
4. Interact with different tabs and allow notifications from the LeakCanary app.
5. Navigate to a different screen, return back, and switch between tabs.

After these steps, you should start receiving memory leak notifications from the LeakCanary app. Below is an example:

```plaintext
LeakCanary Trace Report:

.....

METADATA

Android SDK Version: 33
Device Manufacturer: Google
LeakCanary Version: 2.11
App Process Name: com.memoryleakex
Class Count: 25658
Instance Count: 211592
Primitive Array Count: 135131
Object Array Count: 30509
Thread Count: 40
Heap Total Bytes: 27159503
Bitmap Count: 0
Bitmap Total Bytes: 0
Large Bitmap Count: 0
Large Bitmap Total Bytes: 0
Stats: LruCache[maxSize=3000,hits=124877,misses=212509,hitRate=37%]
RandomAccess[bytes=10572164,reads=212509,travel=64191078225,range=32940463,size=40503693]
Analysis Duration: 5223 ms

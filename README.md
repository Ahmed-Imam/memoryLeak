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
┬───
│ GC Root: Global variable in native code
│
├─ com.swmansion.reanimated.NativeProxy instance
│    Leaking: UNKNOWN
│    Retaining 221 B in 8 objects
│    ↓ NativeProxyCommon.mNodesManager
│                        ~~~~~~~~~~~~~
├─ com.swmansion.reanimated.NodesManager instance
│    Leaking: UNKNOWN
│    Retaining 9.4 kB in 316 objects
│    mContext instance of com.facebook.react.bridge.ReactApplicationContext,
│    wrapping com.memoryleakex.MainApplication
│    mReactApplicationContext instance of com.facebook.react.bridge.
│    ReactApplicationContext, wrapping com.memoryleakex.MainApplication
│    ↓ NodesManager.mAnimationManager
│                   ~~~~~~~~~~~~~~~~~
├─ com.swmansion.reanimated.layoutReanimation.AnimationsManager instance
│    Leaking: UNKNOWN
│    Retaining 794 B in 24 objects
│    mContext instance of com.facebook.react.bridge.ReactApplicationContext,
│    wrapping com.memoryleakex.MainApplication
│    ↓ AnimationsManager.mReanimatedNativeHierarchyManager
│                        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
├─ com.swmansion.reanimated.layoutReanimation.ReanimatedNativeHierarchyManager
│  instance
│    Leaking: UNKNOWN
│    Retaining 130.6 kB in 2272 objects
│    ↓ NativeViewHierarchyManager.mTagsToViews
│                                 ~~~~~~~~~~~~
├─ android.util.SparseArray instance
│    Leaking: UNKNOWN
│    Retaining 128.5 kB in 2252 objects
│    ↓ SparseArray.mValues
│                  ~~~~~~~
├─ java.lang.Object[] array
│    Leaking: UNKNOWN
│    Retaining 127.7 kB in 2250 objects
│    ↓ Object[10]
│            ~~~~
├─ com.swmansion.rnscreens.Screen instance
│    Leaking: UNKNOWN
│    Retaining 1.2 kB in 17 objects
│    View not part of a window view hierarchy
│    View.mAttachInfo is null (view detached)
│    View.mID = R.id.null
│    View.mWindowAttachCount = 1
│    mContext instance of com.facebook.react.uimanager.ThemedReactContext,
│    wrapping activity com.memoryleakex.MainActivity with mDestroyed = false
│    ↓ Screen.fragment
│             ~~~~~~~~
╰→ com.swmansion.rnscreens.ScreenStackFragment instance
​     Leaking: YES (ObjectWatcher was watching this because com.swmansion.
​     rnscreens.ScreenStackFragment received Fragment#onDestroy() callback and
​     Fragment#mFragmentManager is null)
​     Retaining 2.1 kB in 70 objects
​     key = 431488e0-1563-4ac6-abe4-e7aa87573a51
​     watchDurationMillis = 13973
​     retainedDurationMillis = 8959

METADATA

Build.VERSION.SDK_INT: 33
Build.MANUFACTURER: Google
LeakCanary version: 2.11
App process name: com.memoryleakex
Class count: 25615
Instance count: 208579
Primitive array count: 134564
Object array count: 30057
Thread count: 36
Heap total bytes: 27092713
Bitmap count: 0
Bitmap total bytes: 0
Large bitmap count: 0
Large bitmap total bytes: 0
Stats: LruCache[maxSize=3000,hits=125155,misses=213442,hitRate=36%]
RandomAccess[bytes=10621686,reads=213442,travel=63094962345,range=32804465,size=
40362715]
Analysis duration: 4599 ms
┬───
│ GC Root: System class
│
├─ android.app.ActivityThread class
│    Leaking: NO (MessageQueue↓ is not leaking and a class is never leaking)
│    ↓ static ActivityThread.sMainThreadHandler
├─ android.app.ActivityThread$H instance
│    Leaking: NO (MessageQueue↓ is not leaking)
│    ↓ Handler.mQueue
├─ android.os.MessageQueue instance
│    Leaking: NO (ScreenStackFragment$ScreensCoordinatorLayout↓ is not leaking
│    and MessageQueue#mQuitting is false)
│    HandlerThread: "main"
│    ↓ MessageQueue[2]
├─ android.os.Message instance
│    Leaking: NO (ScreenStackFragment$ScreensCoordinatorLayout↓ is not leaking)
│    Message.what = 0
│    Message.when = 6834686 (18 ms before heap dump)
│    Message.obj = null
│    Message.callback = instance @326561568 of androidx.fragment.app.
│    FragmentAnim$EndViewTransitionAnimation
│    Message.target = instance @323530224 of android.view.
│    ViewRootImpl$ViewRootHandler
│    ↓ Message.callback
├─ androidx.fragment.app.FragmentAnim$EndViewTransitionAnimation instance
│    Leaking: NO (ScreenStackFragment$ScreensCoordinatorLayout↓ is not leaking)
│    ↓ FragmentAnim$EndViewTransitionAnimation.mChild
├─ com.swmansion.rnscreens.ScreenStackFragment$ScreensCoordinatorLayout instance
│    Leaking: NO (View attached)
│    View is part of a window view hierarchy
│    View.mAttachInfo is not null (view attached)
│    View.mWindowAttachCount = 1
│    mContext instance of com.memoryleakex.MainActivity with mDestroyed = false
│    ↓ ScreenStackFragment$ScreensCoordinatorLayout.mFragment
│                                                   ~~~~~~~~~
╰→ com.swmansion.rnscreens.ScreenStackFragment instance
​     Leaking: YES (ObjectWatcher was watching this because com.swmansion.
​     rnscreens.ScreenStackFragment received Fragment#onDestroy() callback.
​     Conflicts with Fragment#mFragmentManager is not null)
​     Retaining 902 B in 26 objects
​     key = 4dfcd67f-eb2d-40cb-9641-f8d58deb77f4
​     watchDurationMillis = 1686
​     retainedDurationMillis = -1
​     key = 0ce799d6-6f51-49f0-bb09-2b0e9f3dc902
​     watchDurationMillis = 3386
​     key = b628b2b0-75ab-4aa6-aaa7-b96c7922244c
​     watchDurationMillis = 5455
​     retainedDurationMillis = 454
​     key = 0719754b-65c3-4230-86bd-a777fb988b02
​     watchDurationMillis = 7621
​     retainedDurationMillis = 2620
​     key = 89e63116-9a98-4a7b-9c36-392ed605bf07
​     watchDurationMillis = 15253
​     retainedDurationMillis = 10253

METADATA

Build.VERSION.SDK_INT: 33
Build.MANUFACTURER: Google
LeakCanary version: 2.11
App process name: com.memoryleakex
Class count: 25658
Instance count: 211592
Primitive array count: 135131
Object array count: 30509
Thread count: 40
Heap total bytes: 27159503
Bitmap count: 0
Bitmap total bytes: 0
Large bitmap count: 0
Large bitmap total bytes: 0
Stats: LruCache[maxSize=3000,hits=124877,misses=212509,hitRate=37%]
RandomAccess[bytes=10572164,reads=212509,travel=64191078225,range=32940463,size=
40503693]
Analysis duration: 5223 ms

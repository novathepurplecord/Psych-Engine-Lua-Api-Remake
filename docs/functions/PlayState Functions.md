---
description: "General functions related to the Game State, Song and Cutscenes."
---
### General functions related to the Game State, Song and Cutscenes.

## startCountdown

**Usage:** `startCountdown()`  
Starts the countdown, should be used after finishing your Pre-Song Cutscene.

---

## endSong

**Usage:** `endSong()`  
Ends the song, can be cancelled through the Lua/HScript callback `onEndSong` to make cutscenes.

---

## getSongPosition

**Usage:** `getSongPosition()`  
Returns the current song position, in milliseconds.

---

## restartSong

**Usage:** `restartSong(?skipTransition:Bool = false):Void`  
Restarts the song, pretty self-explanatory.

- **`skipTransition` (Optional)** - Skips fade in/out transition, defaults to `false`.

---

## exitSong

**Usage:** `exitSong(?skipTransition:Bool = false):Void`  
Quits the song and goes back to Freeplay/Story Mode based on where you started.

- **`skipTransition` (Optional)** - Skips fade in/out transition, defaults to `false`.

---

## loadSong

**Usage:** `loadSong(?name:String = null, ?difficultyNum:Int = -1):Void`  
Loads the chart for a song.

- **`name` (Optional)** - Song name (e.g., "Bopeebo", "Lit Up").
- **`difficultyNum` (Optional)** - Week's difficulty number (`0 = Easy`, `1 = Normal`, `2 = Hard`). Use `-1` to keep the same as current.

---

## triggerEvent

**Usage:** `triggerEvent(name:String, ?value1:String = '', ?value2:String = ''):Bool`  
Calls an event and uses two arguments for it, exactly like the Chart Editor does. Should always return `true`.

- **`name`** - Event name.
- **`value1` (Optional)** - Does the same as what the event says in the Chart Editor.
- **`value2` (Optional)** - Does the same as what the event says in the Chart Editor.

### Examples:
```lua
triggerEvent('Hey!', 'BF', 0.6) -- Calls "Hey!" event.
```

---

## setHealthBarColors

**Usage:** `setHealthBarColors(left:String, right:String):Void`  
Changes health bar colors.

- **`left`** - Color hexadecimal string or [color name](https://api.haxeflixel.com/flixel/util/FlxColor.html) for the left side.
- **`right`** - Color hexadecimal string or [color name](https://api.haxeflixel.com/flixel/util/FlxColor.html) for the right side.

### Examples:
```lua
setHealthBarColors('FF0000', '00FF00') -- Makes left side red and right side lime.
setHealthBarColors('red', 'lime') -- Same as above, but using color names.
```

---

## setTimeBarColors

**Usage:** `setTimeBarColors(left:String, right:String):Void`  
Changes time bar colors.

- **`left`** - Color hexadecimal string or [color name](https://api.haxeflixel.com/flixel/util/FlxColor.html) for the left side.
- **`right`** - Color hexadecimal string or [color name](https://api.haxeflixel.com/flixel/util/FlxColor.html) for the right side.

### Examples:
```lua
setTimeBarColors('FF0000', '00FF00') -- Makes left side red and right side lime.
setTimeBarColors('red', 'lime') -- Same as above, but using color names.
```

---

## startDialogue

**Usage:** `startDialogue(dialogueFile:String, ?music:String):Void`  
Loads a dialogue `.json` inside the chart folder, handles translation loading automatically.

- **`dialogueFile`** - Dialogue file `.json` name.
- **`music` (Optional)** - Plays background music inside the `music/` folder.

### Examples:
```lua
startDialogue('dialogue') -- Loads "dialogue.json", prefers localized version if available.
startDialogue('dialogue', 'breakfast') -- Plays "Breakfast" as background music.
```

---

## startVideo

**Usage:** `startVideo(videoFile:String, ?canSkip:Bool = true, ?forMidSong:Bool = false, ?shouldLoop:Bool = false, ?playOnLoad:Bool = true):Void`  
Plays a video cutscene.

- **`videoFile`** - Video `.mp4` file inside `videos/` folder (exclude the extension!).
- **`canSkip` (Optional)** - Allows skipping the video by holding Enter for a second. Defaults to `true`.
- **`forMidSong` (Optional)** - Prevents starting/ending the song after the video. Needed for mid-song cutscenes. Defaults to `false`.
- **`shouldLoop` (Optional)** - Loops the video once finished. Defaults to `false`.
- **`playOnLoad` (Optional)** - Starts playing instantly after loading. Defaults to `true`.

### Examples:
```lua
startVideo('test_video') -- Plays "mods/My-Mod/videos/test_video.mp4".
```


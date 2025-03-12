---
sidebar_position: 1
---

# Running a Script

### There are 6 types of LUA Scripts you can run:

- **General Script:** It should be saved in mods/My-Mod/scripts/, it will always run in every Song as long as the Mod is loaded.

- **Song Script(s):** They should be saved inside the song's chart folder, it will only run in this specific song, no matter the Difficulty, Stage or anything else.

- **Stage Script:** It will only run if the song's stage is loaded in the current chart, it should have the same name as your stage's .JSON file and should be inside

- **Note Type Script:** It will only run if the named Note Type is being used in the current chart, it should be inside mods/My-Mod/custom_notetypes/.

- **Event Script:** It will only run if the said Event is being used on the chart, it should be located inside mods/My-Mod/custom_events/.

- **Character Script:** It will only be run if the specified character is used on the current Song. You can use variables dadName, boyfriendName and gfName to check the current character used's name. Should be in mods/My-Mod/characters/.

```lua
(if dadName == 'pico') --for example
```

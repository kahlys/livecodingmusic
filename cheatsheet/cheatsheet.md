# Strudel

## Basics

### Sequence

|Concept|Description|Example|
|---|---|---|
|Sequence|play sequence in one cycle|`"bd bd dn hh"`|
|Sample Number|select :x sample|`"hh:0 hh:1"`|
|Silence|no sound|`"bd - hh -"`|
|Sub sequence|create a sub sequence|`"bd [bd hh] bd hh"`|
|Faster|faster *x|`"bd*2 cp*3"`|
|Slower|slower /*|`"[c a f e]/2"`|
|Same time|, play both sequence in parallel|`"bd*2, hh*2 [hh oh]"`|
|Alternate|<x y> will play x the first time and y the second time|`"c <e g>"`|
|Extend|extend duration by @x|`"c@3 e"`|
|Repeat|repeat !x times|`"c!3 e"`|

### Sounds

|Concept|Example|
|---|---|
|Play sound|`sound("bd sd")`|
|Select bank|`sound("bd sd").bank("RolandTR909")`|
|Play different sample number|`n("0 1 4 2").sound("jazz")`|
|Play notes|`note("bgec").sound("piano")`|
|Play notes in scale|`n("6 4 2 0").scale("C:minor").sound("piano")`|
|Play in parallel|`stack(s("bd sd"),note("c eb g"))`|

### Effects

**Audio**

|Concept|Example|
|---|---|
|low pass filter|`note("c2 c3").s("sawtooth").lpf("<400 2000>")`|
|volume|`s("hh*8").gain("[.25 1]*2")`|
|delay|`s("bd rim").delay(.5)`|
|reverb|`s("bd rim").room(.5)`|
|pan|`s("bd rim").pan("0 1")`|
|sample speed (-x for reverse)|`s("bd rim").speed("<1 2 -1 -2>")`|
|range|`s("hh*16").lpf(saw.range(200,4000))`|
|rand range|`s("hh*16").gain(rand.range(0.1,0.5))`|
|remove random event|`s("hh*16").gain(rand.range(0.1,0.5)).degradeBy(.1)`|
|cut a piece of a span (offset, len)|`note("<c d e f>").ribbon(1, 2)`|
|vowel like||`note("c3 eb3 g3").s("sawtooth").vowel("<a e i o>"`|

**Patterns**

|Concept|Example|
|---|---|
|fast|`sound("bd sd").fast(2)`|
|slow|`sound("bd sd").slow(2)`|
|reverse|`n("0 2 4 6").scale("C:minor").rev()`|
|juxtapose|`n("0 2 4 6").scale("C:minor").jux(rev)`|
|add interval|`n("0 2 4 6".add("<0 1 2 1>")).scale("C:minor")`|
|repeat each event x times|`s("bd sd").ply("<1 2 3>")`|

### Tools

- Visualization : `x._scope()` or `x._pianoroll()`
- Slider : `slider(initial, min, max, step)`
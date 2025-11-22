# Techno Patterns Cheatsheet

## Build-ups & Transitions

### Rising Octaves
Create tension with ascending octaves in build-ups:
```javascript
note("[c3 c4 c5 c6]*4").s("sawtooth")
```

### Dramatic Ascending Pattern
Build drama with ascending melodic movement:
```javascript
n("0 1 0 2 0 3 0 4").scale("C:minor").transpose(12).sound("sawtooth")
```

### Resolving Descending Pattern
Release tension with descending patterns:
```javascript
n("0 4 0 3 0 2 0 1").scale("C:minor").transpose(12).sound("sawtooth").release(0.2).delay(0.7).fm(0.375).fmwave("white")
```

## Drum Patterns

### Basic Kick with Clap Lead-in
Classic techno kick with syncopated clap pattern:
```javascript
stack("bd*4", "[[-  [- clap:3]] clap]*2")
```

### Hi-Hat Variations

**16th Note Pattern with Randomization:**
```javascript
stack(
  n("4*16").s("hh").attack(rand.range(0, .1))
    .nudge(perlin.range(0, 0.01)).gain(1.3),
  s("bd*4")
)
```

**Offbeat Hi-Hats:**
```javascript
stack(
  n("[0 1]*4").s("hh"),
  s("bd*4")
)
```

## Bass Patterns

### Rolling Bassline with Sidechain Effect
Create the classic pumping techno bass:
```javascript
stack(
  n("0*16").scale("D:minor").transpose(-12).sound("sawtooth")
    .gain("[0.2 0.9 1 0.9]*4") // fake sidechain compression
    .lpf(sequence(
      perlin.range(200, 400),
      perlin.range(300, 500),
      perlin.range(400, 800),
      perlin.range(700,1200)
    ).fast(4)),
  s("bd*4")
)
```

### Offbeat Bass
Syncopated bass pattern:
```javascript
stack(
  n("0*8").scale("D:minor").transpose(-12).sound("sawtooth")
    .legato(1.1).gain("[0.2 0.9]*4"),
  s("bd*4")
)
```

### Groovy Masked Bass
Add rhythmic interest with masking:
```javascript
stack(
  n("0*8").scale("D:minor")
    .mask("<1 1 0 1 0 0 1 1 1 1 0 1 0 0 1 1>*8")
    .transpose(-12).sound("sawtooth").legato(1.1)
    .gain("[0.2 0.9]".fast(4)),
  s("bd*4")
)
```

### Semitone Movement Bass
Add harmonic movement with semitone shifts:
```javascript
stack(
  n("0*16").scale("D:minor").sound("sawtooth").transpose(-12)
    .gain("[0.2 0.9]*4")
    .transpose("<0 0 1 0 0 0 -1 0 0 1 1 1 -1 -1 0 0>*16")
    .lpf("1000:0 1000:10 1000:30 1000:20"), // freq:resonance (0-50)
  s("bd*4").gain(0.5)
)
```

## Ambient & Melodic Elements

### Ambient Arpeggios
Create atmosphere with repeating patterns:
```javascript
n("[0 4 5 4]*4") // 0-indexed scale degrees
.scale("D:minor").sound("sawtooth").legato(0.5)
```

### Melancholic Chords
Emotional chord progressions:
```javascript
n("[0,4,9] [0,5,9]")
.scale("C:minor").transpose(12).sound("gm_fx_echoes")
```

### 6-4-1 Progression
Classic harmonic movement:
```javascript
n("[[5,7,9] [3,5,7]] [0,2,4]").slow(2)
.scale("C:minor").transpose(12).sound("gm_fx_echoes")
```

**Separated Voicing Version:**
```javascript
n("[[5,14,9] [3,12,7]] [0,9,4]").slow(2)
.scale("C:minor").transpose(12).sound("sawtooth")
```

## Production Tips

- **Sidechain Effect:** Use `.gain("[0.2 0.9]*4")` to fake sidechain compression
- **Filter Sweeps:** Combine `perlin.range()` with `.lpf()` for smooth filter movement
- **Randomization:** Add `rand.range()` and `perlin.range()` for organic feel
- **Scale Degrees:** Remember scale degrees are 0-indexed (0 = root, 4 = 5th, etc.)
- **LPF Resonance:** Use `"freq:resonance"` format, resonance range 0-50

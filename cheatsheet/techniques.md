# Techniques

**Add more chaos**

- add delay: `.delay(0.7)`
- add noises: `.fm(slider(0.2)).fmwave("white")`

**Random Pulse**

- Using scrub: `scrub(rand.seg(8).degradeBy(.6).rib(46,2))`
- Using perlin `.struct(perlin.round().fast(8).seg(16).rib(14,1).degradeBy(.6))`
- On gain: `.gain(rand.range(0.1,0.5)).degradeBy(.1)`

Using struct and rand with mul. The rand generates random values between 0 and 1, then we round them to get either 0 or 1. Multiplying by .6 gives random values between 0 and 0.6, which can be used to create rhythmic patterns with less density. If we multiply by a higher value, the pattern becomes denser. *We can raise the mul value to increase density as the track progresses.*
`s("tr808_rim:1").struct(rand.round().mul(.6).seg(16).rib(3,2))`

Using the almostNever function, it will almost never trigger an event. The ply pattern "2 | 4" means it will repeat 2 or 4times the event.
- `s("tg33_sh:1").vstruct("<1 .4>*16").almostNever(ply("2 | 4"))`

**Raiser**

- `s("pulse!8").fm(time).fmh(time).room(1).gain(.6)`

## Generator

- Random arp using irand: `n(irand(8)).scale('C4:minor').s("supersaw").segment(8).rib(4,2)`
- Random arp using scramble: `note("0 2 -1 4").scale('C4:minor').sound("sawtooth")`

## Block Arrange

```js
await (async () => { (0, eval)(await (await fetch('https://raw.githubusercontent.com/switchangel/strudel-scripts/refs/heads/main/prebake.strudel')).text()); })();

const bd = s("bd").bank("tr909").struct("x*4")
const hat = s("hh").bank("tr909").struct("<~ x>*4")
const bass = s("e2").struct("x*16").s("supersaw")

$: blockArrange(
    [ 
      [[bd],       "<1 1 1 1 1 1 1 1 1 1>"],
      [[bass],     "<0 0 1 1 1 S V Y 1 T>"],
      [[hat],      "<0 1 1 1 1 1 1 1 G G>"],  
    ],
    //ADD CUSTOM BINDINGS
    [[(m) => m.includes('S') , (x) => x.hpf(500)],
     [(m) => m.includes('T') , (x) => x.hpf(100)],
     [(m) => m.includes('G') , (x) => x.ply(2)],
     [(m) => m.includes('V') , (x) => x.lpf(200)],
     [(m) => m.includes('W') , (x) => x.lpf(500)],
     [(m) => m.includes('X') , (x) => x.lpf(1000)],
     [(m) => m.includes('Y') , (x) => x.lpf(2500)],
     [(m) => m.includes('Z') , (x) => x.lpf(4000)],
    ]
  )
  // .rib(1,3) // START - LENGTH
  ._punchcard()
```
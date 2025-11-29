# Techniques

**Add more chaos**

- add delay: `.delay(0.7)`
- add noises: `.fm(slider(0.2)).fmwave("white")`

**Random Pulse**

- Using scrub: `scrub(rand.seg(8).degradeBy(.6).rib(46,2))`
- Using perlin `.struct(perlin.round().fast(8).seg(16).rib(14,1).degradeBy(.6))`
- On gain: `.gain(rand.range(0.1,0.5)).degradeBy(.1)`
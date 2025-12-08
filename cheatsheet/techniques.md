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
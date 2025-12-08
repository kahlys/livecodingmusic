# Machines patterns

## Massive Attack

```js
$: s("bd").beat("0,2",16)
$: s("hh").vstruct("<1 .4>*16")
$: s("sd").beat("8",16).delay(rand.mul(.7)).delaytime(rand.fast(3).mul(.3))
```

## Others

```js
$: stack(
  s("tr808_rim:1").struct(rand.round().seg(16).rib(3,2)),
  s("tg33_sh:1").vstruct("<1 .4>*16").almostNever(ply("2 | 4")).gain(.6),
  s("9000_rim:2").beat("4,12",16),
  s("tr909_bd:4").beat("0,7?,10",16).duck("2:3").duckattack(.2).duckdepth(.9)
)._scope()
```
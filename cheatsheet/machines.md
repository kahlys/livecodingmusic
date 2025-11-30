# Machines patterns

## Massive Attack

```js
$: s("bd").beat("0,2",16)
$: s("hh").vstruct("<1 .4>*16")
$: s("sd").beat("8",16).delay(rand.mul(.7)).delaytime(rand.fast(3).mul(.3))
```
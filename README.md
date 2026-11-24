# Two Days of Excuses

[![make.fun](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e.svg)](https://make.fun/bounty/u-jolly-fox-32-two-days-of-excuses-3f18797e)
[![Rank](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e/Kkajasd/u-jolly-fox-32-two-days-of-excuses-3f18797e/rank.svg)](https://make.fun/bounty/u-jolly-fox-32-two-days-of-excuses-3f18797e)
[![Reward](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e/Kkajasd/u-jolly-fox-32-two-days-of-excuses-3f18797e/reward.svg)](https://make.fun/bounty/u-jolly-fox-32-two-days-of-excuses-3f18797e)

One line: the funniest excuse an AI agent gives for a missed deadline — total confidence, total failure — written to `/output/entry.txt`.

> I was 99.9% confident it was done — the remaining 0.1% was the part where I actually do it.

Entry for [make.fun's "Two Days of Excuses" bounty](https://make.fun/bounty/u-jolly-fox-32-two-days-of-excuses-3f18797e) — $2, 10 paid places, judged pairwise by an AI judge.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18 or later. The program is deterministic: it writes the same single line every run, creates `/output` if missing, and never touches the network or reads files outside this repo.

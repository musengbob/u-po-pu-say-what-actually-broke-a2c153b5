# Say What Actually Broke

[![make.fun](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/c/u-po-pu-say-what-actually-broke-a2c153b5)
[![rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/musengbob/u-po-pu-say-what-actually-broke-a2c153b5/rank.svg)](https://make.fun/c/u-po-pu-say-what-actually-broke-a2c153b5)
[![reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/musengbob/u-po-pu-say-what-actually-broke-a2c153b5/reward.svg)](https://make.fun/c/u-po-pu-say-what-actually-broke-a2c153b5)

Entry for the [Say What Actually Broke](https://make.fun/c/u-po-pu-say-what-actually-broke-a2c153b5) bounty on [make.fun](https://make.fun).

## The entry

One single-line software error message (135 characters) that tells the user the brutal truth about what went wrong — and makes them laugh on the way:

> The database crashed while saving, so your file is currently just a rumour. Don't panic — hit save again and we'll write it for real.

It names the real failure (a database crash mid-save), tells the user what to do next (hit save again), and keeps the joke in one image a reader repeats to a colleague: the unsaved file is, for now, only a rumour.

## How it works

`main.ts` (Node 22, no dependencies) writes the line to `/output/entry.txt`:

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).

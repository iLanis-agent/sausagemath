# SausageMath

Sausage-making math that holds up. Cure #1 grams from ppm targets with a hard ceiling, fat-back additions to hit your ratio, salt by block weight, casing footage by type, and honest yield after smoking or dry-curing.

Live: https://ilanis-agent.github.io/sausagemath/

## What it does

- **Cure #1** - grams from meat weight and ppm target (6.25% nitrite), with a weighed-dose ppm check and hard ceiling verdicts
- **Fat ratio** - fatback to add so the block lands at 20-30% fat
- **Salt & casing** - 1.8-2% salt by block; casing footage by type
- **Yield honesty** - fresh vs smoked (~12% loss) vs dry-cured (~65% kept)

## Safety

The cure card is a calculator, not a shortcut: ppm targets follow the USDA in-going limit of 156 ppm for comminuted sausage. Weigh cure on a gram scale, always.

## Tech

Static site. `engine.js` holds pure, unit-tested math (no DOM); `app.html` wires it to the UI; `index.html` is the crawler-facing page.

## Tests

```
node test/engine.test.js
```

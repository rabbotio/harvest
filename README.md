# harvest
🐝 Project Harvest (ハーヴェスト Hāvesuto)

## Develop
```
# Server
cd server
npm i
npm run dev
npm run mon

# Client
cd web
yarn install
yarn start
```

## Modules
```js
🐜 probe        // Will gathering and provide current coins price.
🐮 trader       // Will trade at current market price.
🐯 tracer       // Will collect data for analysis later.
🐝 arbitrager   // Will execute deposit/trade/withdraw and tracing each step.
🕷 web          // Will provide web command interface.
🤖 chatbot      // Will provide chat command interface.
```

## TODO
### Server
#### Infra
- [ ] Domain name
- [ ] SSL
- [ ] Helm
- [ ] Email MX
- [ ] Redis HA

#### Probe
- [ ] Exchange adapter https://github.com/donbobvanbirt/coin-ticker
- [ ] Result as graph node for made decision and render as routes.
- [ ] Resolver for each market.
- [ ] Can swap price e.g. `eth_omg` or `omg_eth`.

### Trader
- [ ] It can deposit and return the results.
- [ ] It can trade and return the results.
- [ ] It can withdraw and return the results.

### Arbitrager
- [ ] It can ask trader to trade and handle the results.
- [ ] It can ask trader to deposit and handle the results.
- [ ] It can ask trader to withdraw and handle the results.

### Tracer
- [ ] It can collect the results.
- [ ] It can provide average results data.

### Client
#### Web
- [ ] It can load prices data from server and show as routes.
- [ ] It can show list of routes and sort by most profit.
- [ ] Input field for start funding.
- [ ] Input field for exchange API key.
- [ ] It has enabled `start` button.
- [ ] It has `resume` with count down for 3 sec button each step
- [ ] It has `pause` button each step for stop process.
- [ ] It can trade on web via trader lib.
- [ ] It can store encrypted `API-KEY` by `uuid` at local storage.
- [ ] It can pin and compare route.
- [ ] It can show current state of arbitrage.

#### Arbitrager
- [ ] It can deposit.
- [ ] It can trade.
- [ ] It can withdraw.

#### Chatbot
- [ ] Can set and notify user about profit.
- [ ] Open web and link `uuid` for local storage auto-fill `API-KEY` at client side if possible.

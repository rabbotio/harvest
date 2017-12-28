var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a = require('@rabbotio/fetcher'), getJSON = _a.getJSON, postJSON = _a.postJSON;
var Harvester = /** @class */ (function () {
    function Harvester() {
    }
    Harvester.prototype.fetch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var factor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // TODO : use real price
                    return [4 /*yield*/, getJSON("https://bx.in.th/api/").then(console.log)
                        // TODO : Market adapter
                        // TODO : GraphQL
                    ];
                    case 1:
                        // TODO : use real price
                        _a.sent();
                        factor = {
                            loading: false,
                            tradingFees: {
                                bx: 0.25,
                                binance: 0.1
                            },
                            // TODO : define const and recheck at page https://support.binance.com/hc/en-us/articles/115000429332
                            withdrawFees: {
                                bx: {
                                    eth: 0.005,
                                    omg: 0.2
                                },
                                binance: {
                                    eth: 0.01,
                                    omg: 0.3
                                }
                            },
                            // TODO : fetch from https://github.com/donbobvanbirt/coin-ticker
                            prices: [
                                {
                                    last: 26574.999657655392881,
                                    pair: 'eth_thb',
                                    exchange: 'bx'
                                },
                                {
                                    last: 1 / 26574.999657655392881,
                                    pair: 'thb_eth',
                                    exchange: 'bx'
                                },
                                {
                                    last: 569.5,
                                    pair: 'omg_thb',
                                    exchange: 'bx'
                                },
                                {
                                    last: 0.021317,
                                    pair: 'omg_eth',
                                    exchange: 'binance'
                                },
                                {
                                    last: 1 / 0.021317,
                                    pair: 'eth_omg',
                                    exchange: 'binance'
                                }
                            ]
                        };
                        return [2 /*return*/, factor.prices];
                }
            });
        });
    };
    return Harvester;
}());
module.exports = Harvester;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsaUNBQW9ELEVBQWxELG9CQUFPLEVBQUUsc0JBQVEsQ0FBaUM7QUFFMUQ7SUFBQTtJQTJEQSxDQUFDO0lBMURPLHlCQUFLLEdBQVg7Ozs7OztvQkFDRSx3QkFBd0I7b0JBQ3hCLHFCQUFNLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO3dCQUV4RCx3QkFBd0I7d0JBQ3hCLGlCQUFpQjtzQkFIdUM7O3dCQUR4RCx3QkFBd0I7d0JBQ3hCLFNBQXdELENBQUE7d0JBS2xELE1BQU0sR0FBRzs0QkFDYixPQUFPLEVBQUUsS0FBSzs0QkFFZCxXQUFXLEVBQUU7Z0NBQ1gsRUFBRSxFQUFFLElBQUk7Z0NBQ1IsT0FBTyxFQUFFLEdBQUc7NkJBQ2I7NEJBRUQscUdBQXFHOzRCQUNyRyxZQUFZLEVBQUU7Z0NBQ1osRUFBRSxFQUFFO29DQUNGLEdBQUcsRUFBRSxLQUFLO29DQUNWLEdBQUcsRUFBRSxHQUFHO2lDQUNUO2dDQUNELE9BQU8sRUFBRTtvQ0FDUCxHQUFHLEVBQUUsSUFBSTtvQ0FDVCxHQUFHLEVBQUUsR0FBRztpQ0FDVDs2QkFDRjs0QkFFRCxpRUFBaUU7NEJBQ2pFLE1BQU0sRUFBRTtnQ0FDTjtvQ0FDRSxJQUFJLEVBQUUscUJBQXFCO29DQUMzQixJQUFJLEVBQUUsU0FBUztvQ0FDZixRQUFRLEVBQUUsSUFBSTtpQ0FDZjtnQ0FDRDtvQ0FDRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLHFCQUFxQjtvQ0FDL0IsSUFBSSxFQUFFLFNBQVM7b0NBQ2YsUUFBUSxFQUFFLElBQUk7aUNBQ2Y7Z0NBQ0Q7b0NBQ0UsSUFBSSxFQUFFLEtBQUs7b0NBQ1gsSUFBSSxFQUFFLFNBQVM7b0NBQ2YsUUFBUSxFQUFFLElBQUk7aUNBQ2Y7Z0NBQ0Q7b0NBQ0UsSUFBSSxFQUFFLFFBQVE7b0NBQ2QsSUFBSSxFQUFFLFNBQVM7b0NBQ2YsUUFBUSxFQUFFLFNBQVM7aUNBQ3BCO2dDQUNEO29DQUNFLElBQUksRUFBRSxDQUFDLEdBQUcsUUFBUTtvQ0FDbEIsSUFBSSxFQUFFLFNBQVM7b0NBQ2YsUUFBUSxFQUFFLFNBQVM7aUNBQ3BCOzZCQUNGO3lCQUNGLENBQUE7d0JBQ0Qsc0JBQU8sTUFBTSxDQUFDLE1BQU0sRUFBQTs7OztLQUNyQjtJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQTNERCxJQTJEQztBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBnZXRKU09OLCBwb3N0SlNPTiB9ID0gcmVxdWlyZSgnQHJhYmJvdGlvL2ZldGNoZXInKVxuXG5jbGFzcyBIYXJ2ZXN0ZXIge1xuICBhc3luYyBmZXRjaCgpIHtcbiAgICAvLyBUT0RPIDogdXNlIHJlYWwgcHJpY2VcbiAgICBhd2FpdCBnZXRKU09OKGBodHRwczovL2J4LmluLnRoL2FwaS9gKS50aGVuKGNvbnNvbGUubG9nKVxuXG4gICAgLy8gVE9ETyA6IE1hcmtldCBhZGFwdGVyXG4gICAgLy8gVE9ETyA6IEdyYXBoUUxcblxuICAgIGNvbnN0IGZhY3RvciA9IHtcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuXG4gICAgICB0cmFkaW5nRmVlczoge1xuICAgICAgICBieDogMC4yNSxcbiAgICAgICAgYmluYW5jZTogMC4xXG4gICAgICB9LFxuXG4gICAgICAvLyBUT0RPIDogZGVmaW5lIGNvbnN0IGFuZCByZWNoZWNrIGF0IHBhZ2UgaHR0cHM6Ly9zdXBwb3J0LmJpbmFuY2UuY29tL2hjL2VuLXVzL2FydGljbGVzLzExNTAwMDQyOTMzMlxuICAgICAgd2l0aGRyYXdGZWVzOiB7XG4gICAgICAgIGJ4OiB7XG4gICAgICAgICAgZXRoOiAwLjAwNSxcbiAgICAgICAgICBvbWc6IDAuMlxuICAgICAgICB9LFxuICAgICAgICBiaW5hbmNlOiB7XG4gICAgICAgICAgZXRoOiAwLjAxLFxuICAgICAgICAgIG9tZzogMC4zXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8vIFRPRE8gOiBmZXRjaCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9kb25ib2J2YW5iaXJ0L2NvaW4tdGlja2VyXG4gICAgICBwcmljZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhc3Q6IDI2NTc0Ljk5OTY1NzY1NTM5Mjg4MSxcbiAgICAgICAgICBwYWlyOiAnZXRoX3RoYicsXG4gICAgICAgICAgZXhjaGFuZ2U6ICdieCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhc3Q6IDEgLyAyNjU3NC45OTk2NTc2NTUzOTI4ODEsXG4gICAgICAgICAgcGFpcjogJ3RoYl9ldGgnLFxuICAgICAgICAgIGV4Y2hhbmdlOiAnYngnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYXN0OiA1NjkuNSwgLy8gNTg3Ljc2NixcbiAgICAgICAgICBwYWlyOiAnb21nX3RoYicsXG4gICAgICAgICAgZXhjaGFuZ2U6ICdieCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhc3Q6IDAuMDIxMzE3LFxuICAgICAgICAgIHBhaXI6ICdvbWdfZXRoJyxcbiAgICAgICAgICBleGNoYW5nZTogJ2JpbmFuY2UnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYXN0OiAxIC8gMC4wMjEzMTcsXG4gICAgICAgICAgcGFpcjogJ2V0aF9vbWcnLFxuICAgICAgICAgIGV4Y2hhbmdlOiAnYmluYW5jZSdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgICByZXR1cm4gZmFjdG9yLnByaWNlc1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSGFydmVzdGVyIl19
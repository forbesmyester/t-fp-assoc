"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const utils_1 = require("../src/utils");
ava_1.default('can assoc', (t) => {
    t.deepEqual(utils_1.default('a', 1, { b: 2 }), { a: 1, b: 2 });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0L3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQXVCO0FBQ3ZCLHdDQUFpQztBQUVqQyxhQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNoQixDQUFDLENBQUMsU0FBUyxDQUNQLGVBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQ3JCLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQ2YsQ0FBQztBQUNOLENBQUMsQ0FBQyxDQUFDIn0=
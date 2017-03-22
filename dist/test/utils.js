"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const utils_1 = require("../src/utils");
ava_1.default('can assoc', (t) => {
    let input = { b: 2 };
    let result = utils_1.default('a', 'one', input);
    t.deepEqual(result, { a: 'one', b: 2 });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0L3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQXVCO0FBQ3ZCLHdDQUFpQztBQUVqQyxhQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNoQixJQUFJLEtBQUssR0FBMEIsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUM7SUFDMUMsSUFBSSxNQUFNLEdBQUcsZUFBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO0FBQzFDLENBQUMsQ0FBQyxDQUFDIn0=
import { describe, expect, it } from "vitest";
import { lotSize, pipValue } from "@/lib/calc";
describe("calculators", () => {
  it("1 lot is $10 per pip", () => expect(pipValue(1)).toBe(10));
  it("$1000, 1% risk, 20 pip SL = 0.05 lots", () => expect(lotSize(1000, 1, 20)).toBeCloseTo(0.05));
});

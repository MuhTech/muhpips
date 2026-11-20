import { describe, expect, it } from "vitest";

import { levels } from "@/lib/content";

describe("Lesson access rules", () => {
  it("keeps Beginner free and gates Intermediate and Professional", () => {
    const plans = Object.fromEntries(levels.map((l) => [l.en, l.plan]));

    expect(plans).toEqual({ Beginner: "Free", Intermediate: "Pro", Professional: "Elite" });
  });
});

import { expect, test } from "vitest";
import { sum } from "./sum";

test('adds 1+2 to equal 3',()=>{
    expect(sum(4,2)).toBe(6)
})
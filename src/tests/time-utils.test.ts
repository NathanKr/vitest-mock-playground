import { test, describe, afterEach, vi, expect, beforeEach } from "vitest";
import { LogAfterOneSec, LogEachSec } from "../logic/time-utils";

describe("time tests", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test("mock setTimeout", () => {
    const spy = vi.spyOn(console, "log");
    LogAfterOneSec();
    // Fast-forward until all timers have been executed
    vi.runAllTimers();
    expect(spy).toBeCalledTimes(1);
  });

  test("mock setInterval", () => {
    const spy = vi.spyOn(console, "log");
    LogEachSec();
    vi.advanceTimersByTime(2000);
    expect(spy).toBeCalledTimes(2);
  });
});

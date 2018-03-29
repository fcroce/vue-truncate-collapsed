import Truncate from "../../src/truncate.vue";

describe("Test truncate component", () => {
  it("Check data list", () => {
    expect(Truncate.data()).toEqual({
      show: false
    });
  });
});

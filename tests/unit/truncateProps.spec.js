import Truncate from "../../src/truncate.vue";

const defaultLength = 100;

describe("Test truncate component", () => {
  it("Check properties list", () => {
    expect(Truncate.props).toEqual({
      text: String,
      length: {
        Number,
        default: defaultLength
      },
      clamp: String,
      less: String,
      type: {
        type: String,
        default: "text"
      },
      actionClass: {
        type: String,
        default: ""
      },
      doNotTruncateLastWord: {
        String,
        required: false
      },
      collapsedTextClass: {
        type: String,
        required: false
      }
    });
  });
});

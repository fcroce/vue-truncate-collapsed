import Vue from "vue";
import Truncate from "../../src/truncate.vue";

const component = Vue.extend(Truncate);

describe("Test truncate component methods", () => {
  it("truncates NOT breaking last word", () => {
    const vm = new component({
      propsData: {
        text: "MOCKED1 MOCKED2 MOCKED3",
        length: 10,
        doNotTruncateLastWord: "true"
      }
    }).$mount();

    const result = vm.lastWordTruncate();
    expect(result).toEqual("MOCKED1 ");
  });

  it("truncates NOT breaking last word", () => {
    const vm = new component({
      propsData: {
        text: "MOCKED1 MOCKED2 MOCKED3",
        length: 16,
        doNotTruncateLastWord: "true"
      }
    }).$mount();

    const result = vm.lastWordTruncate();
    expect(result).toEqual("MOCKED1 MOCKED2 ");
  });
});

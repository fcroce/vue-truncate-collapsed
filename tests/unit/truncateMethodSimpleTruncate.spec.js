import Vue from "vue";
import Truncate from "../../src/truncate.vue";

const component = Vue.extend(Truncate);

describe("Test truncate component methods", () => {
  it("truncates breaking the last word", () => {
    const vm = new component({
      propsData: {
        text: "MOCKED1 MOCKED2 MOCKED3",
        length: 10
      }
    }).$mount();

    const result = vm.simpleTruncate();
    expect(result).toEqual("MOCKED1 MO");
  });
});

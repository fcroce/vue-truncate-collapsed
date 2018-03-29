import Vue from "vue";
import Truncate from "../../src/truncate.vue";

const component = Vue.extend(Truncate);

describe("Test truncate component computed data", () => {
  it("Truncate text when plain text is empty", () => {
    const vm = new component({
      propsData: {
        text: ""
      }
    }).$mount();

    const result = vm.truncate;
    expect(result).toEqual("");
  });

  it("Truncate text when HTML text is empty", () => {
    const vm = new component({
      propsData: {
        text: "<span></span>",
        type: "html"
      }
    }).$mount();

    const result = vm.truncate;
    expect(result).toEqual("");
  });

  it("Truncate text when doNotTruncateLastWord is false", () => {
    const vm = new component({
      propsData: {
        text: "MOCKED1 MOCKED2 MOCKED3",
        length: 4
      }
    }).$mount();

    const result = vm.truncate;
    expect(result).toEqual("MOCK");
  });

  it("Truncate text when doNotTruncateLastWord is true", () => {
    const vm = new component({
      propsData: {
        text: "MOCKED1 MOCKED2 MOCKED3",
        length: 10,
        doNotTruncateLastWord: "true"
      }
    }).$mount();

    const result = vm.truncate;
    expect(result).toEqual("MOCKED1 ");
  });
});

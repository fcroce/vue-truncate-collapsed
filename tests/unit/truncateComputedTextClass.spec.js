import Vue from "vue";
import Truncate from "../../src/truncate.vue";

const component = Vue.extend(Truncate);

describe("Test truncate component computed data", () => {
  it("Dynamic class when collapsedTextClass is not set", () => {
    const vm = new component({
      propsData: {
        text: "MOCKED_TEXT",
        collapsedTextClass: ""
      }
    }).$mount();

    const result = vm.textClass;
    expect(result).toEqual("");
  });

  it("Dynamic class when text length lower than length", () => {
    const vm = new component({
      propsData: {
        text: "MOCKED_TEXT",
        length: 100,
        collapsedTextClass: "MOCKED_CLASS"
      }
    }).$mount();

    const result = vm.textClass;
    expect(result).toEqual("");
  });

  it("Dynamic class", () => {
    const vm = new component({
      propsData: {
        text: "MOCKED_TEXT",
        length: 1,
        collapsedTextClass: "MOCKED_CLASS"
      }
    }).$mount();

    const result = vm.textClass;
    expect(result).toEqual("MOCKED_CLASS");
  });
});

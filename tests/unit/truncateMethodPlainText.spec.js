import Vue from "vue";
import Truncate from "../../src/truncate.vue";

const component = Vue.extend(Truncate);

describe("Test truncate component methods", () => {
  it("Simple text to simple text", () => {
    const vm = new component({
      propsData: {
        text: "MOCKED1 MOCKED2 MOCKED3"
      }
    }).$mount();

    const result = vm.plainText();
    expect(result).toEqual("MOCKED1 MOCKED2 MOCKED3");
  });

  it("HTML with text to simple text", () => {
    const vm = new component({
      propsData: {
        text: "<span>MOCKED1</span> <label>MOCKED2</label> MOCKED3",
        type: "html"
      }
    }).$mount();

    const result = vm.plainText();
    expect(result).toEqual("MOCKED1 MOCKED2 MOCKED3");
  });
});

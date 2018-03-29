import Vue from "vue";
import Truncate from "../../src/truncate.vue";

const component = Vue.extend(Truncate);

describe("Test truncate component methods", () => {
  it("toggle default false to true", () => {
    const vm = new component({
      propsData: {
        text: "MOCKED"
      }
    }).$mount();

    vm.toggle();
    expect(vm.show).toEqual(true);
  });

  it("toggle true to false", () => {
    const vm = new component({
      propsData: {
        text: "MOCKED"
      },
      data: {
        show: true
      }
    }).$mount();

    vm.toggle();
    expect(vm.show).toEqual(false);
  });
});

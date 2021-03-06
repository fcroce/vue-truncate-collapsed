import Vue from "vue";
import Truncate from "../../../../src/truncate.vue";

const component = Vue.extend(Truncate);
const vm = new component({
  propsData: {
    text: "MOCKED",
    length: 6
  }
}).$mount();

describe("Test truncate component snapshots", () => {
  it("should match the snapshot for text.length == length", () => {
    expect(vm.$el).toMatchSnapshot();
  });
});

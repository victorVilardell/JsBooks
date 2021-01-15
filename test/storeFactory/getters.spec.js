import getters from "../../src/storeFactory/getters";

describe("getters Vuex", () => {
  it("categories has been changed", async () => {
    const state = {
      category: {
        category_id: 677,
        name: "Ajedrez",
        nicename: "ajedrez"
      }
    };
    const result = getters.category(state);
    expect(result).toMatchObject(state.category);
  });
});

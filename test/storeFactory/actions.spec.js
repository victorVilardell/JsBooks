import actions from "../../src/storeFactory/actions";

describe("actions Vuex", () => {
  it("categories has been changed", async () => {
    const commit = jest.fn();
    const category = {};
    actions.setCategory({ commit }, category);

    // expect(commit).toHaveBeenCalledTimes(1);
    // expect(commit.mock.calls).toEqual([["CATEGORY", {}]]);

    expect(commit).toHaveBeenCalledWith("CATEGORY", {});
  });
});

/*setCategory(context, newCategory) {
  context.commit("CATEGORY", newCategory);
}*/

/*import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { actions, mutations } from './store'
describe('actions', () => {
  let store
  let setDataMock
  beforeEach(() => {
    setDataMock = jest.fn()
    store = new Vuex.Store({
      state: { data: {} },
      mutations: mutations,
      actions: {
        getAsync: actions.getAsync
      }
    })
  })
  it('mocks an ajax calling using axios', () => {
    return store.dispatch('getAsync')
      .then(() => expect(store.state.data)
        .toEqual({ title: 'Mock with Jest' } )
      )
  })
})*/

/*=========================================
methodA({ dispatch, commit }, { data }) {
  dispatch('methodB', { data });
}
};

describe('UnitTesting', () => {
  it('if method called', () => {
    const commit = jest.fn();
    const dispatch = jest.fn('methodB');
    service.actions.methodA({ dispatch, commit });
    expect(dispatch).toHaveBeenCalledTimes(1);
  });*/

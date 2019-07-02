
export default  {

  namespace: 'index',

  state: {
    num:0
  },


  effects: {

    *changeNum({ payload }, { select,call, put }) {

      yield put({ type: 'addNum' ,payload});
    },
  },

  reducers: {
    addNum(state, {payload}) {
      return {
        num:state.num+payload.num
      };
    },
  },

};

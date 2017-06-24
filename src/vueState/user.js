export default {
  data() {
    return {
      data: JSON.parse(localStorage.getItem('vue_cnode_self')) || {
        avatar_url: null,
        id: null,
        loginname: null,
        success: false
      }
    };
  },
  manuals: {
    async signin({ state }, accesstoken) {
      // const res = await http.post(`/accesstoken`, { accesstoken })
      // if (typeof res === 'object' && res.success) {
      const res = 1;
      state.data = res;
      console.log(state);
      // localStorage.setItem('vue_cnode_self', JSON.stringify(res))
      // localStorage.setItem('vue_cnode_accesstoken', accesstoken)
      // }
      // return res
    },
    async test() {

    },
    signout() {
      localStorage.removeItem('vue_cnode_self')
      localStorage.removeItem('vue_cnode_accesstoken')
      this.reset()
    }
  }
}
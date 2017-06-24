<template>
  <div>
    <div @click="$router.go(-1)">
      back
    </div>
    <form class="form" @submit.prevent="submit">
      <div>
        <label>Access Token:
          <input class="text" type="text" placeholder="Access Token" v-model="form.accesstoken">
        </label>
      </div>
      <div>
        <label>User name:
          <input class="name" type="text" v-model="form.name">
        </label>
      </div>
      <div>
        <label>Password:
          <input class="pass" type="password" v-model="form.pass">
        </label>
      </div>
      <div>
        <button>{{ status ? '正在登录中' : '登录' }}</button>
      </div>
    </form>
  </div>
</template>
<script>
import utils from 'utils'
import is from 'is'
import { mapRules } from 'vuet'

export default {
  mixins: [
    mapRules({ manual: 'user' })
  ],
  data() {
    return {
      form: {
        accesstoken: '',
        name: null,
        pass: null
      },
      status: false // true正在提交， false还没提交
    }
  },
  methods: {
    async submit() {
      if (this.status) return;
      if (!this.form.accesstoken) return utils.toast('请输入accesstoken');
      this.status = true;

      console.log(this.$user);
      const res = await this.$user.signin(this.form.accesstoken);
      // const res = null;
      if (is.object(res)) {
        if (res.success) {
          utils.toast('登录成功')
          this.$router.go(-1)
        } else {
          utils.toast(res.error_msg)
        }
      } else {
        utils.toast('登录失败')
      }
      this.status = false
    }
  }
}

</script>
<style scoped>

</style>

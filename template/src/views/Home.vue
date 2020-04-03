<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <el-button @click="showMessage">
      zxzx
    </el-button>
    <el-link>
      {{ cur_tenant }}
    </el-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState('ChildCluster', ['childClusterInspect'])
  },
  methods: {
    showMessage () {
      console.log('message', this.$route)
      this.$router.push(
        '/pages/setting/configure'
      )
      // this.$message({
      //   message: '12121212'
      // })
    }
  }
}
</script>

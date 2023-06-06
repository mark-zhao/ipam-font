<template>
<el-menu
default-active="1"
class="el-menu-vertical-demo"
background-color="#545c64"
text-color="#bfcbd9"
active-text-color="#409eff"
router >
  <el-submenu index="/networks">
    <template slot="title">
      <i class="el-icon-rank"></i>
      <span>IPAM</span>
    </template>
    <el-menu-item index="/ipam/CreatePrefix">创建网络</el-menu-item>
    <el-menu-item index="/ipam/AcquireIP">申请IP</el-menu-item>
    <el-menu-item index="/ipam/ReleaseIP">标记和释放IP</el-menu-item>
    <el-menu-item index="/ipam/DeletePrefix">删除网络</el-menu-item>
  </el-submenu>
  <el-menu-item index="3">
      <i class="el-icon-menu"></i>
      <span slot="title">其它</span>
  </el-menu-item>
</el-menu>
</template>

<script>
export default {
data() {
    return {
      roleadmin: false,
    };
  },
}
// @open="handleOpen"
// @close="handleClose"
  // export default {
  //   methods: {
  //     handleOpen(key, keyPath) {
  //       console.log(key, keyPath);
  //     },
  //     handleClose(key, keyPath) {
  //       console.log(key, keyPath);
  //     }
  //   }
  // }
</script>

<style lang="scss">
.el-menu-vertical-demo {
    .el-menu-item {
          min-width: 0;
    }
}
</style>
<template>
  <el-form :inline="true" :model="formInline" >
    <el-form-item label="选择网段:">
      <el-select  v-model="formInline.cidr" clearable placeholder="网段">
        <el-option v-for="(value,key) in cidrs" :key=key :label=value :value=value></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">删除网络</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
// import channelServ from '@/api/channel'
import ipam from '@/api/ipam'
export default {
  data() {
    return {
      formInline: {
        cidr: '',
      },
      cidrs:[]
    }
  },
  created() {
    new Promise((resolve, reject) => {
      ipam.getCidrsList()
        .then(res => {
          console.log(res.data.data)
          this.cidrs=res.data.data.cidrs;
          resolve()
        })
        .catch(error => {
          reject(error)
      })
    })
  },
  methods: {
    onSubmit: function() {
      this.$emit("onSubmit",this.formInline);
    },
  }
}
</script>

<style>

</style>
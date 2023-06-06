<template>
  <el-form :inline="true" :model="formInline" >
    <el-form-item label="选择网段:">
      <el-select  v-model="formInline.cidr" clearable placeholder="网段">
        <el-option v-for="(value,key) in cidrs" :key=key :label=value :value=value></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="描述">
      <el-input v-model="formInline.description" clearable placeholder="描述"></el-input>
    </el-form-item>
    <el-form-item label="数量">
      <el-input v-model="formInline.num" clearable placeholder="数量"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit" :loading="loading">申请IP</el-button>
      <el-button type="primary" @click="onSelect" :loading="loading">查询网段</el-button>
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
        description: '',
        num: 1
      },
      cidrs:[],
      loading:false,
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
      this.loading=true;
      this.$emit("onSubmit",this.formInline);
      setTimeout(() => {this.loading=false},5000);
    },
    onSelect: function() {
      this.loading=true;
      this.$emit("onSelect",this.formInline)
      setTimeout(() => {this.loading=false},5000);
    }
  }
}
</script>

<style>

</style>
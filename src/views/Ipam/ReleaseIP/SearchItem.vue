<template>
  <el-form :inline="true" :model="formInline" >
    <el-form-item label="选择网段:">
      <el-select  v-model="formInline.cidr" clearable placeholder="网段">
        <el-option v-for="(value,key) in cidrs" :key=key :label=value :value=value></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="开始IP">
      <el-input v-model="formInline.firstip" clearable placeholder="开始IP"></el-input>
    </el-form-item>
    <el-form-item label="结束IP">
      <el-input v-model="formInline.lastip" clearable placeholder="结束IP"></el-input>
    </el-form-item>
    <el-form-item label="描述">
      <el-input v-model="formInline.description" clearable placeholder="描述"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="releaseIP">释放ip</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="markIP">标记ip</el-button>
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
        firstip: '',
        lastip: '',
        description:''
      },
      cidrs:[],
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
    releaseIP: function() {
      this.$emit("releaseIP",this.formInline);
    },
    markIP: function() {
      this.$emit("markIP",this.formInline);
    },
  }
}
</script>

<style>

</style>
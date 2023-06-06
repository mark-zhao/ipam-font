<template>
  <el-form :inline="true" :model="formInline" >
    <el-form-item label="Cidr">
      <el-input v-model="formInline.cidr" clearable placeholder="请选择网段"></el-input>
    </el-form-item>
    <el-form-item label="Gateway">
      <el-input v-model="formInline.gateway" clearable placeholder="请输入Gateway"></el-input>
    </el-form-item>
    <el-form-item label="父网段:">
      <el-input v-model="formInline.parentcidr" clearable placeholder="请输入父网段"></el-input>
    </el-form-item>
    <el-form-item label="VlanID:">
      <el-input v-model="formInline.vlanid" clearable placeholder="请输入VlanID"></el-input>
    </el-form-item>
    <el-form-item label="VRF:">
      <el-input v-model="formInline.vrf" clearable placeholder="请输入vrf"></el-input>
    </el-form-item>
    <el-form-item label="IDC:">
      <el-input v-model="formInline.idc" clearable placeholder="请输入idc"></el-input>
    </el-form-item>
    <el-form-item label="是否父网段:">
      <el-select v-model="formInline.isparent" clearable  placeholder="请选择网段">
        <el-option label="否" value="0"></el-option>
        <el-option label="是" value="1"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">新建网络</el-button>
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
        gateway: '',
        parentcidr: '',
        vlanid: '',
        vrf:'',
        idc:'',
        isparent: '',
      },
    }
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
<template>
  <div>
    <el-descriptions title="用户信息">
      <el-descriptions-item label="网段">{{descriptions.cidr}}</el-descriptions-item>
      <el-descriptions-item label="vlan">{{descriptions.vlan}}</el-descriptions-item>
      <el-descriptions-item label="网关">{{descriptions.gateway}}</el-descriptions-item>
      <el-descriptions-item label="描述">{{descriptions.description}}</el-descriptions-item>
    </el-descriptions>
    <el-table :data="tableData" stripe style="width: 100%" height="700">
      <el-table-column fixed prop="ip" label="IP"> </el-table-column>
      <el-table-column fixed prop="description" label="描述"> </el-table-column>
      <el-table-column fixed prop="date" label="申请时间"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import channelServ from '@/api/channel'
import ipam from "@/api/ipam";
export default {
  data() {
    return {
      descriptions:{
        cidr:"",
        vlan:"",
        gateway:"",
        description:"",
      },
      tableData: [],
    };
  },
  methods: {
    async AcquireIP(e) {
      let qs = {
        cidr: e.cidr,
        description: e.description,
        num: parseInt(e.num),
      };
      new Promise((resolve, reject) => {
        ipam
          .AcquireIP(qs)
          .then((res) => {
            this.tableData = [];
            let prefix = res.data.data.prefix
            this.descriptions.cidr = prefix.cidr
            this.descriptions.vlan = prefix.vlanid
            this.descriptions.gateway = prefix.gateway
            this.descriptions.description = e.description
            
            for (var ip of res.data.data.ips) {
              this.tableData.push({
                ip,
              });
            }
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    async SelectPrefixInfo(e) {
      let qs = {
        cidr: e.cidr,
      };
      new Promise((resolve, reject) => {
        ipam
          .SelectPrefixInfo(qs)
          .then((res) => {
            console.log(res.data.data)
            this.tableData = [];
            let prefix = res.data.data.prefix
            this.descriptions.cidr = prefix.cidr
            this.descriptions.vlan = prefix.vlanid
            this.descriptions.gateway = prefix.gateway
            this.descriptions.description = e.description
            this.tableData = [];
            let ips = res.data.data.prefix.ips
            for (var key in ips) {
              this.tableData.push({
                ip:key,
                description:ips[key].description,
                date:ips[key].date
              });
            }
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
};
</script>

<style>
</style>
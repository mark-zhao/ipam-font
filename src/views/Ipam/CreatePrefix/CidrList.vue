<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%" height="700">
      <el-table-column fixed prop="cidr" label="名称"> </el-table-column>
      <el-table-column fixed prop="gateway" label="网关"> </el-table-column>
      <el-table-column fixed prop="vrf" label="VRF"> </el-table-column>
      <el-table-column fixed prop="idc" label="IDC"> </el-table-column>
      <el-table-column fixed prop="isparent" label="是否为父网段"> </el-table-column>
      <el-table-column fixed prop="parentcidr" label="父网段"> </el-table-column>
      <el-table-column fixed prop="vlanid" label="vlan"> </el-table-column>
      <el-table-column fixed prop="avaip" label="已用IP"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import channelServ from '@/api/channel'
import ipam from "@/api/ipam";
import { MessageBox, Message } from 'element-ui'
export default {
  data() {
    return {
      json_fields: {
        名称: "cidr",
      },
      tableData: [],
    };
  },
  created() {
    new Promise((resolve, reject) => {
      ipam.getCidrsInfo()
        .then(res => {
          console.log(res.data.data)
          for (var data of res.data.data.cidrs) {
            if  (data.isparent) {
              this.tableData.push({
              cidr: data.cidr,
              gateway: data.gateway,
              isparent: '是',
              vlanid: data.vlanid,
              vrf: data.vrf,
              idc:data.idc,
              parentcidr: data.parentcidr,
              avaip: data.availableips,
              });
            }else {
              this.tableData.push({
              cidr: data.cidr,
              gateway: data.gateway,
              isparent: '否',
              vlanid: data.vlanid,
              vrf: data.vrf,
              idc:data.idc,
              parentcidr: data.parentcidr,
              avaip: data.availableips,
              });
            }
          }
          console.log(this.tableData)
          resolve()
        })
        .catch(error => {
          reject(error)
      })
    })
  },
  methods: {
    async CreateMethod(e) {
      let qs = {
        cidr: e.cidr,
        gateway: e.gateway,
        parentcidr: e.parentcidr,
        vlanid: parseInt(e.vlanid),
        vrf: e.vrf,
        idc: e.idc,
        isparent: Boolean(parseInt(e.isparent)),
      };
      new Promise((resolve, reject) => {
        ipam
          .createCidr(qs)
          .then((res) => {
            console.log(res.data.data)
            location.reload();
            Message({
            message: "创建成功",
            type: 'success',
            duration: 5 * 1000
            })
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
}
</script>

<style>
</style>
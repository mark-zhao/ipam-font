<template>
  <div>
    <el-descriptions title="运行结果">
      <el-descriptions-item label="运行结果">{{result}}</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
// import channelServ from '@/api/channel'
import ipam from "@/api/ipam";
export default {
  data() {
    return {
      result: '',
    }
  },
  methods: {
    async DeletePrefix(e) {
      let qs = {
        cidr: e.cidr,
      };
      console.log(qs)
      new Promise((resolve, reject) => {
        ipam
          .DeletePrefix(qs)
          .then((res) => {
            if (res.data.data.ok === 1) {
              this.result = e.cidr + " 删除网络成功"
            }
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    async markIP(e) {
      let qs = {
        cidr: e.cidr,
        description: e.description,
        from: e.firstip,
        to: e.lastip,
      };
      console.log(qs)
      new Promise((resolve, reject) => {
        ipam
          .MarkIPs(qs)
          .then((res) => {
            if (res.data.data.ok === 1) {
              this.result = "IP删除成功"
            }
            location.reload();
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
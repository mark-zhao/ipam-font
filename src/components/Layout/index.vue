<template>
    <div>
        <el-row>
            <el-col class="header bg-purple-dark" :span="24">
                <slot name="head"></slot>
            </el-col>
        </el-row>
        <div class="bg">
            <el-row>
                <el-col class="aside" :span="3">
                    <slot name="menu"/>
                </el-col>
                <el-col class="main" :span="21">
                    <slot name="main"></slot>
                </el-col>
            </el-row>
            <el-row>
                <el-col class="footer" :span="24" :style="{minHeight:'70px'}">
                    ginat Design ©2022 Created by giant system
                </el-col>
            </el-row>
        </div>
        
    </div>
</template>



<style>
.header {
    min-height: 70px;
  }
.bg-purple-dark {
    background: rgb(39, 44, 52);
}

.main {
    min-height: 800px;
    background: #fff;
}
.bg {
    background:#545c64;
}
.aside > .el-menu {
    border-right: 0px
}
.footer {
    min-height: 70px;
    text-align: center;
    background: #f7f7f7;
    font-size: 15px;
    line-height: 70px;
}
</style>
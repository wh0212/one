<template>
  <div class="table-data">
    <div class="search-box">
      <el-input size="small" v-model="searchVal" placeholder="请输入课程名称检索"></el-input>
      <el-button size="small" type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
    </div>
    <el-table :data="tableData" border style="width:100%" :height="tHeight" class="table-box"  v-loading="loading" element-loading-text="拼命加载中">

      <el-table-column type="index" label="序号" width="60"></el-table-column>
      <el-table-column label="课程名称" prop="title"></el-table-column>
      <el-table-column width="120" label="课程等级" prop="level"></el-table-column>
      <el-table-column width="120" label="技术栈" prop="type"></el-table-column>
      <el-table-column width="120" label="报名人数" prop="count"></el-table-column>
      <el-table-column width="160" label="上线日期" prop="date"></el-table-column>
      <el-table-column v-if="getUser.key != 'visitor'" label="操作" width="160">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.$index,scope.row)" size="mini">编辑</el-button>
          <el-button @click="handleDelete(scope.$index,scope.row)" size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pages" ref="page-box">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[5,10,20]"
        :page-size="size"
        layout="total,sizes,prev,pager,next,jumper"
        :total="total"
      ></el-pagination>
    </div>
    <EditDialog :dialogVisible="dialogVisible" :form="formData" @closeDialog="closeDialog"></EditDialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import jwt_decode from 'jwt-decode';

import EditDialog from "./EditDialog.vue";
@Component({
  components: { EditDialog }
})
export default class TableData extends Vue {
  @Provide() getUser: any;//用户信息
  @Provide() loading:boolean = true;//loading加载
  @Provide() searchVal: string = ""; // 搜索框
  @Provide() tHeight: number = document.body.offsetHeight - 270;//表格高度
  @Provide() tableData: any = []; // 表格数据
  @Provide() page: number = 1; // 当前page
  @Provide() size: number = 5; // 请求数据的个数 默认5
  @Provide() total: number = 0; // 总数据条数

  @Provide() dialogVisible: Boolean = false; // 控制是否展示编辑页面
  @Provide() formData: object = {
    title: "",
    type: "",
    level: "",
    count: "",
    date: ""
  };

  //编辑
  handleEdit(index: number, row: any) {
    // console.log(index, row);
    this.formData = row;
    this.dialogVisible = true;
  }

  //删除
  handleDelete(index: number, row: any) {
    (this as any).$axios
      .delete(`/api/profiles/delete/${row._id}`)
      .then((res: any) => {
        this.$message({
          message: res.data.msg,
          type: "success"
        });

        this.tableData.splice(index, 1);
      });
  }

  closeDialog() {
    this.dialogVisible = false;
  }

  created() {
    this.loadData();
    this.getUser = jwt_decode(localStorage.tsToken);
  }

  //数据分页
  loadData() {
    this.loading = true;
    (this as any)
      .$axios(`/api/profiles/loadMore/${this.page}/${this.size}`)
      .then((res: any) => {
        // console.log(res.data);
        this.tableData = res.data.data.list;
        this.total = res.data.data.total;
        this.loading = false;
      });
  }

  handleSizeChange(val: number): void {
    this.size = val;
    this.page = 1;
    this.searchVal ? this.loadSearchData() : this.loadData();
  }

  handleCurrentChange(val: number): void {
    this.page = val;
    this.searchVal ? this.loadSearchData() : this.loadData();
  }

  //搜索
  handleSearch(): void {
    // 点击搜索
    this.page = 1;
    this.searchVal ? this.loadSearchData() : this.loadData();
  }
  //搜索查询数据分页
  loadSearchData() {
    // 加载搜索数据
    (this as any)
      .$axios(
        `/api/profiles/search/${this.searchVal}/${this.page}/${this.size}`
      )
      .then((res: any) => {
        // console.log(res.data);
        this.tableData = res.data.datas.list;
        this.total = res.data.datas.total;
      });
  }
}
</script>

<style lang="scss" scoped>
.table-data {
  height: 100%;
  .table-box {
    font-size: 14px;
  }
  .pages {
    background: #fff;
    margin-top: 10px;
    padding: 10px 10px;
    text-align: right;
    height: 55px;
    box-sizing: border-box;
  }
  .search-box {
    background: #fff;
    margin-bottom: 10px;
    padding: 10px 10px;
    border-radius: 4px;
    height: 55px;
    box-sizing: border-box;
    .el-input {
      width: 200px;
      margin-right: 10px;
    }
  }
}
</style>

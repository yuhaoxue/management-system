<template>
  <div>
    <base-table
      :data="tableData"
      :columns="columns"
      :pageConfig="page"
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"
    >
      <template slot="operate" slot-scope="{ scope }">
        <el-button @click="handleClick(scope.row)" type="text" size="small">
          查看
        </el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </base-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { postRequest, getRequest } from "@/api/api.js";
import url from "@/api/apiUrl.js";

export default {
  data() {
    return {
      tableData: [],
      columns: [
        {
          attrs: { label: "日期", prop: "date" }
        },
        {
          attrs: { label: "姓名", prop: "name" }
        },
        {
          attrs: { label: "省份", prop: "province" }
        },
        {
          attrs: { label: "市区", prop: "city" }
        },
        {
          attrs: { label: "地址", prop: "address" }
        },
        {
          attrs: { label: "邮编", prop: "zip" }
        },
        {
          slot: "operate",
          attrs: { label: "操作", width: "100" }
        }
      ],
      page: {
        total: 0,
        pageSize: 10,
        currentPage: 1,
        pageSizes: [10, 20, 30, 40],
        layout: "total, sizes, prev, pager, next, jumper"
      }
    };
  },
  computed: {
    ...mapState(["userName"])
  },
  created() {
    console.log(this.userName);
    this.getMenuFirst();
  },
  methods: {
    getMenuFirst() {
      let params = {
        page: this.page.currentPage,
        pageSize: this.page.pageSize
      };
      postRequest(url.getMenuFirst, params)
        .then(res => {
          let result = res.data;
          console.log(result);
          if (result.status == 200) {
            this.tableData = result.data;
            this.page.total = result.count;
          }
        })
        .catch(err => {
          console.error(err);
        });
    },
    handleClick(row) {
      console.log(row);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page.currentPage = val;
      this.getMenuFirst();
    }
  }
};
</script>

<style lang="scss" scoped></style>

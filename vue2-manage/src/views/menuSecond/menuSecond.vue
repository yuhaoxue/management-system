<template>
  <div>
    <base-form
      :inline="true"
      :formItems="formItems"
      :mergeForm="mergeForm"
      @after-submit="handleSumbit"
    >
      <template v-slot:slotCheckBox>
        <el-checkbox v-model="mergeForm.slotCheckBox">插槽复选框1</el-checkbox>
      </template>
    </base-form>
    <base-table
      :data="tableData"
      :columns="columns"
      :pageConfig="page"
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"
    >
      <template slot="operate" slot-scope="{ scope }">
        <el-button @click="handleClick(scope.row)" type="text" size="small"
          >查看</el-button
        >
        <el-button @click="handleEdit(scope.row)" type="text" size="small"
          >编辑</el-button
        >
      </template>
    </base-table>
    <div class="m-dialog">
      <el-dialog title="详情" :visible.sync="dialogVisible" width="500px">
        <div>
          <list-view :viewData="viewData"></list-view>
        </div>
        <div slot="footer">
          <el-button @click="dialogVisible = false">关闭</el-button>
        </div>
      </el-dialog>
    </div>
    <!-- 编辑 -->
    <div class="m-dialog">
      <el-dialog title="编辑" :visible.sync="dialogVisibleEdit" width="500px">
        <div>
          <list-edit @editChange="editChange"></list-edit>
        </div>
        <div slot="footer">
          <el-button @click="dialogVisibleEdit = false">关闭</el-button>
          <el-button @click="dialogVisibleEdit = false">保存</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { postRequest, getRequest } from "@/api/api.js";
import url from "@/api/apiUrl.js";
import View from "./components/view";
import Edit from "./components/edit";

export default {
  components: {
    "list-view": View,
    "list-edit": Edit
  },
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
      },
      formItems: [
        {
          tag: "input",
          itemAttrs: {
            label: "姓名"
          },
          attrs: {
            key: "name",
            value: "1123",
            placeholder: "请输入姓名"
          },
          getAttrs(Model) {
            //返回一个被合并到当前attrs属性里的对象
            return Model.age === "22" ? { disabled: true } : null;
          }
        },
        {
          tag: "input",
          itemAttrs: {
            label: "年龄",
            rules: [
              { required: true, message: "年龄不能为空", trigger: "click" }
            ]
          },
          attrs: {
            key: "age",
            placeholder: "请输入年龄"
          },
          ifRender(Model) {
            //form为ZFrom的:model对象
            return Model.hobby === "2";
          }
        },
        {
          tag: "select",
          itemAttrs: {
            label: "兴趣"
          },
          attrs: {
            key: "hobby",
            value: "2",
            placeholder: "请输入兴趣",
            options: [
              { value: "1", label: "吃饭" },
              { value: "2", label: "睡觉" },
              { value: "3", label: "打豆豆" }
            ]
          }
        },
        {
          slot: "slotCheckBox",
          itemAttrs: {
            label: "插槽复选框"
          }
        }
      ],
      mergeForm: {
        slotCheckBox: ""
      },
      dialogVisible: false,
      dialogVisibleEdit: false,
      viewData: {}
    };
  },
  computed: {
    ...mapState(["userName"])
  },
  provide() {
    return {
      editData: this.getViewData
    };
  },
  created() {
    console.log(this.userName);
    this.getMenuSecond();
  },
  mounted() {
    this.$bus.$on("changeCountry", val => {
      console.log(val);
    });
  },
  methods: {
    getMenuSecond() {
      let params = {
        page: this.page.currentPage,
        pageSize: this.page.pageSize
      };
      postRequest(url.getMenuSecond, params)
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
      this.dialogVisible = true;
      this.viewData = row;
    },
    handleEdit(row) {
      this.viewData = { ...row };
      this.dialogVisibleEdit = true;
    },
    getViewData() {
      return this.viewData;
    },
    editChange(val) {
      console.log(val);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page.currentPage = val;
      this.getMenuSecond();
    },
    handleSumbit(val) {
      if (val) {
        this.getMenuSecond();
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>

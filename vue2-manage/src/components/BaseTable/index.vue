<template>
  <div class="m-table-box">
    <!-- 表格 -->
    <div class="m-table">
      <el-table v-bind="$attrs" border style="width: 100%">
        <template v-for="(column, index) in columns">
          <!-- 普通列 -->
          <el-table-column
            v-if="!column.slot"
            :key="index"
            v-bind="column.attrs || {}"
          >
          </el-table-column>
          <!-- 操作列/自定义列 -->
          <el-table-column v-else :key="index" v-bind="column.attrs || {}">
            <template slot-scope="scope">
              <slot :name="column.slot" :scope="scope"></slot>
            </template>
          </el-table-column>
        </template>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="m-pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageConfig.currentPage"
        :page-sizes="pageConfig.pageSizes"
        :page-size="pageConfig.pageSize"
        :layout="pageConfig.layout"
        :total="pageConfig.total"
        :hide-on-single-page="pageConfig.total <= pageConfig.pageSize"
        background
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "base-table",
  props: {
    columns: {
      type: Array,
      required: true
    },
    pageConfig: {
      type: Object,
      required: false
    }
  },
  data() {
    return {};
  },
  methods: {
    handleSizeChange(val) {
      this.$emit("handleSizeChange", val);
    },
    handleCurrentChange(val) {
      this.$emit("handleCurrentChange", val);
    }
  }
};
</script>

<style lang="scss" scoped></style>

<script setup>
import { ref } from "vue";
import Edit from "./components/Edit.vue";
import allApi from "../api/allApi";
import { onMounted } from "vue";
// TODO: 列表渲染
const dataList = ref({ data: [] });
onMounted(async () => {
  const data = await allApi.getAll();
  dataList.value.data = data.data;
});
// TODO: 删除功能

const deleteItem = async (scoped) => {
  console.log(scoped);
  const data = await allApi.deleteRow(scoped.row.id);
  if (data.status === 200) {
    const data = await allApi.getAll();
    dataList.value.data = data.data;
  }
};
// TODO: 编辑功能

const editItem = async (scoped) => {
  const data = await allApi.editRow({
    id: scoped.row.id,
    name: scoped.row.name + "修改",
    place: scoped.row.place + "修改",
  });
  if (data.status === 200) {
    const data = await allApi.getAll();
    dataList.value.data = data.data;
    console.log(data);
  }
};
</script>

<template>
  <div class="app">
    <el-table :data="dataList.data">
      <el-table-column
        label="ID"
        prop="id"
      ></el-table-column>
      <el-table-column
        label="姓名"
        prop="name"
        width="150"
      ></el-table-column>
      <el-table-column
        label="籍贯"
        prop="place"
      ></el-table-column>
      <el-table-column
        label="操作"
        width="150"
      >
        <template #default="scope">
          <el-button
            type="primary"
            link
            @click.prevent="editItem(scope)"
          >编辑</el-button>
          <el-button
            type="danger"
            link
            @click.prevent="deleteItem(scope)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <Edit />
</template>

<style scoped>
.app {
  width: 980px;
  margin: 100px auto 0;
}
</style>

<template>
  <!--<el-row>
    <el-col :span="4" class="menu">
      <db-sidebar></db-sidebar>
    </el-col>
    <el-col :span="20" class="content">
      <db-filterinput></db-filterinput>
      <db-table></db-table>

    </el-col>
  </el-row>-->
  <div>7777</div>
</template>

<script>
import DbSidebar from 'components/DbSidebar.vue'
import DbFilterinput from 'components/DbFilterinput.vue'
import DbTable from 'components/DbTable.vue'
import ElRow from "element-ui/packages/row/src/row";



export default {
  name: 'home',
  components: {
    ElRow,
    DbSidebar,
    DbFilterinput,
    DbTable
  }
}

</script>

<style>
.menu {
  height: 100%;
  background-color: #eef1f6;
}

.content {
  padding-top: 25px;
  padding-right: 25px;
  padding-bottom: 125px;
  padding-left: 25px;
}
</style>
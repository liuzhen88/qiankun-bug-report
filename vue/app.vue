<template>
  <el-select v-model="value">
    <el-option v-for="(item, index) in data" :value="item" :key="index">{{item}}</el-option>
  </el-select>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      data: ['1', '2', '3']
    }
  }
}
</script>
<template>
  <div id="memos" class="container">
    <MemoItem v-for="item in filterMemo()" :key="item.id" :memo="item" />
  </div>
</template>
<script lang='ts'>
// 导入vue
import { Vue, Component } from "vue-property-decorator";
import ItemData from "../model/ItemData";
import MemoItem from "./MemoItem.vue";

// 进行注册之后 就可以当做标签使用
@Component({
  components: {
    MemoItem
  }
})

// 编写组件类
export default class ItemList extends Vue {
  // 声明笔记数组 方便在当前组件中调用
  memoArr: Array<ItemData> = this.$store.state.actionHelper.memoList;

  filterMemo() {
    if (this.$store.state.filterCateId == -1) {
      return this.memoArr;
    } else {
      return this.memoArr.filter((item: any) => {
        return item.cateId == this.$store.state.filterCateId;
      });
    }
  }
}
</script>
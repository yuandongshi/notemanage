<template>
  <div class="memo-container">
    <div class="memo">
      <div class="mark"></div>
      <div class="memo-heading">
        <h5 class="title">{{memo.title}}</h5>
        <ul class="tools">
          <li class="edit" @click="showEdit"></li>
          <li class="delete" @click="doDel()"></li>
        </ul>
      </div>
      <h6 class="memo-info">
        <span class="timeStamp">{{memo.createTime}}</span>
        <span class="category">分类: {{$store.state.actionHelper.getCategoryName(memo.cateId)}}</span>
      </h6>
      <div class="content">
        <div class="text">{{memo.content}}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
// Component 这是要作为一个子组件
// Prop 需要进行父子传参
import { Component, Prop, Vue } from "vue-property-decorator";
import ItemData from "../model/ItemData";

@Component
export default class MemoItem extends Vue {
  @Prop() memo!: ItemData;

  // 删除方法
  doDel(): void {
    if (!window.confirm("确定要删除吗？")) return;

    // 确认删除 删除数组 双向绑定 所以页面也直接删除 了
    this.$store.state.actionHelper.remove(this.memo.id);
  }

  showEdit(): void {
    let newMemo = JSON.parse(JSON.stringify(this.memo));
    
    // 调用store中的showEditMemo 方法
    this.$store.commit("showEditMemo", newMemo);
  }
}
</script>
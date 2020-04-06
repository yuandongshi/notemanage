<template>
  <div id="app">
    <MenuBar />
    <ItemList />
     <MemeEditor v-if="$store.state.isShow" />
    <!-- {{$store.state.title}} -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import  MenuBar from "./components/MenuBar.vue";
import ItemList from "./components/ItemList.vue";
import MemeEditor from "./components/MemoEditor.vue";
Vue.config.devtools = true;

@Component({
  components: {
    MenuBar,
    ItemList,
    MemeEditor
  },
})
export default class App extends Vue {
}
</script>

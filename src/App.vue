<template>
  <main>
    <div>
      <ul>
        <TreeItem v-for="item in treeData" :key="item.id" :item="item" />
      </ul>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import TreeItem from './components/TreeItem.vue'
import { convertArrayToTree } from './composables/convertToTree.js'

const data = [
  {
    id: 459,
    parent_id: 0,
    space_id: 118,
    instance_user_id: 54,
    name: "Guidelines",
    deleted_at: null,
    created_at: "2024-04-11 17:13:42",
    updated_at: "2024-04-11 17:14:57"
  },
  {
    id: 460,
    parent_id: 459,
    space_id: 118,
    instance_user_id: 54,
    name: "How to communicate in chat and discord in single project perspective",
    deleted_at: null,
    created_at: "2024-04-11 17:14:08",
    updated_at: "2024-04-15 17:27:24"
  },
  {
    id: 461,
    parent_id: 459,
    space_id: 118,
    instance_user_id: 54,
    name: "How to use Space",
    deleted_at: null,
    created_at: "2024-04-11 17:14:23",
    updated_at: "2024-04-11 17:50:27"
  },
  {
    id: 464,
    parent_id: 461,
    space_id: 118,
    instance_user_id: 54,
    name: "How to track time",
    deleted_at: null,
    created_at: "2024-04-11 17:24:01",
    updated_at: "2024-04-15 16:30:27"
  },
  {
    id: 465,
    parent_id: 461,
    space_id: 118,
    instance_user_id: 54,
    name: "How to use project notifications, timer, project statuses, etc",
    deleted_at: null,
    created_at: "2024-04-11 17:24:18",
    updated_at: "2024-04-15 17:12:26"
  },
  {
    id: 466,
    parent_id: 464,
    space_id: 118,
    instance_user_id: 54,
    name: "How your commits (tracks) should look",
    deleted_at: null,
    created_at: "2024-04-11 18:48:58",
    updated_at: "2024-04-11 18:51:47"
  },
  {
    id: 471,
    parent_id: 0,
    space_id: 118,
    instance_user_id: 2,
    name: "test",
    deleted_at: null,
    created_at: "2024-04-24 20:57:56",
    updated_at: "2024-04-24 20:57:56"
  }
];

const treeData = computed(() => {
  return convertArrayToTree(data)
})

</script>


<style scoped></style>

<template>
  <h1>Completed Items</h1>
  <ul class="theul">
    <li v-for="item in this.completedItems" :key="item" class="theItem theli">
        <div>
            <h3>{{ item.title }}</h3>
            <p>Day Completed: {{ item.time }}</p>
        </div>
    </li>
  </ul>
</template>

<script>
export default {
    props: ['msg','toDoList','completedItems']
}
</script>

<style>
    .theItem {
        justify-content: center;
    }
</style>
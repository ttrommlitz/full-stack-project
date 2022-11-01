<template>
  <div>
    <h1>Completed Items</h1>
    <ul class="theul">
        <li v-for="item in this.completedItems" :key="item" class="theItem theli">
            <div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}<br><br></p>
                <p class="date">Day Completed: {{ item.time }}</p>
            </div>
        </li>
    </ul>
    <div class="noItemsP">
        <p v-if="completedItems.length === 0">
          Nothing completed. Go work on some tasks!
        </p>
    </div>
  </div>
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
    .date {
        font-size: .9em;
    }
</style>
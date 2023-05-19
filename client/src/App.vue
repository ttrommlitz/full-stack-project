<template>
  <div>
  <nav>
    <router-link to="/">List</router-link> |
    <!-- <router-link to="/create">Completed</router-link> |  -->
    <router-link to="/completed">Completed</router-link>
  </nav>
  <router-view v-bind:msg="msg" v-bind:toDoList="toDoList" v-bind:completedItems="completedItems"
  @newItem="newItem" @deleteItem ="deleteItem" @checked="checked" @edit1="edit1" @edit2="edit2" @changeEditable="changeEditable"/>
  </div>
</template>

<script>
  import axios from 'axios'
  import { baseUrl } from './settings'
  export default {
    data () {
      return {
        msg: 'To Do List',
        toDoList: [],
        title: '',
        description: ''
      }
    },
    async created () {
      await this.fetchList() 
    },
    async updated () {
      window.localStorage.setItem('thetoDoList', JSON.stringify(this.toDoList))
    },
    methods: {
      async newItem (theTitle, theDescription) {
        if (theTitle !== undefined || theDescription !== undefined) {
          try {
            await axios.post(`${baseUrl}/api/create`, {title: theTitle, description: theDescription})
            await this.fetchList()
          } catch (error) {
            console.error(error)
          }
        } else {
          console.info('Empty arguments!')
        }
        this.$router.push("/")
      },
      async deleteItem (index) {
        try {
          await axios.delete(`${baseUrl}/api/delete/` + this.toDoList[index]._id)
          await this.fetchList()
        } catch (error) {
          console.error(error)
        }
      },
      async checked (index) {
        this.toDoList[index].checked = !this.toDoList[index].checked
        const currentDate = new Date();
        const currentDayOfMonth = currentDate.getDate();
        const currentMonth = currentDate.getMonth(); 
        const currentYear = currentDate.getFullYear();
        this.toDoList[index].time = (currentMonth + 1) + "-" + currentDayOfMonth + "-" + currentYear;
        await this.updateItems(index)
      },
      async edit1 (index) {
        this.changeEditable(index)
        await this.updateItems(index)
      },
      async edit2 (index, title, description) {
        this.changeEditable(index)
        this.toDoList[index].title = title
        this.toDoList[index].description = description
        await this.updateItems(index)
      },
      changeEditable (index) {
        this.toDoList[index].editable = !this.toDoList[index].editable
      },
      async updateItems (index) {
        try {
          await axios.put(`${baseUrl}/api/update/` + this.toDoList[index]._id, this.toDoList[index])
          await this.fetchList()
        } catch (error) {
          console.error(error)
        }
      },
      async fetchList () {
        try {
          const result = await axios.get(`${baseUrl}/api`,)
          this.toDoList = result.data
          return result.data
        } catch (error) {
          console.error(error)
        }
      }
    },
    computed: {
      completedItems () {
          let arr = this.toDoList.filter(item => item.checked === true)
          return arr
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 10px;
  font-size: 1.5em;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0px 20px;
}

nav a.router-link-exact-active {
  color: green;
}
</style>

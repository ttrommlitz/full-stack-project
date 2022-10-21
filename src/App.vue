<template>
  <nav>
    <router-link to="/">List</router-link> |
    <router-link to="/create">Create</router-link> |
    <router-link to="/completed">Completed</router-link>
  </nav>
  <router-view v-bind:msg="msg" v-bind:toDoList="toDoList" v-bind:completedItems="completedItems" 
  @newItem="newItem" @deleteItem ="deleteItem" @checked="checked" @edit="edit" @changeEditable="changeEditable"/>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        msg: 'To Do List',
        toDoList: []
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
            await axios.post('/api/todo', {title: theTitle, description: theDescription})
            await this.fetchList()
          } catch (error) {
            console.log(error)
          }
        } else {
          console.log('Empty arguments!')
        }
        this.$router.push("/")
      },
      async deleteItem (index) {
        try {
          await axios.delete('/api/todo/' + this.toDoList[index]._id)
          await this.fetchList()
        } catch (error) {
          console.log(error)
        }
      },
      async checked (index) {
        console.log('checked')
        this.toDoList[index].checked = !this.toDoList[index].checked
        const currentDate = new Date();
        const currentDayOfMonth = currentDate.getDate();
        const currentMonth = currentDate.getMonth(); 
        const currentYear = currentDate.getFullYear();
        this.toDoList[index].time = (currentMonth + 1) + "-" + currentDayOfMonth + "-" + currentYear;
        try {
          await axios.put('/api/todo/' + this.toDoList[index]._id, this.toDoList[index])
          await this.fetchList()
        } catch (error) {
          console.log(error)
        }
      },
      async edit (index) {
        this.changeEditable(index)
        console.log(this.toDoList[index])
        try {
          await axios.put('/api/todo/' + this.toDoList[index]._id, this.toDoList[index])
        } catch (error) {
          console.log(error)
        }
      },
      changeEditable (index) {
        this.toDoList[index].editable = !this.toDoList[index].editable
      },
      async fetchList () {
        console.log('fetching')
        try {
          const result = await axios.get('/api/todo')
          console.log(result.data)
          this.toDoList = result.data
          return result.data
        } catch (error) {
          console.log(error)
        }
      }
    },
    computed: {
      completedItems () {
        console.log('comp')
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

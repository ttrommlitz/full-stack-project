<template>
  <nav>
    <router-link to="/">List</router-link> |
    <router-link to="/create">Create</router-link> |
    <router-link to="/completed">Completed</router-link>
  </nav>
  <router-view v-bind:msg="msg" v-bind:toDoList="toDoList" v-bind:completedItems="completedItems" @newItem="newItem" @deleteItem ="deleteItem" @checked="checked"/>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'To Do List',
        toDoList: [
          {title: 'Eat', description: 'Time to Eat!', time: "", checked: false},
          {title: 'Work', description: 'Make sure to be there on time!', time: "", checked: false},
          {title: 'Sleep', description: 'Make sure to get at least 7 hours of sleep!', time: "", checked: false},
          {title: 'repeat', description: 'Do it all over again!', time: "", checked: false},
        ], 
        time: "",
      }
    },
    created () {
      if (window.localStorage.getItem('thetoDoList') === undefined) {
        localStorage.setItem('thetoDoList',JSON.stringify(this.toDoList))
      } 
      else if (JSON.parse(window.localStorage.getItem('thetoDoList')).length === 0) {
        window.localStorage.setItem('thetoDoList', JSON.stringify(this.toDoList))
      }
      else {
        this.toDoList = JSON.parse(window.localStorage.getItem('thetoDoList'))
      }
      console.log('in created')
    },
    updated () {
      window.localStorage.setItem('thetoDoList', JSON.stringify(this.toDoList))
      
    },
    methods: {
      newItem (theTitle, theDescription) {
        if (theTitle !== undefined || theDescription !== undefined) {
          this.toDoList.push({title: theTitle, description: theDescription, time: "", checked: false})
        } else {
          console.log('Empty arguments!')
        }
        this.$router.push("/")
      },
      deleteItem (index) {
        this.toDoList.splice(index, 1)
      },
      checked (index) {
        console.log('checked')
        this.toDoList[index].checked = !this.toDoList[index].checked
        const currentDate = new Date();
        const currentDayOfMonth = currentDate.getDate();
        const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
        const currentYear = currentDate.getFullYear();
        this.toDoList[index].time = (currentMonth + 1) + "-" + currentDayOfMonth + "-" + currentYear;

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

<template>
  <v-app >
    <v-navigation-drawer temporary absolute v-model="sideNav">
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" router :to="item.link">
          <v-btn flat>
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
          </v-btn>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="deep-purple darken-4">
      <v-toolbar-side-icon @click="sideNav = !sideNav" class="hidden-sm-and-up">

      </v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Meetup Manager</router-link>
      </v-toolbar-title>
      <v-spacer>

      </v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title" router :to="item.link">
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  <main>
    <router-view></router-view>
  </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
      menuItems:[
        { icon:'supervisor_account', title:'Viwe Meetups', link:'/meetups' },
        { icon:'room', title:'Organize Meetup', link:'/meetup/new' },
        { icon:'person', title:'Profile', link: '/profile' },
        { icon:'face', title:'Sing up', link:'/singup' },
        { icon:'lock_open', title:'Sing in', link:'/singin' },
      ],
    }
  },
  name: 'App'
}
</script>

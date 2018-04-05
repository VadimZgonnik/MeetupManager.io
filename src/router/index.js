import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Meetups from '@/components/Meetup/Meetups'
import CreateMeetup from '@/components/Meetup/CreateMeetup'
import Profile from '@/components/User/Profile'
import Singin from '@/components/User/Singin'
import Singup from '@/components/User/Singup'
import Meetup from '@/components/Meetup/Meetup'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/meetups',
      name: 'Meetups ',
      component: Meetups
    },
    {
      path: '/meetup/new',
      name: 'CreateMeetup',
      component: CreateMeetup
    },
    {
      path:'/meetaps/:id',
      prors: true,
      name:'Meetup',
      component: Meetup
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/singin',
      name: 'Singin',
      component: Singin
    },
    {
      path: '/singup',
      name: 'Singup',
      component: Singup
    },

  ],
  mode: 'history'
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Upload from '../views/Upload'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
import map   from '../components/map'
import decode from 'jwt-decode'
import { admin_id as admin_id } from '../../Adminid'
Vue.use(VueRouter)



function checkToken(){
  if(localStorage.getItem('signinToken')){
    try {
      const token = JSON.parse(localStorage.getItem('signinToken'))
      return token;
    } catch (error) {
      console.log(error);
      console.log("No Login token found");
    }
  }
}

function guardRoute(to,from,next){
  
  let authenticated = false;
  let token = checkToken();
  if(token){
    const decodedToken = decode(token);
    const user_id = decodedToken.user_id;
    if(admin_id===user_id){
      authenticated = true;
    }
    if(authenticated){
      next();
    }else{
      next({name:'home'})
    }

  }

}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/upload',
    name: 'about',
    beforeEnter:guardRoute,
    component:Upload,
  },
  {
    path:'/sign',
    name:'signUp',
    component:SignUp
  },
  {
    path:'/login',
    name:'login',
    component:SignIn
  },
  {
    path:'/map',
    name:'map',
    component:map
  }
]




 const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router











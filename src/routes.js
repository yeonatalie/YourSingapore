import Home from './components/Home.vue';
import Merchants from './components/Merchants.vue';
import About from './components/About.vue'
import MerchantForm from './components/MerchantForm'
import VisitDate from './components/VisitDate.vue'
import VisitLocation from './components/VisitLocation.vue'
import ActivityList from './components/ActivityList.vue'
import Reminder from './components/Reminder.vue'
import Login from './components/Login'
import Registration_new from './components/Registration_new'
import Verification from "@/components/Verification";


export default[
    {path:'/',component:Home},
    {path:'/about',component:About},
    {path:'/merchant/form',component:MerchantForm},
    {path:'/',component:Home},
    {path:'/merchants',component:Merchants},
    {path:'/date',component:VisitDate},
    {path:'/location',component:VisitLocation},
    {path:'/activityList',component:ActivityList},
    {path:'/reminder',component:Reminder},
    {path:'/verification',component:Verification},
    {path:'/login',component:Login},
    {path: '/merchant/Registration_new', component: Registration_new }
]


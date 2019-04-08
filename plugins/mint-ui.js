import Vue from 'vue'
import { Swipe, SwipeItem , Lazyload, Loadmore, InfiniteScroll} from 'mint-ui'
Vue.component(Loadmore.name, Loadmore)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.use(Lazyload)
Vue.use(InfiniteScroll)
// import MintUi from 'mint-ui'
import 'mint-ui/lib/style.min.css'
// Vue.use(MintUi)

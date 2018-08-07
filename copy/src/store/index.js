import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const AllData = [{
        name: 'iPad 4 Mini',
        price: 500.01,
        id:1
    },
    {
        name: 'H&M T-Shirt White',
        price: 10.99,
        id:2
    },
    {
        name: 'Charli XCX - Sucker CD',
        price: 19.99,
        id:3
    }
]

const  store =  new Vuex.Store({
    state:{
        Products: AllData,
        count:0,
        shopList:[]
    },
    getters:{
        getCount (state) {
            return  state.count
        },
        getShopList (state) {
            return state.shopList
        }
    },
    mutations:{
        addToCount ( state, num = 0 ) {
            state.count += num;
        },
        addToShopList(state, item) {
           let  slt = state.shopList.find((val) => {               
               return item.id === val.id
           });
           if ( slt ){
               //给指定id的产品length + 1
               state.shopList.some((val) => {
                   if (val.id === slt.id) {
                       val.length += 1;
                       return  true;
                   }
               } )
           }else{
               state.shopList.push( Object.assign(item,{length:1}) )
           } 
        }
    }
})

export default store;


import { createStore } from 'vuex';
import counterStore from '@/store/counter/index'

export default createStore({
    

    modules: {
        counter: counterStore
    }
});
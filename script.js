const App = {
   data(){
    return{
        value: '',
        post: [],
        counter: 0
    }
   },
   methods: {
    addPost(){
        if(this.value.length > 0){
            this.post.push(this.value);
            this.value = '';
        }
        
    },
    resultPost(value){
        this.post.splice(value, 1);
        this.counter++;
    },
    deletePost(value){
        this.post.splice(value, 1);
    }
   },
   computed: {
    isBtn(){
        return this.value.length > 0;
    }
   }
}

Vue.createApp(App).mount('#app');
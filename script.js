const App = {
   data(){
    return{
        value: '',
        post: [],
        counter: 0,
        update: 0.2,
        audio: 'audio.mp3',
        click: 1,
   }
},
   methods: {
    addPost(){
        if(this.value.length > 0){
            this.post.push(this.value);
            this.value = '';
        }
        
    },
    resultPost( value){
        this.post.splice(value, 1);
        this.counter++;
    },
    deletePost(value){
        this.post.splice(value, 1);
    },
    doneAll(){
        this.counter += this.post.length;
        this.post.splice(0, this.post.length);
    },
    deleteAll(){
        this.post.splice(0, this.post.length);
    },
    fellBlue(){
        return true;
    }
   },
   computed: {
    isBtn(){
        return this.value.length > 0;
    },
   }
}

Vue.createApp(App).mount('#app');
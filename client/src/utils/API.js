import axios from "axios";

export default {
    test: function(query){
        console.log('api util hit');
        
    },

    getContent: function(source){
        switch(source){
            case 'tagesschau':
                return axios.get('/api/tagesschau/');
            case 'makinghiphop':
                return axios.get('/api/makinghiphop/');
            case 'openweather':
                return axios.get('/api/openweather');
            case 'quotes':
                return axios.get('/api/quotes');

            default: return 'no service reached';
        }
    },

    getToDos: function(){
        return axios.get('/api/todos')
    },
    
    addTodo: function(todo){
        return axios.post('/api/todos/', todo)
    },
    
    deleteTodo: function(todo){
        return axios.post('/api/todos/delete', todo)
    },
}



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
                default: console.log('default');
        }


    }
}
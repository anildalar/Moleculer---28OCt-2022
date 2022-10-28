

module.exports = {
    //1. Property:Value
    name:"mail", //String

    settings:{}, //JS object

    dependencies: [], //JS Array

    actions:{},

    methods:{},

    events:{
        // Subscribe to `user.created` event
        "user.purchased"(ctx) {
            console.log("User created:", ctx.params);
        },
    }, //SOCKETS

    //2.Method

    //Service lifecycle methods

    //1.
    created(){},

    started : ()=>{

    },
    stopped:function(){

    }
};
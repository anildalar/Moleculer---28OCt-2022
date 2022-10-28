

module.exports = {
    //1. Property:Value
    name:"user", //String

    settings:{}, //JS object

    dependencies: [], //JS Array

    actions:{
        hello3: {
			rest: {
				method: "GET",
				path: "/hello3"
			},
			async handler(ctx) {
                //ctx.emit(eventName,Payload, )
                let userPayload = {
                    name:"OKLABS",
                    mission:"To Educate student arround the globe"
                };
                ctx.emit('user.purchased',userPayload,["mail","payment","billing"])//Speak

				return "Hello User3";
			}
		},
    },

    methods:{},

    events:{}, //SOCKETS

    //2.Method

    //Service lifecycle methods

    //1.
    created(){},

    started : ()=>{

    },
    stopped:function(){

    }
};
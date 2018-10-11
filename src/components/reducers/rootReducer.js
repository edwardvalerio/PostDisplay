var initState = {

    posts: [

        { id: 15, "title": "Tedst1", "excerpt": "This is a llong description test" },

        { id: 16, "title": "Tedst2", "excerpt": "This is a llong description test" },

        { id: 17, "title": "Tedst3", "excerpt": "This is a llong description test" }

    ]


}


function rootReducer(state = initState ,action)  {


    return state;


}

export default rootReducer;

const initState = {
    projects: [
        {id: '1', title: 'help me find peach', content: 'I am sorry but the Princess is in another Castle'},
        {id: '2', title: 'collect all of the stars', content: 'Travel to all the worlds and complete challenges to find stars'},
        {id:'3', title: 'egg hunt with yoshi', content: "Yoshi!"}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
        console.log('created project', action.project)
    }
    return state
}

export default projectReducer
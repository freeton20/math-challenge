export default {
    state: {
        users: []
    },
    getters: {
        getParticipants(state) {
            return state.users;
        },
    },
    mutations: {
        setUsers(state, users) {
            state.participants = users;
        }
    },
    actions: {
         updateUsers() {
           
        }   
    }
}
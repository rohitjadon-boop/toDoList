const initialState = [];

const toDoList = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const data = action.data
            if(data){
                if(data.length>2){
                    return [...state, data];
                }
            }
            

        case "DELETE_TODO":
            const id = action.id;
            return state.filter((ele, index) => {
                return index !== id;
            });

        default: return state;
    }
}

export default toDoList;
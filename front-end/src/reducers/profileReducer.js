
export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_STUDENT_PROFILE':
            return action.payload;
        case 'UPDATE_STUDENT_PROFILE':
            return action.payload;
        default:
            return state;
    }
};
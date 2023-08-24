

const userReducer = (state = { userData: null, loading: false, error: false, updateLoading: false }, action) => {
    switch (action.type) {
        case "UPDATING_START":
            return { ...state, updateLoading: true, error: false }
        case "UPDATING_SUCCESS":
            localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
            return { ...state, userData: action.data, updateLoading: false, error: false }
        case "LIKE":
            return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
        case "COMMENT":
            return {
                ...state,
                posts: state.posts.map((post) => {
                    if (post._id == +action.payload._id) {
                        return action.payload;
                    }
                    return post;
                }),
            };

        case "UPDATING_FAIL":
            return { ...state, updateLoading: true, error: true };
        case "RETREIVING_START":
            return { ...state, loading: true, error: false };
        case "RETREIVING_SUCCESS":
            return { ...state, posts: action.data, loading: false, error: false };
        case "RETREIVING_FAIL":
            return { ...state, loading: false, error: true };

        case "FOLLOW":
            return { ...state, userData: { ...state.userData, user: { ...state.userData.user, following: [...state.userData.user.following, action.data] } } };

        case "UNFOLLOW":
            return { ...state, userData: { ...state.userData, user: { ...state.userData.user, following: [...state.userData.user.following.filter((personId) => personId !== action.data)] } } };


        case "LOGOUT":
            localStorage.clear();
            return { ...state, userData: null, loading: false, error: false, updateLoading: false }

        default:
            return state;
    }
};
//log

export default userReducer;
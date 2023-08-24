import * as userApi from "../api/api";

export const followUser = (id, data) => async (dispatch) => {
    dispatch({ type: "FOLLOW", data: id })
    userApi.follow(id, data)
}

export const unfollowUser = (id, data) => async (dispatch) => {
    dispatch({ type: "UNFOLLOW", data: id })
    userApi.unfollow(id, data)
}

export const logout = () => async (dispatch) => {
    dispatch({ type: "LOG_OUT" })
}
export const updateUser=(id, formData)=> async(dispatch)=> {
    dispatch({type: "UPDATING_START"})
    try{
        const {data} = await userApi.updateUser(id, formData);
        console.log("Updated",data)
        dispatch({type: "UPDATING_SUCCESS", data: data})
    }   
    catch(error){
        dispatch({type: "UPDATING_FAIL"})
    }
}
// export const updateUser = (id, formData) => async (dispatch) => {
//     dispatch({ type: "UPDATING_START" })
//     try {
//         const { data } = await api.updateUser(id, formData);
//         console.log("Update user action: ", data)
//         dispatch({ type: "UPDATING_SUCCESS", data: data })
//     }
//     catch (error) {
//         dispatch({ type: "UPDATING_FAIL" })
//     }
// };

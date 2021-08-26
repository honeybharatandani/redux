import  userReducer  from "../features/userSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({

    reducer: {
        user: userReducer,
    },

});
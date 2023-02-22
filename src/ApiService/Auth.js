import { GetuserData, RemoveuserData } from "./Storage"


export const isAutent = () => {
    return GetuserData()!=null?true:false;
}

export const logout = () => {
    RemoveuserData();
}
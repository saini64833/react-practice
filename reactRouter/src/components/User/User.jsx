import React from "react";
import { useParams } from "react-router";
function User(){
    const {Userid}=useParams();
    return(
        <div className="bg-gray-500 text-center text-2xl p-4 m-10"> UserId:{Userid}</div>
    )

}
export default User
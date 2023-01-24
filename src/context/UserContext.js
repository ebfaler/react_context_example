import { createContext, useState } from "react";




//create context sets up context and returns an object with a Providr and a Consumer
const UserContext = createContext(null);


/*UserProvider is a higher order component HOC takes an existing component and returns a new component*/
//i will import UserProvider into index.js and wrap around App
export const UserProvider = (props) => {
    const [user, setUser] = useState(null);

    const signInUser = (username, password) => {
        const newUser = {
            username,
            password
        };
        setUser(newUser);
    }

    const signOutUser = () => {
        setUser(null);
    }
    return (
        //  So props.children is going to pass anything we include between the opening/closing Provider tags
        <UserContext.Provider value={{
            user,
            actions: {
                signIn: signInUser,
                signOut: signOutUser
            }
        }}>
            {props.children}
        </UserContext.Provider>


    );


}





export default UserContext;



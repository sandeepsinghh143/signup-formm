// Form => name, email, password, conform password and a submit button 


// 1. name => min 3 char, max 30 char
// 2. email => should contain @ and . 
// 3. password => min 8 char, max 15 char
// 4. confirm password => should match with password 

// If condition are failed => show error message (show first error or show all error)
// Display the user information.

import React,{useState} from "react"; 
import google from "../images/google.png";
import facebook from "../images/facebook.png";


const FormValidation = () => {
    // let [name, setName] = useState("")
    // let [email, setEmail] = useState("")
    // let [password, setPassword] = useState("")
    // let [confirmPassword, setConfirmPassword] = useState("")
    let [user, setUser] = useState({name: "", email: "", password: "", confirmPassword: ""})
    let [error, setError] = useState("")
    let [success, setSuccess] = useState("")

    console.log("user", user)

    function validateForm(event){
        event.preventDefault()
        if(user.name==="" || user.email==="" || user.password==="" || user.confirmPassword===""){
            setSuccess("");
            return  setError("All fields are required!");
        }
        else if(user.name.length < 3 || user.name.length > 30){
            setSuccess("");
           return  setError("Name should be min 3 characters and max 30 charcters");
            
        }
        else if(!user.email.includes("@") || !user.email.includes(".")){
            setSuccess("");
            return setError("Email should contain @ and .");
        }
        else if(user.password.length < 8 || user.password.length > 15){
            setSuccess("");
            return setError("Password should be min 8 characters and max 15 characters");
        }
        else if(user.password !== user.confirmPassword){
            setSuccess("");
            return setError("Please Make sure your password and confirm password match!");
        }

        setSuccess("Successfully Created!");
        setError("");

    }

    return(
        <div>
            
            <h1>Create Account</h1>
            <div className="social">
                <div className="icon"><img src={google} alt="google-logo"/> Sign Up with Google</div>
                <div className="icon"><img src={facebook} alt="facebook-logo"/> Sign Up with Facebook</div>
            </div>
            <p className="divider">- OR -</p>
            <form onSubmit={validateForm}>
                <input type="text" placeholder="Full Name" 
                    onChange={(event)=>setUser({...user, name: event.target.value})}
                />
                <input type="email" placeholder="Email Address" 
                    onChange={(event)=>setUser({...user, email: event.target.value})}
                />
                <input type="password" placeholder="Password" 
                    onChange={(event)=>setUser({...user, password: event.target.value})}
                />
                <input type="password" placeholder="Confirm Password" 
                    onChange={(event)=>setUser({...user, confirmPassword: event.target.value})}
                />

                <button type="Submit" >Create Account</button>
            </form>
            {
                error && <p className="error">Err:{error}</p>
            }
            {
                success && <p className="success">{success}</p>
            }
        </div>
    )

}

export default FormValidation;

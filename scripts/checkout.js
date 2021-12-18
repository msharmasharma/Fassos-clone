import {login, openLogin, closeLogin, login_mobile,isLoggedIn} from "../components/login.js";
import {signup, signupOpen, signupClose,checkEmail} from "../components/signup.js";
import {addNewAddress, getLocation, close_pop, addAddress,save_address} from "../components/add_new_address.js";

document.getElementById("login_pop").innerHTML=login();
document.getElementById("signup_pop").innerHTML=signup();
document.getElementById("add_new_address").innerHTML=addNewAddress();

document.querySelector("#delivery_addAddress button").addEventListener("click",addAddress)
document.getElementById("currentLocation").addEventListener("click",getLocation);    
document.getElementById("addAddress_submit").addEventListener("click",save_address);
    
//login
document.querySelector("#login_details input").addEventListener("input",login_mobile)
document.getElementById("login").addEventListener("click",openLogin);

document.getElementById("back").addEventListener("click",close_pop);
document.getElementById("close_login").addEventListener("click",closeLogin);

//signup
document.getElementById("signup").addEventListener("click",signupOpen);
document.getElementById("close_signup").addEventListener("click",signupClose);
document.querySelectorAll("#signup_details input")[2].addEventListener("input",checkEmail);  
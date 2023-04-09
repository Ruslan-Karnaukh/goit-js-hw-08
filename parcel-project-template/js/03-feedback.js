import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector(".feedback-form input[type=email]" ),
    textarea: document.querySelector(".feedback-form textarea"),
    button: document.querySelector(".feedback-form button"),
    
}
const FEEDBACKFORM = "feedback-form-state";

refs.email.addEventListener("input", throttle(textValue, 500));
refs.textarea.addEventListener("input", throttle(textValue, 500));
refs.form.addEventListener("submit", submitForm);

const obj = {
    email : "",
    textarea : "",
};

getStorageText()
function textValue({target}){
    if(target.type === 'email'){
        refs.email = target.value;
        obj.email = refs.email 
        localStorage.setItem(FEEDBACKFORM, JSON.stringify(obj))
    }else if( target.type === "textarea"){
        refs.textarea = target.value;
        obj.textarea = refs.textarea; 
       localStorage.setItem(FEEDBACKFORM, JSON.stringify(obj))
    } 
    
};

function getStorageText (){
    try {
        const valueStorage = localStorage.getItem(FEEDBACKFORM);
        const parsObj = JSON.parse(valueStorage)
        if(parsObj){     
            obj.email = parsObj.email;
            obj.textarea = parsObj.textarea;
            refs.email.value = obj.email;
            refs.textarea.value = obj.textarea
}} catch (error) {
        console.error("error")
    }

}
   

function submitForm (event){
    event.preventDefault();
    const {email, message} = event.currentTarget;
    if(email.value === "" || message.value === ""){
        return alert("Please fill out the form")
    } 
        obj.email = email.value;
        obj.textarea = message.value;
    
    console.log(obj)
    localStorage.removeItem(FEEDBACKFORM)
    event.currentTarget.reset();
}

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

let obj = {
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
    getStorageText()
};

function getStorageText (){
    const valueStorage = localStorage.getItem(FEEDBACKFORM);
    const parsObj = JSON.parse(valueStorage)
    if(FEEDBACKFORM){
        obj = {
            email : parsObj.email,
            textarea : parsObj.textarea,
        }
        }
    refs.email.value = obj.email;
    refs.textarea.value = obj.textarea
      
}
   

function submitForm (event){
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(FEEDBACKFORM)
    
}

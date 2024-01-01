import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form') 
const CURRENT_FORM = 'feedback-form-state'
feedbackForm.addEventListener('input',throttle(localAdd,500))
pageReload()
feedbackForm.addEventListener('submit',(e) => {
    e.preventDefault()
    console.log(e.currentTarget);
    const case1 = {
        email: e.currentTarget.email.value,
        message: e.currentTarget.message.value
    }
    console.log(case1);
    e.currentTarget.reset()
    localStorage.removeItem(CURRENT_FORM)
})

function localAdd(e) {
    let localStor = localStorage.getItem(CURRENT_FORM)
    localStor = localStor ? JSON.parse(localStor) : {}
    localStor[e.target.name] = e.target.value
    localStorage.setItem(CURRENT_FORM, JSON.stringify(localStor))
}

function pageReload() {
    let currentLocalStor = localStorage.getItem(CURRENT_FORM)
    if(currentLocalStor) {
        currentLocalStor = JSON.parse(currentLocalStor)
        Object.entries(currentLocalStor).forEach(([name,value]) => feedbackForm.elements[name].value = value)
    }
}
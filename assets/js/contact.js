let submit_btn = document.querySelector('.submit');

const service_id = 'service_opymzht';
const template_id = 'template_plqm2qg';

submit_btn.addEventListener('submit', (e) => {
    e.preventDefault()
    valdateForm()
});

const valdateForm = () =>{
    let name_error_message = document.querySelector('span.name');
    let email_error_message = document.querySelector('span.email');
    let message_error_message = document.querySelector('span.message');

    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    }

    let empty_field = '';

    switch (empty_field) {
        case params.name:
            name_error_message.innerHTML = 'Name field cannot be empty';
        break
        case params.email:
            email_error_message.innerHTML = 'Email field cannot be empty';
        break;
        case params.message:
            message_error_message.innerHTML = 'Message field cannot be empty';
        break;
    
        default:
            handleSubmit(params)
            name_error_message.innerHTML = '';
            email_error_message.innerHTML = '';
            message_error_message.innerHTML = '';
        break;
    }
    
}
const handleSubmit = (params) =>{
    
    
    (function(){
        emailjs.init("kS7haeX_WVwwjCdZT");
    })();
    emailjs.send(service_id, template_id, params)
    .then( 
        res => {
            document.getElementById('name').value = '',
            document.getElementById('email').value = '',
            document.getElementById('message').value = '';
        },
        handleSuccess()
       
    ).catch((err) => console.log(err))
}
const handleSuccess = () => {
    let success_container = document.querySelector('div.success');
    let message_success = document.querySelector('span.success_message');
    
    success_container.style.visibility = 'visible';
    message_success.innerHTML = 'Email sent successfully';
    
    setInterval(() => {
        message_success.innerHTML = '';
        success_container.style.visibility = 'hidden';
    }, 5000)
}

/*const scrollToTop = () =>{
    let scroll_progress = document.querySelector('.scrollProgress');
    //let scroll_progress_value = document.querySelector('.scrollProgressValue');
    let scroll_position = document.documentElement.scrollTop;
    let scroll_height =  
        document.documentElement.scrollHeight - 
        document.documentElement.clientHeight;
    
    let scroll_height_percent = Math.round((scroll_position * 100) / scroll_height)

    if (scroll_position > 100){
        scroll_progress.style.display = 'grid';
    }else{
        scroll_progress.style.display = 'none';
    }
    
    scroll_progress.addEventListener('click', () => {
        document.documentElement.scrollTop = 0
    })
    scroll_progress.style.background = `conic-gradient(#64b5f6 ${scroll_height_percent}%,
        #d7d7d7 ${scroll_height_percent}%)`;
}

window.onload = scrollToTop;
window.onscroll = scrollToTop;*/
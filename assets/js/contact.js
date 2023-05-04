
let submit_btn = document.querySelector('.submit');

const service_id = 'service_opymzht';
const template_id = 'template_plqm2qg';

submit_btn.addEventListener('submit', (e) => {
    e.preventDefault()
    valdateForm()
});
const valdateForm = () =>{
    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    }
    
    handleSubmit(params)
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
            document.getElementById('message').value = ''
        
            console.log(res);
            alert('message sent successfully')
        }
    ).catch((err) => console.log(err))
    
}
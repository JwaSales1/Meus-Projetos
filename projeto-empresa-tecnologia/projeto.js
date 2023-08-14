const form = document.getElementById('form')
const  procura = document.ElementById('procura')
const nome = document.ElementeById('nome')

form.addEventListener("submit", (e)=>{

checkInputs();

});

    function checkInputs(){
        const nomeValue = nome.value;
        const procuraValue = procura.value

        if (nomeValue === ''){
            setErrorFor(nome,  'O nome do cliente esta incompleto')

        }else {
            setSucessFor(nome)
        }

         

    }




           //validação

           const formControl = form.querySelectorAll(".form");
           const formIsValid = [...formControls].every((form) => {

           });

           if(formIsValid){
            console.log('O formulário esta 1000% válido')
           }


    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = form.querySelector(small);


    small.inenerText = message;



      

        //adc error
        formControl.className = "form-control error"
    }



     function serSuccessFor(input, message){
        const formControl = input.parentElement;}


        //adc secesso
        formControl.className = "form-control sucess"
         
window.addEventListener('DOMContentLoaded',(event)=>{

    const name=document.querySelector('#Name');
     const texterror=document.querySelector('.text-error');
     name.addEventListener('input',function()
     {
         if(name.value.length == 0)
         {
             texterror.textContent="";
         }
         else
         {
         try
         {
             (new UserDetails()).name=name.value;
             texterror.textContent="";
         }
         catch(e)
         {
             texterror.textContent=e;
         }
        }
     });
     const phoneNumber=document.querySelector('#phone');
     const phoneError=document.querySelector('.phoneNumber');
     phoneNumber.addEventListener('input',function()
     {
         if(phoneNumber.value.length == 0)
         {
            phoneError.textContent="";
         }
         else
         {
         try
         {
             (new UserDetails()).phoneNumber=phoneNumber.value;
             phoneError.textContent="";
         }
         catch(e)
         {
            phoneError.textContent=e;
         }
        }
     });

     const zipCode=document.querySelector('#Zipcode');
     const zipcodeError=document.querySelector('.zipCode');
     zipCode.addEventListener('input',function()
     {
         if(zipCode.value.length == 0)
         {
            zipcodeError.textContent="";
         }
         else
         {
         try
         {
             (new UserDetails()).zipCode=zipCode.value;
             zipcodeError.textContent="";
         }
         catch(e)
         {
            zipcodeError.textContent=e;
         }
        }
     });
    
});
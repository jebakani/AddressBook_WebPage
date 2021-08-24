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

const save=()=>
{
    try{
        let userData=createAddressBook();
        UpdateAndSaveData(userData);
    }
    catch(e)
    {
        alert(e);
    }
}
const createAddressBook=()=>
{
    let userData=new UserDetails();
    userData.name=getInputValueById('#Name');
    userData.phoneNumber=getInputValueById('#phone');
    userData.address=getInputValueById('#address');
    userData.city=getInputValueById('#city');
    userData.state=getInputValueById('#state');
    userData.zipCode=getInputValueById('#Zipcode');
    alert(userData.toString());
    return userData;
}
// geting the value when id is passed
const getInputValueById=(id)=>
{
    let value=document.querySelector(id).value;
    return value;
}
function UpdateAndSaveData(userData)
{
    let AddressList=JSON.parse(localStorage.getItem('AddressBook'));
    if(AddressList!=null)
    {
        AddressList.push(userData);
    }
    else
    {
        AddressList=[userData];
    }
    localStorage.setItem("AddressBook",JSON.stringify(AddressList));
}
Reset=()=>
{
    setTextValue('#Name','');
    setTextValue('#phone','');
    setTextValue('#Zipcode','');
    setValue("#address",'');
    setValue("#city",'Select City');
    setValue("#state",'Select State');
}
//setting text value text field
const setTextValue=(id,value)=>
{
   let element=document.querySelector(id);
   element.textContent=value;
}
const setValue=(id,value)=>
{
    let ElementValue=document.querySelector(id);
    ElementValue.value=value;
}
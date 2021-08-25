let isUpdate=false;
let addressBookObj={};
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
     checkForUpdate();
});
// Check if it is update or new form
const checkForUpdate = () => {
    const userDetail = localStorage.getItem('editEmp');
    isUpdate = userDetail ? true : false;
    if (!isUpdate) return;
    addressBookObj = JSON.parse(userDetail);
    setForm();
}

const save = () => {
    event.preventDefault();
    event.stopPropagation();
    try {
        setAddressBookObject();
        createAndUpdateStorage();
        Reset();
        window.location.replace(siteProperties.home_Page);
    }
    catch (e) {
        alert(e);
    }
}
const setAddressBookObject=()=>
{
    addressBookObj._name=getInputValueById('#Name');
    addressBookObj._phoneNumber=getInputValueById('#phone');
    addressBookObj._address=getInputValueById('#address');
    addressBookObj._city=getInputValueById('#city');
    addressBookObj._state=getInputValueById('#state');
    addressBookObj._zipCode=getInputValueById('#Zipcode');
}

const createAndUpdateStorage=()=>
{
    let addressList=JSON.parse(localStorage.getItem('AddressBook'));
    if(addressList)
    {
        let userData=addressList.find(x=>x._id==addressBookObj._id);
        if(!userData)
        {
            addressList.push(createUserData());
        }
        else
        {
            const index=addressList.map(emp=>emp._id).indexOf(userData._id);
            addressList.splice(index,1,createUserData(userData._id));
        }
    }
    else
    {
        addressList=[createUserData()];
    }
    localStorage.setItem("AddressBook",JSON.stringify(addressList));
}
const createNewUserId=()=>
{
    let userId=localStorage.getItem("UserId");
    userId=!userId?1:(parseInt(userId)+1).toString();
    localStorage.setItem("UserId",userId);
    return userId;
}

const createUserData=(id)=>
{
    let userData=new UserDetails();
    if(!id) userData.id=createNewUserId();
    else userData.id=id;
    setAddressBook(userData);
    return userData;
}
//method to set the value to employee payRoll object
const setAddressBook = (userData) => {
    
    userData.name=addressBookObj._name
    userData.phoneNumber=addressBookObj._phoneNumber
    userData.address=addressBookObj._address
    userData.city=addressBookObj._city
    userData.state= addressBookObj._state
    userData.zipCode=addressBookObj._zipCode
    alert(userData.toString());
}

// geting the value when id is passed
const getInputValueById=(id)=>
{
    let value=document.querySelector(id).value;
    return value;
}

const Reset=()=>
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
const setForm = () => {
    setValue('#Name', addressBookObj._name);
 
    setValue("#phone", addressBookObj._phoneNumber);
    setValue('#Zipcode', addressBookObj._zipCode);
    setValue("#address", addressBookObj._address);
    setValue("#city", addressBookObj._city);
    setValue("#state", addressBookObj._state);
}
// check the selected value
const setSelectedValue = (propertyValue, value) => {
    let allData = document.querySelectorAll(propertyValue);
    allData.forEach(item => {
        if (Array.isArray(value)) {
            if (value.includes(item.value)) {
                item.checked = true;
            }
        }
        else if (item.value == value) {
            item.checked = true;
        }
    });
}
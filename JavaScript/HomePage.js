let addressBookList;
window.addEventListener('DOMContentLoaded',(event)=>
{
    addressBookList=getAddressBookDataFromStorage();
    document.querySelector('.userCount').textContent=addressBookList.length;
    creatInnerHtml();
    localStorage.removeItem('editBook');

});
const getAddressBookDataFromStorage=()=>
{
    return localStorage.getItem('AddressBook')?JSON.parse(localStorage.getItem('AddressBook')):[];
}
const creatInnerHtml=()=>
{
    // separating the header from body
    const headerHtml=" <tr><th>Name</th><th>Address</th><th>City</th><th>State</th><th>Zipcode</th><th>Phone Number</th><th>Actions</th></tr>";
    let innerHtml=`${headerHtml}`;
    for(const userData of addressBookList)
    {
    // Passing the header in the innerhtml
    innerHtml= `${innerHtml} 
            <tr>
                <td>${userData._name}</td>
                <td>${userData._address}</td>
                <td>${userData._city}</td>
                <td>${userData._state}</td>
                <td>${userData._zipCode}</td>
                <td>${userData._phoneNumber}</td>
                <td>
                    <img id=${userData._id} onclick="remove(this)" alt="delete" src="../Asserts/delete-black-18dp.svg">
                    <img id=${userData._id} onclick="edit(this)" alt="edit" src="../Asserts/create-black-18dp.svg">
                </td>
            </tr>
     `;
    document.querySelector('#userTable').innerHTML=innerHtml;
    }
}
// deleting the data from local storage
const remove=(node)=>
{
    let userDetail=addressBookList.find(data=>data._id == node.id);
    if(!userDetail) return;
    let index=addressBookList.map(x=>x._id).indexOf(userDetail._id);
    addressBookList.splice(index,1);
    localStorage.setItem('AddressBook',JSON.stringify(addressBookList));
    document.querySelector('.userCount').textContent=addressBookList.length;
    creatInnerHtml();
}
const edit=(node)=>
{
    let userDetail=addressBookList.find(data=>data._id == node.id);
    if(!userDetail) return;
    localStorage.setItem('editEmp',JSON.stringify(userDetail));
    window.location.replace(siteProperties.register_Page);
}
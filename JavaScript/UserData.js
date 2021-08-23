// Creating the User Detail class  That holds the name, address, city , state , zipcode and phone number as object
class UserDetails
{
        //creating getter setter method
        get name() { return this._name; }
        set name(name) {
            let pattern = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$")
            if (pattern.test(name)) {
                this._name = name;
            }
            else {
                throw 'Name is incorrect';
            }
        }
    
        get address() { return this._address; }
        set address(address) {
           this._address=address;
        }

        get city() { return this._city; }
        set city(city) {
             this._city = city; 
        }
    
        get state() { return this._state; }
        set state(state) {
             this._state = state; 
        }
    
        get zipCode() { return this._zipCode; }
        set zipCode(zipCode) {
            if (CheckValidity(zipCode, "^[1-9][0-9]{2}\\s{0,1}[0-9]{3}$")) { this._zipCode = zipCode; }
            else
                throw 'zipCode is incorrect';
        }
        
        get phoneNumber() { return this._phoneNumber; }
        set phoneNumber(phoneNumber) {
            if (CheckValidity(phoneNumber, "^[1-9]{2}\\s[1-9][0-9]{9}$")) { this._phoneNumber = phoneNumber; }
            else
                throw 'phoneNumber is not valid';
        }

        toString() {
            return 'Name:' + this.firstName + '\nAddress:' + this.address + '\ncity:' + this.city + '\nstate:' + this.state + '\nzipcode:' + this.zipCode + '\nphoneNumber:' + this.phoneNumber;
        }
    }
    //check the validity of the variables by passing the value and pattern
    function CheckValidity(value, patternWord) {
        let pattern = RegExp(patternWord)
        if (pattern.test(value)) {
            return true;
        }
        else {
            return false;
        }
    }

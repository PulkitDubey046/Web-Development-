const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function validateEmail(string) {
    if(regex.test(string)) {
        return true;
    }
    return false;
}

export default validateEmail;
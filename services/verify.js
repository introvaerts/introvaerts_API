const verify = {
  email: (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String(email).toLowerCase())) {
      throw { status: "failed", code: 400, message: "Please enter a valid email address" }
    } 
  }, 
  password: (password) => {
    const strongRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if(!strongRegex.test(String(password))) {
      throw { status: "failed", code: 400, message: "Password doesn't meet criteria" }
    } 
  }
}

module.exports = verify;
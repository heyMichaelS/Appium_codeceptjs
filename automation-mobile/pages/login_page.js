const { I } = inject();

module.exports = {

  // insert your locators and methods here
  fields:{
    email: '~email',
    password: '~senha'
  },

  buttons:{
    enter:'~enter'
  },

  messages:{
    login_error: '~lognFail'

  },

  doLogin(email,password){
    I.fillField(this.fields.email, email)
    I.fillField(this.fields.password, password)
    I.tap(this.buttons.enter)
  },

  checkLooginError(){
    I.waitForElement(this.messages.login_error,5)
    I.seeElement(this.messages.login_error.save)
  },
}

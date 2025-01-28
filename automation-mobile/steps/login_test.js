Feature('login');

const{I,login_page} = inject()
Scenario('Login with success', (home_page) => {

    login_page.doLogin('teste@teste.com', '123456');
    home_page.checkLoginSuccess()

});

Scenario('Login with error', () => {
    login_page.doLogin('xteste@teste.com', '123456');
    // assert login error
    login_page.checkLoginError();

});

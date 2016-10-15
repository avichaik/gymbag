export class App {
  configureRouter(config, router){
    config.title = 'Contacts';
    config.map([
      { route: '',              moduleId: 'login/login',   title: 'Login'},
      { route: 'welcome',  moduleId: 'welcome/welcome', name:'welcome' },
      { route: 'contacts/:id',  moduleId: 'contact-detail', name:'contacts' }
    ]);

    this.router = router;
  }
}
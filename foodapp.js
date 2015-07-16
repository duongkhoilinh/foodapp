(function(){/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/

Router.route('Home',{
  path: '/',
  template: 'Home',
});

Router.route('/dashboard');

var signInRequired = function() {
  AccountsEntry.signInRequired(this);
};

var documentAccessingAllowed = function() {
  if (Meteor.user() || this.params.query['sk']) {
    this.next();
  } else {
    AccountsEntry.signInRequired(this);
  }
};

Router.onBeforeAction(signInRequired, { only: [ 'dashboard'] });

})();

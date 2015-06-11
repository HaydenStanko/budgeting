angular.module('budgetApp', ['routerRoutes'])

// create the controllers
// this will be the controller for the ENTIRE SITE
.controller('mainController', function() {
    
    var vm = this;

    // create a bigMessage variable to display in our view
    vm.bigMessage = 'A smooth sea never made a skilled sailor.';

})

// home page specific controller
.controller('homeController', function() {
    
    var vm = this;
    vm.message = 'This is a home page!';
})

// about page specific controller
.controller('aboutController', function() {
    
    var vm = this;
    vm.message = 'This is an about page!';
})

// weekView specific controller
.controller('weeksController', function() {

    var vm = this;
    vm.message = 'This is the weeks page!';
});

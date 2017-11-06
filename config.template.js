module.exports = {
    deploy: {
        username:       'dainius@agilitude.co.za.wtax.dev',
        password:       'Agmis123456oQo3h5CarTdskVfTLKMB503W',
        login_url:      'https://test.salesforce.com',
        api_version:    41.0,
        timeout:        120000,
        poll_interval:  5000,
    },

    visualforce: {
        template: 'index.page.html',
        page: 'AngularApp',
        controller: 'AngularAppController'
    },

    resources: {
        app_resource_name: 'AngularApp',
        node_module_resource_name: 'NodeModules',
    },

    options: {
        
    }
}
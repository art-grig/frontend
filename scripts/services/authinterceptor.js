'use strict';

angular.module('psJwtApp').factory('authInterceptor', function(authToken) {
    return {
        request: function(config) {
            var token = authToken.getToken();
            config.params = config.params || {};
            if (token)
                config.params.sessionId = token;

            return config;
        },
        response: function(response) {
            return response;
        }
    };
});

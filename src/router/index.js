import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [];

// Import all routes files.
function loadRoutes() {
    const context = require.context('@/router', true, /routes.js$/i);
    return context.keys()
        .map(context) // import module
        .map((m) => m.default); // get `default` export from each resolved module
}

/* 動態載入 routes */
const resourceRoutes = loadRoutes();
resourceRoutes.forEach((route) => {
    routes.push(route);
});

export default new Router({
    routes
});

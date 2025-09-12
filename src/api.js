// API module for EurekaLearn

class API {
    constructor() {
        this.routes = {};
    }
    
    registerRoute(path, handler) {
        this.routes[path] = handler;
    }
    
    handleRequest(method, path, data = {}) {
        if (this.routes[path]) {
            return this.routes[path](data);
        }
        return { error: 'Not found' };
    }
    
    getRoutes() {
        return Object.keys(this.routes);
    }
}

// Update 12
module.exports = API;


// API module for EurekaLearn

class API {
    constructor() {
        this.routes = {};
    }
    
    registerRoute(path, handler) {
        this.routes[path] = handler;
    }
    
    handleRequest(method, path, data = {}) {
        if (this.routes[path]) {
            return this.routes[path](data);
        }
        return { error: 'Not found' };
    }
    
    getRoutes() {
        return Object.keys(this.routes);
    }
}

// Update 16
module.exports = API;


// API module for EurekaLearn

class API {
    constructor() {
        this.routes = {};
    }
    
    registerRoute(path, handler) {
        this.routes[path] = handler;
    }
    
    handleRequest(method, path, data = {}) {
        if (this.routes[path]) {
            return this.routes[path](data);
        }
        return { error: 'Not found' };
    }
    
    getRoutes() {
        return Object.keys(this.routes);
    }
}

// Update 27
module.exports = API;


// API module for EurekaLearn

class API {
    constructor() {
        this.routes = {};
    }
    
    registerRoute(path, handler) {
        this.routes[path] = handler;
    }
    
    handleRequest(method, path, data = {}) {
        if (this.routes[path]) {
            return this.routes[path](data);
        }
        return { error: 'Not found' };
    }
    
    getRoutes() {
        return Object.keys(this.routes);
    }
}

// Update 31
module.exports = API;


// API module for EurekaLearn

class API {
    constructor() {
        this.routes = {};
    }
    
    registerRoute(path, handler) {
        this.routes[path] = handler;
    }
    
    handleRequest(method, path, data = {}) {
        if (this.routes[path]) {
            return this.routes[path](data);
        }
        return { error: 'Not found' };
    }
    
    getRoutes() {
        return Object.keys(this.routes);
    }
}

// Update 33
module.exports = API;

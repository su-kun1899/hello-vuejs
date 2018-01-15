// noinspection JSUnresolvedFunction
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

// noinspection JSUnresolvedFunction
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
});

// noinspection JSUnresolvedFunction
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

// noinspection JSUnresolvedFunction
var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
});

// noinspection JSUnresolvedFunction
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

// noinspection JSUnresolvedFunction
var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
});

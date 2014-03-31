module.exports = {
    'Page title is correct': function (test) {
        test
            .open('http://localhost:8000')
            .assert().title().is('HTML5+Gulp Starter Kit', 'It has title')
            .done();
    }
};
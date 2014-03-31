module.exports = {
    'Carousel show next slide': function (test) {
        test
            .open('http://localhost:8000')
            .click('.slides-next')
            .assert().visible('li:nth-child(4)')
            .done();
    }
};
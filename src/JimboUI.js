/* ui kit */

class QuaraUI {
    constructor() {
        alert('QuaraUI constructor');
    }

    render() {
        alert('QuaraUI render');
    }
}

$(document).ready(function () {
    alert($('#app').attr('key'));
})


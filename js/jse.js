{console.log("%c JIRA Swimlane Extensions: Running.", "background: #eff0f1; color: #222; border-left: solid blue 3px")};

class JiraSwimlaneExtensions {
    constructor () {

    }
}


class OnReady {
    constructor () {
        this.promise = new Promise((resolve, reject) => {
            var checkElement = setInterval(() => {
                const ghx = document.querySelector('#ghx-column-header-group');
                if (typeof ghx !== "undefined") {
                    clearInterval(checkElement);
                    resolve(ghx);
                }
            }, 250);
        });
    }
}


var loaded = new OnReady();

loaded.promise.then((res) => {
    console.info(res);
});
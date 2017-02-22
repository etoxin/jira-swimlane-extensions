{console.log("%c JIRA Swimlane Extensions: Running.", "background: #eff0f1; color: #222; border-left: solid blue 3px")};

class JiraSwimlaneExtensions {
    constructor () {
        console.log("%c Class: JiraSwimlaneExtensions", "background: #eff0f1; color: #222; border-left: solid blue 3px")
        this.createCollapseButton();
    }

    createCollapseButton () {
        this.targetHeaders = document.querySelectorAll('#ghx-column-headers li h2');
        console.info('createCollapseButton', this.targetHeaders);
        Array.prototype.forEach.call(this.targetHeaders, (item) => {
            item.addEventListener('click', (event) => {
                console.info(event);
            });
        })
    }
}

/**
 * Checks if the swimlanes have loaded.
 * 
 * @class OnReady
 */
class OnReady {
    constructor () {
        this.promise = new Promise((resolve, reject) => {
            var checkElement = setInterval(() => {
                const ghx1 = document.querySelectorAll('#ghx-column-headers li h2');
                const ghx2 = document.querySelectorAll('#ghx-pool');
                console.info(ghx1, ghx2);
                if (ghx1.length > 0 && ghx2.length > 0) {
                    clearInterval(checkElement);
                    resolve();
                }
            }, 250);
        });
    }
}

new OnReady().promise.then((res) => {
    var app = new JiraSwimlaneExtensions();
});
var shell = require('shelljs');

// check if everything is available in path
if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git');
    shell.exit(1);
}

for (let j = 0; j < process.argv.length; j++) {
    console.log(j + ' -> ' + (process.argv[j]));
}

Date.prototype.timeNow = function () {
    return ((this.getHours() < 10) ? "0" : "") + this.getHours() + ":" + ((this.getMinutes() < 10) ? "0" : "") + this.getMinutes() + ":" + ((this.getSeconds() < 10) ? "0" : "") + this.getSeconds();
}

if (process.argv.length > 2) {
    var message = process.argv[2];
} else {
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/" +
        (currentdate.getMonth() + 1) + "/" +
        currentdate.getFullYear() + " @ " +
        currentdate.getHours() + ":" +
        currentdate.getMinutes() + ":" +
        currentdate.getSeconds();
    var message = "Publishing site: " + datetime;
}

// build site
shell.cd('public');

// add new git changes
if (shell.exec('git add .').code !== 0) {
    shell.echo('Error: Git add failed');
    shell.exit(1);
}

// commit new git changes
if (shell.exec('git commit -m "' + message + '"').code !== 0) {
    shell.echo('Error: Git commit failed');
    shell.exit(1);
}

// git push
if (shell.exec('git push origin master').code !== 0) {
    shell.echo('Error: Git push failed');
    shell.exit(1);
}

shell.cd('..');
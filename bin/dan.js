#!/usr/bin/env node

const path = require('path');
const { exec } = require('child_process');

const projectName = process.argv[2];
const currentDirName = path.resolve();

console.log(`Creating new project ${projectName} ...`);
const isProjectCreated = exec(
    `mkdir ${projectName} &&  cp -r ${__dirname}/../boilerplate/. ${currentDirName}/${projectName}/`,
    (initErr, initStdout, initStderr) => {
        if (initErr) {
            console.error(`Holy shit, an ERROR creating new project: ${initErr}`);
            return;
        }
    }
);

if (isProjectCreated) {
    console.log('Folder project created ...');
    console.log('Installing dependencies ...');
    setTimeout( () => { 
        exec(
            `cd ${currentDirName}/${projectName} && npm i`,
            (initErr, initStdout, initStderr) => {
                if (initErr) {
                    console.error(`Holy shit, an ERROR installing dependencies: ${initErr}`);
                    return;
                }
            }
        );
        console.log('DONE!');
        return;
    },
    2000);
}
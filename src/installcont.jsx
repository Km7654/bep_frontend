import React from 'react';

const Content = ({ content }) => {
    const data =
    {
        "installation": [
            {
                "h1": "Clone this repository",
                "p": "git clone https://github.com/bishalde/bep.git",
                "image": false,
            },
            {
                "h1": "Navigate to the project directory in your terminal",
                "p": "cd bep",
                "image": false,
            },
            {
                "h1": "Install the required dependencies by running",
                "p": "npm install",
                "image": false,
            },
            {
                "h1": "How to bind the module",
                "p": "npm link",
                "image": false,
            },
        ],
        "commands": [
            {
                "h1": "Initialize a Repository- Initialize an empty Bep repository in your project directory",
                "p": "bep init",
                "image": false,
            },
            {
                "h1": "Configuration- View or set configuration options for your Bep repository.",
                "p": "bep config <key> [value]",
                "image": false,
            },
            {
                "h1": "Add Changes to Staging- Add changes in the working directory to the staging area. You can specify multiple file paths to add.",
                "p": "bep add <paths...>",
                "image": false,
            },
            {
                "h1": "Commit Changes Capture a snapshot of the project's currently staged changes with a commit message",
                "p": "bep commit <message>",
                "image": false,
            },
            {
                "h1": "Display Repository Status Display the state of the working directory and the staging area",
                "p": " bep status",
                "image": false,
            },
            {
                "h1": "Pretty-print Commit Logs Display the contents of the commit logs",
                "p": " bep log",
                "image": false,
            },
            {
                "h1": "Revert a File to a Previous Version Revert a file to the last committed version or a specific commit using the -c option.",
                "p": " bep checkout <filepaths...>  or bep checkout -c <commitId> <filepaths...>",
                "image": false,
            },
        ],
    }


return (
    <div className='install-content'>
        <ul>
            {data[content].map((item, index) => (
                <li key={index}>
                    <h3>{item.h1}</h3>
                    <div className='command'>
                        <p>{item.p}</p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);
};

export default Content;

/*
const heading = React.createElement("h1", { id: 'heading' }, "Hello World from React");

console.log(heading);*/
const root = ReactDOM.createRoot(document.getElementById("root"));



const parent = React.createElement(
    "div",
    { id: 'parent' },
    [React.createElement("div", { id: 'child1' },
        [React.createElement("h1", {}, "I am H1 Tag"),
        React.createElement("h2", {}, "I am H2 Tag")]
    ),
    React.createElement("div", { id: 'child2' },
        [React.createElement("h1", {}, "I am H1 Tag"),
        React.createElement("h2", {}, "I am H2 Tag")]
    ),
    React.createElement("div", { id: 'child3' },
        [React.createElement("h1", {}, "I am h1"),
        React.createElement("h2", {}, "I am h2")
        ]
    )
    ]
);

root.render(parent);
console.log(parent);
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Namaste React 🚀");

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);

//JSX => Babel transpiles the jsx into =>React.createElement =>React Element(Object) => HTML Element
const jsxheading = <h1 className="heading">Namate React BY JSX</h1>

console.log(jsxheading);


//Functional Component

const HeadingComponent = () => {
    return <h1>Namaste React From Functional Component</h1>
};

const HeadingComponentTwo = () => (
    <div>
        <h1>Namaste React From Functional Component</h1>
    </div>
);
root.render(<HeadingComponentTwo />);

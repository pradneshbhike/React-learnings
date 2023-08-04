import react from "react";
import reactDom from "react-dom";


// Create Element object in react -> API takes (tag,attributes,children)
// const heading = React.createElement("h1",{id:"heading"},"Hello World from React"); //creating object
// console.log(heading)

{/* <div id="parent">
    <div id="child1">
        <h1>
            I am kid 1 of child 1
        </h1>
        <h1>
            I am kid 2 of child 1
        </h1>
    </div>
</div> */}


// const heading = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child1" }, [React.createElement("h1", {}, "I am kid 1 of child 1"), React.createElement("h1", {}, "I am kid 2 of child 1")]), React.createElement("div", { id: "child2" }, [React.createElement("h1", {}, "I am kid 1 of child 2"), React.createElement("h1", {}, "I am kid 2 of child 2")])]);
// console.log(heading)

// const jsxHeading = <h1>Namaste from jsx</h1>
// console.log(jsxHeading)

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading); // putting heading object in root

//React Element
// const heading = React.createElement("h1", { id: "parent" }, "Namaste React🚀")
const heading = <h1 id="parent">Namaste React🚀</h1>

//React Component

const Title = () => <h1 id="parent">Namaste React🚀</h1>;

const ComponentReact = () => {
    return (
    <div className="demo">
        {/* componet composition */}
        <Title/>
    <h2 id="child">Namaste React component as child🚀</h2>
    </div>
    
)}

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)
root.render(<ComponentReact />)


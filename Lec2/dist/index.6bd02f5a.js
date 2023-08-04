// Create Element object in react -> API takes (tag,attributes,children)
// const heading = React.createElement("h1",{id:"heading"},"Hello World from React"); //creating object
// console.log(heading)
const heading = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "I am kid 1 of child 1"),
        React.createElement("h1", {}, "I am kid 2 of child 1")
    ]),
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "I am kid 1 of child 1"),
        React.createElement("h1", {}, "I am kid 2 of child 1")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // putting heading object in root

//# sourceMappingURL=index.6bd02f5a.js.map

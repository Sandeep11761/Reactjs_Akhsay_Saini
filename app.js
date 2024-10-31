// const heading = React.createElement(                                    // it will create A React Element Known As Object of Js
//     'h1', { id: 'home' }, 'jai Jai React Js');
// const root =ReactDOM.createRoot(document.getElementById('root'));           // manuplating the Dom by React.JS
// root.render(heading);                                                  // render convert to the Html Syntax and Put it inside the"DOM Tree" 






const heading = React.createElement('div', { id: 'mainDiv' },
    [React.createElement('div', { id: 'content' },[
        React.createElement('div',{id:'1'}[
            React.createElement('h1',{id:"1"},"This is 1 HeadingRight NOw"),
            React.createElement('h1',{id:"2"},"This is 2 HEadingRightnow")]
        ),React.createElement('div',{id:'2'})
    ]),
React.createElement('div',{class:'blue'},"this is Div2")
    ]
)
console.log(heading);  // object
const root = ReactDOM.createRoot(document.getElementById('root1'));
root.render(heading);



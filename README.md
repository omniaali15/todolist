## react course Summary :

 1. Learn how to install react with npm and creating it’s components.
 2. whats is react ?
 - it is library to make a daynamic UI.
3. Important concept in react is : single page application , means app with on page but have alote of views .
4. Apps using react : facebook - whatsapp - instgram - dropbox.
5. Core Concepts of React :
- components.
- jsx.
- virtual Dom.

   >- JSX : write html tags in js files , use expretions on view and use babel to compile jsx.
   >-  Virtual Dom : make Fake dom and compare it with original one to enhance run time.
6. State and Probs:
- probs: -like html attributes. ex`name=“value”`
   > - can pass dynamic data from parent to child component.
   > - can not be changed.
- State : -like object in js.
  >-  private feature belongs to single component.
  >- can be changed , hold and declare data about this component.
  >- use built-in function in react called “setState” 
  `this.setState({…});` to change state.
7. Import , Export and ExportDefault.
8. Nested component and Arrow function:
- Nested component : call component in another component in tags.
9. Statefull and Stateless components:
- Statefull: declare it throw class and use it when want to store data
- Stateless: care with UI and view data only and this component has no state and it declars on function not class.
10. IF condition : ex `return item.count>0 ? (…) : (…)`
11. LifeCycle of components in order:
- constructor
- render
- componentDidMount
- componentDidUpdate
12. Routing (reactRouter) : to routing in pages without reload.
- command : `npm i react-routr-dom`.
- must make import the library {browserRouter,Route} from react-routr-dom in App.js file.
- import {Link,NavLink} from react-router-dom. ex:
 `<link to="">...</link>`
- NavLink support class called active can make changes on it.
13. Dealing with http requests and get external data and Api.
- use axios to delay with requests.
14. Install sass compiler.
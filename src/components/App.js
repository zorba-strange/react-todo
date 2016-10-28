const React         = require('react');
const Footer        = require('./Footer').default;
const AddTodo = require('../containers/AddTodo').default;
const VisibleTodoList = require('../containers/VisibleTodoList').default;

const App = () => (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
)

export default App

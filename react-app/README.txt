
vs code ext -> Prettier - Code formatter



cs50@cs50-GF63-Thin-10SC:~/Documents$ npm create vite@4.1.0  
✔ Project name: … react-app
✔ Select a framework: › React
✔ Select a variant: › TypeScript
/home/cs50/Documents/react-app -> npm i
/home/cs50/Documents/react-app -> npm run dev

/home/cs50/Documents/react-app/src/ 
 new file -> Message.tsx
 
code.....................................................................
 
//PascalCasing
function Message() {
//JSX: JavaScript XML
const name = "Doni & Vivi";
if (name)
    return <h1>Hello {name}</h1>;
return <h1>Hello World</h1>;
}

export default Message;

.....................................................................code

/home/cs50/Documents/react-app/src/App.tsx

code.....................................................................

import Message from "./Message";

function App() {
  return <div><Message /></div>
}

export default App;

.....................................................................code

new terminal window
/home/cs50/Documents/hello/react-app/ npm i bootstrap@5.2.1
  
  
/home/cs50/Documents/react-app/src/App.css
delete_all_contents


/home/cs50/Documents/react-app/src/index.css
delete_file


/home/cs50/Documents/react-app/src/main.tsx  

find   -> import './index.css'
replace-> import 'bootstrap/dist/css/bootstrap.css'


/home/cs50/Documents/react-app/src 
create new folder -> components
 
 
/home/cs50/Documents/hello/react-app/src/components/ListGroup.tsx
create new file -> ListGroup.tsx

code.....................................................................

function ListGroup (){
    return <h1>List group</h1>;
}

export default ListGroup;

.................................................................... code

ctrl + p  -> App.tsx

find   -> import Message from "./Message";
replace-> import ListGroup from "./components/ListGroup";

 f-> return <div><Message /></div>
 r-> return <div><ListGroup /></div>
 
 GoTo
 https://getbootstrap.com/docs/5.3/components/list-group/
 
 Copy
 <ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>

/home/cs50/Documents/hello/react-app/src/components/ListGroup.tsx
Clear All and Paste

code.....................................................................
import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
....................................................................code


/home/cs50/Documents/hello/react-app/src/App.tsx
code....................................................................
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
.....................................................................code

install vs code extension -> ES7+

/home/cs50/Documents/hello/react-app/src/components/Alert.tsx	

code.....................................................................
import Alert from "./components/Alert";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <div>
      <Alert />
    </div>
  );
}

export default App;
.....................................................................code

  
 React Developer Tools -> Chrome ext
 
 
 

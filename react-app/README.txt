
vs code ext -> Prettier - Code formatter

-----------------------------------------------------------------

cs50@cs50-GF63-Thin-10SC:~/Documents$ npm create vite@4.1.0  
✔ Project name: … react-app
✔ Select a framework: › React
✔ Select a variant: › TypeScript
cs50@cs50-GF63-Thin-10SC:~/Documents/react-app$ npm i
vs code ~/Documents/react-app$ -> npm run dev
----------------------------------------------------------------  
 /home/cs50/Documents/react-app/src 
 src folder ->new file -> Message.tsx
 
 type.....
 
//PascalCasing
function Message() {
//JSX: JavaScript XML
const name = "Doni & Vivi";
if (name)
    return <h1>Hello {name}</h1>;
return <h1>Hello World</h1>;
}

export default Message;
----------------------------------------------------------------
/home/cs50/Documents/react-app/src/App.tsx

type....

import Message from "./Message";

function App() {
  return <div><Message /></div>
}

export default App;

-----------------------------------------------------------------
  new terminal window
  cs50@cs50-GF63-Thin-10SC:~/Documents/react-app$ npm i bootstrap@5.2.1
  
  delete_all_contents
/home/cs50/Documents/react-app/src/App.css

 delete_file
/home/cs50/Documents/react-app/src/index.css


/home/cs50/Documents/react-app/src/main.tsx  

find-> import './index.css'
replace-> import 'bootstrap/dist/css/bootstrap.css'

 /home/cs50/Documents/react-app/src 
 create new folder -> components
 
 23:35


import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Profile from "./components/Profile";
import TodoList from "./components/Person";
import Profile2 from "./components/Profile2";
import PackingList from "./components/PackingList";
import List from "./components/List";
import Toolbar from "./components/Toolbar";
import TestComponent from "./components/Test";
import Picture from "./components/C-ChangeImage";
import EditProfile from "./components/C-Profile";
import SyncedInputs from "./components/C-SyncedInputs";
import FilterableList from "./components/C-FilterableList";
import ChallengeForm from "./components/C-Form";
import ChallengeField from "./components/C-Field";
import Messenger from "./components/reducer/Msessenger";
import ContextTest from "./components/context/ContextTest";
import TestApp from "./components/context-test/TestApp";
import TaskApp from "./components/context-reducer/TaskApp";

function App() {
  const [count, setCount] = useState(0);

  function countUp() {
    setCount(count + 1);
  }

  function refresh() {
    setCount(0);
  }

  function handleClick() {
    alert("ㅇㅇ");
  }

  return (
    // <>
    //   <h1>ㅇㅇㅇㅇ</h1>
    //   <CommonButton count={count} title="카운트 업" onclickButton={countUp} />
    //   <CommonButton title="초기화" onclickButton={refresh} />
    // </>

    // <section>
    //   <h1>갤러리</h1>
    //   <Profile />
    //   <Profile />
    //   <Profile />
    // </section>

    // <>
    //   <Profile2 />
    // </>

    // <>
    //   <PackingList />
    // </>

    // <>
    //   <List />
    // </>

    // <>
    //   <Toolbar onPlayMovie={handleClick} onUploadImage={handleClick} />
    // </>
    // <>
    //   <TestComponent />
    // </>
    // <>
    //   <Picture />
    // </>
    // <>
    //   <EditProfile />
    // </>
    // <>
    //   <SyncedInputs />
    // </>
    // <>
    //   <FilterableList />
    // </>
    // <>
    //   <ChallengeForm />
    // </>
    // <>
    //   <ChallengeField />
    // </>
    // <>
    //   <Messenger />
    // </>
    // <>
    //   <ContextTest />
    // </>
    // <>
    //   <TestApp />
    // </>
    <TaskApp />
  );
}

export default App;

import React, { useState } from 'react'
import ActivityList from './components/ActivityList'

function App(props) {
  const [run, reRun] = useState({});
  console.log(run)

  var show = 0

  return (
    <div className="grid mx-auto max-w-5xl">
      <div className="grid place-items-center">
        <ActivityList 
          reRun={reRun}
        />

      </div>
    </div>
  );
}

export default App;

// import OpenAI from 'openai';
import React from 'react';
import { Home } from './components/Home';

// const openai = new OpenAI({
//   apiKey: 'your api token',
//   dangerouslyAllowBrowser: true // defaults to process.env["OPENAI_API_KEY"]
// });
  
function App() {
  
  // const completion = await openai.chat.completions.create({
  //   messages: [{ role: 'user', content: 'Say this is a test' }],
  //   model: 'gpt-3.5-turbo',
  // });
  // console.log(completion.choices);
  
  return (  
    <div className="App">
      <Home />
    </div>
  );
}

export default App;

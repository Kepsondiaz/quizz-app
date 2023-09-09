import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: 'your api token',
  dangerouslyAllowBrowser: true // defaults to process.env["OPENAI_API_KEY"]
});
  
async function App() {
  
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-3.5-turbo',
  });
  console.log(completion.choices);
  
  return (  
    <div className="App">
      Quizz app
    </div>
  );
}

export default App;

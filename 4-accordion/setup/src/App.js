import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  const [questions, setQuestions] = useState(data)
  const renderedQuestion = questions.map((question) => {
    return <SingleQuestion key={question.id} {...question} />
  })

  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {renderedQuestion}
        </section>
      </div>

    </main>
  )
}

export default App;

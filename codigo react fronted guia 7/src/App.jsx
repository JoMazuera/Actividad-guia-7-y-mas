// App.jsx
import React, { useState } from "react";

const SurveyApp = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    {
      id: 1,
      text: "¿Cuál es tu lenguaje de programación favorito?",
      options: ["JavaScript", "Python", "Java", "C#"],
    },
    {
      id: 2,
      text: "¿Con qué frecuencia usas React?",
      options: ["Diariamente", "Semanalmente", "Ocasionalmente", "Nunca"],
    },
  ];

  const handleChange = (questionID, option) => {
    setAnswers({ ...answers, [questionID]: option });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Respuestas enviadas:", answers);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Encuesta de Programación</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((q) => (
          <div key={q.id} style={{marginBottom: "20px"}}>
            <p>{q.text}</p>
            {q.options.map((opt) => (
              <label key={opt} style={{ display:"block", margin:"5px 0" }}>
                <input
                  type="radio"
                  name={`question-${q.id}`}
                  value={opt}
                  onChange={() => handleChange(q.id, opt)}
                  checked={answers[q.id] === opt}
                />
                {opt}
              </label>
            ))}
          </div>
        ))}
        <button type="submit">Enviar</button>
      </form>
      {submitted && <p>¡Gracias por responder!</p>}
    </div>
  );
};

export default SurveyApp;

import React, { useState, useEffect } from "react";
import { questions } from "../data";

function Test() {
  const [result, setResult] = useState({});
  const [count, setCount] = useState(-1);
  let any;

  useEffect(() => {
    {
      count !== -1 && alert(`You point: ${count} / ${questions.length}`);
    }
  }, [count]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setResult({
      ...result,
      [name]: parseInt(value),
    });
    // setCount((prev) => prev + parseInt(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("result: ", result);
    console.log(Object.values(result));
    any = Object.values(result).reduce((total, current) => {
      return total + current;
    }, 0);
    setCount(any);
  };

  return (
    <div className="test">
      <form onSubmit={handleSubmit}>
        {questions.map((quiz) => (
          <>
            <h4>{quiz.questionText}</h4>
            {quiz.answerOptions.map((answer) => (
              <>
                <label className="rad-label">
                  <input
                    className="rad-input"
                    type="radio"
                    name={quiz.questionText}
                    value={answer.isCorrect}
                    onChange={handleChange}
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">{answer.answerText}</div>
                </label>
              </>
            ))}
          </>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Test;

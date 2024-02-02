import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export const App = () => {
  const [step, setStep] = useState(1);
  const [isOpne, setIsOpen] = useState(true);

  function previous() {
    if (step > 1) setStep(step - 1);
  }
  function next() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      <div>
        {isOpne && (
          <div className="steps">
            <div className="numbers">
              <div className={step >= 1 ? "active" : ""}>1</div>
              <div className={step >= 2 ? "active" : ""}>2</div>
              <div className={step >= 3 ? "active" : ""}>3</div>
            </div>
            <div className="message">
              step {step}: {messages[step - 1]}
            </div>
            <div className="buttons">
              <button
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                onClick={previous}
              >
                Previous
              </button>
              <button
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                onClick={next}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

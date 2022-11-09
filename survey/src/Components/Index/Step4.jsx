import React from "react";

export default function Step4({ form, setCheckbox, setTab, nextTab, setInput }) {
  // the constant is only valid if age and sex are not empty and form race is equal to something
  const isValid =
    form.helpful !== "";

  return (
    <>
      <div className="step third">
        <div className="form">
        <h3 className="med">
            Which of the following best describes you? Select all that apply.{" "}
          </h3>
          
            <div className="input__checkbox">
              <div className="input__checkbox-item">
                <input type="checkbox" onClick={setCheckbox("relevant_neg")} />
                <label htmlFor=""></label>
                <span>The guidance needs to be more relevant to my goals</span>
              </div>
              <div className="input__checkbox-item">
                <input type="checkbox" onClick={setCheckbox("understands_needs_neg")} />
                <label htmlFor=""></label>
                <span>My provider needs to know me better</span>
              </div>
              <div className="input__checkbox-item">
                <input type="checkbox" onClick={setCheckbox("another_aspect")} />
                <label htmlFor=""></label>
                <span>I want to be working on another aspect of my health</span>
              </div>
              <div className="input__checkbox-item">
                <input type="checkbox" onClick={setCheckbox("motivated_neg")} />
                <label htmlFor=""></label>
                <span>I need more motivation and accountability</span>
              </div>
              <div className="input__checkbox-item">
                <input type="checkbox" onClick={setCheckbox("actionable_next_step_neg")} />
                <label htmlFor=""></label>
                <span>I need an actionable next step towards my goals</span>
              </div>
              <div className="input__checkbox-item">
                <input type="checkbox" onClick={setCheckbox("other_description_bool_neg")} />
                <label htmlFor=""></label>
                <span>
                  Other (please specify below)
                </span>
              </div>
              <input
                type="text"
                className="input"
                placeholder="Ex: This is what could be improved..."
                onChange={setInput("other_description_neg_text")}
              />
            </div>
          </div>
      </div>
      <button
        type="button"
        className="button primary"
        disabled={!isValid}
        onClick={() => setTab(3)}
      >
        Continue
      </button>
    </>
  );
}

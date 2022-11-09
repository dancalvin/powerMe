import React from "react";

export default function Step3({ form, setCheckbox, nextTab, setInput , setTab }) {
  // the constant is only valid if age and sex are not empty and form race is equal to something
  const isValid =
    form.relevant_pos !== false ||
    form.understands_needs_pos !== false ||
    form.specific_goal_pos !== false ||
    form.motivated_pos !== false ||
    form.actionable_next_step_pos !== false ||
    form.other_description_bool_pos !== false &&
    form.other_description_pos_text !== "";

  return (
    <>
      <div className="step second">
        <div className="form">

        <h3 className="med">
            Which of the following best describes you? Select all that apply.{" "}
          </h3>
          
            <div className="input__checkbox">
              <div className="input__checkbox-item">
                <input type="checkbox" onClick={setCheckbox("relevant_pos")} />
                <label htmlFor=""></label>
                <span>My provider gave relevant guidance</span>
              </div>
              <div className="input__checkbox-item">
                <input type="checkbox" onClick={setCheckbox("understands_needs_pos")} />
                <label htmlFor=""></label>
                <span>My provider understands my needs, goals, and concerns</span>
              </div>
              <div className="input__checkbox-item">
                <input type="checkbox" onClick={setCheckbox("specific_goal_pos")} />
                <label htmlFor=""></label>
                <span>This visit was tied to a specific goal of mine</span>
              </div>
              <div className="input__checkbox-item">
                <input type="checkbox" onClick={setCheckbox("motivated_pos")} />
                <label htmlFor=""></label>
                <span>I am motivated to continue my journey</span>
              </div>
              <div className="input__checkbox-item">
                <input type="checkbox" onClick={setCheckbox("actionable_next_step_pos")} />
                <label htmlFor=""></label>
                <span>I have an actionable next step</span>
              </div>
              <div className="input__checkbox-item">
                <input type="checkbox" onClick={setCheckbox("other_description_bool_pos")} />
                <label htmlFor=""></label>
                <span>
                  Other (please specify below)
                </span>
              </div>
              <input
                type="text"
                className="input"
                placeholder="Ex: This is what i liked..."
                onChange={setInput("other_description_pos_text")}
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

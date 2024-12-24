import React from "react";
import "./PatientForm.css"

const PatientForm = () => {
  return (
    <form>
      <div>
        <label htmlFor="sex">Sex</label>
        <input type="text" id="sex" name="sex" />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input type="number" id="age" name="age" />
      </div>
      <div>
        <label htmlFor="diabetesDuration">Diabetes Duration</label>
        <input type="number" id="diabetesDuration" name="diabetesDuration" />
      </div>
      <div>
        <label htmlFor="diabeticRetinopathy">Diabetic Retinopathy</label>
        <input type="text" id="diabeticRetinopathy" name="diabeticRetinopathy" />
      </div>
      <div>
        <label htmlFor="diabeticNephropathy">Diabetic Nephropathy</label>
        <input type="text" id="diabeticNephropathy" name="diabeticNephropathy" />
      </div>
      <div>
        <label htmlFor="smoking">Smoking</label>
        <input type="text" id="smoking" name="smoking" />
      </div>
      <div>
        <label htmlFor="drinking">Drinking</label>
        <input type="text" id="drinking" name="drinking" />
      </div>
      <div>
        <label htmlFor="height">Height</label>
        <input type="number" id="height" name="height" step="0.01" />
      </div>
      <div>
        <label htmlFor="weight">Weight</label>
        <input type="number" id="weight" name="weight" step="0.01" />
      </div>
      <div>
        <label htmlFor="bmi">BMI</label>
        <input type="number" id="bmi" name="bmi" step="0.01" />
      </div>
      <div>
        <label htmlFor="sbp">SBP</label>
        <input type="number" id="sbp" name="sbp" />
      </div>
      <div>
        <label htmlFor="dbp">DBP</label>
        <input type="number" id="dbp" name="dbp" />
      </div>
      <div>
        <label htmlFor="hba1c">HbA1c</label>
        <input type="number" id="hba1c" name="hba1c" step="0.01" />
      </div>
      <div>
        <label htmlFor="fbg">FBG</label>
        <input type="number" id="fbg" name="fbg" />
      </div>
      <div>
        <label htmlFor="tg">TG</label>
        <input type="number" id="tg" name="tg" />
      </div>
      <div>
        <label htmlFor="cPeptide">C-Peptide</label>
        <input type="number" id="cPeptide" name="cPeptide" />
      </div>
      <div>
        <label htmlFor="tc">TC</label>
        <input type="number" id="tc" name="tc" />
      </div>
      <div>
        <label htmlFor="hdLc">HDLC</label>
        <input type="number" id="hdLc" name="hdLc" />
      </div>
      <div>
        <label htmlFor="ldLc">LDLC</label>
        <input type="number" id="ldLc" name="ldLc" />
      </div>
      <div>
        <label htmlFor="insulin">Insulin</label>
        <input type="number" id="insulin" name="insulin" />
      </div>
      <div>
        <label htmlFor="metformin">Metformin</label>
        <input type="text" id="metformin" name="metformin" />
      </div>
      <div>
        <label htmlFor="lipidLoweringDrugs">Lipid Lowering Drugs</label>
        <input type="text" id="lipidLoweringDrugs" name="lipidLoweringDrugs" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PatientForm;
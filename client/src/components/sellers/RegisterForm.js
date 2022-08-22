import React, { useState } from "react";
import RegisterPersonalInfo from "./RegisterPersonalInfo";
import RegisterStoreInfo from "./RegisterStoreInfo";
import RegisterVerifyInfo from "./RegisterVerifyInfo";

const RegisterForm = () => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
    storeName: "",
    ownersName: "",
    ownersContactNo: "",
    ownersAddress: "",
    verificationNo: "",
    verificationDocFront: "",
    verificationDocBack: "",
  });

  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const setStepValue = (stepVal) => {
    setStep(stepVal);
  };

  const handleChange = (input) => (e) => {
    setInfo({
      ...info,
      [input]: e.target.value,
    });
  };

  const handleVerificationDocFront = (fileName) => {
    setInfo({
      ...info,
      verificationDocFront: fileName,
    });
  };

  const handleVerificationDocBack = (fileName) => {
    setInfo({
      ...info,
      verificationDocBack: fileName,
    });
  };

  switch (step) {
    case 1:
      return (
        <>
          <RegisterPersonalInfo
            next={nextStep}
            change={handleChange}
            values={info}
            set={setStepValue}
          />
        </>
      );
    case 2:
      return (
        <>
          <RegisterStoreInfo
            next={nextStep}
            change={handleChange}
            values={info}
            set={setStepValue}
          />
        </>
      );
    case 3:
      return (
        <>
          <RegisterVerifyInfo
            next={nextStep}
            change={handleChange}
            values={info}
            set={setStepValue}
            frontDoc={handleVerificationDocFront}
            backDoc={handleVerificationDocBack}
          />
        </>
      );
  }
};

export default RegisterForm;

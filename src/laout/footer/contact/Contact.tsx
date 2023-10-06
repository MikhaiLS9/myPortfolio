import styled from "styled-components";
import Theme from "../../../styles/Theme";
import React, { useState } from "react";

function Contact() {
  const [inputValueOne, setInputValueOne] = useState("");
  const [inputValueTwo, setInputValueTwo] = useState("");
  const [inputValueThree, setInputValueThree] = useState("");

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputValueOne(e.target.value);
  };
  const handleInputChangeTwo = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputValueTwo(e.target.value);
  };
  const handleInputChangeThree = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputValueThree(e.target.value);
  };
  const handleSubmit = () => {
    console.log(inputValueOne, inputValueTwo, inputValueThree);
  };

  return (
    <SectionStyle>
      <StyleText>Contact me, let’s make magic together</StyleText>
      <Field
        value={inputValueOne}
        onChange={handleInputChange}
        placeholder="Name:"
      />
      <Field
        value={inputValueTwo}
        onChange={handleInputChangeTwo}
        placeholder="Email:"
      />
      <Field
        value={inputValueThree}
        onChange={handleInputChangeThree}
        as={"textarea"}
        placeholder="Message:"
      />
      <Button onClick={handleSubmit}>Send</Button>
    </SectionStyle>
  );
}
const StyleText = styled.p`
  font-size: 24px;
  font-weight: 500;
`;
const SectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  padding: 9px;
  textarea {
    width: 472px;
    height: 98px;
    resize: none;
  }
`;
const Field = styled.input`
  width: 472px;
  height: 62px;
  border-radius: 8px;
  opacity: 0.11;
  background: #f5f5f5;
  padding: 16px 19px;

  color: ${Theme.color.primaryBg};
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 726px) {
    max-width: 250px;
  }
`;

const Button = styled.button`
  width: 174px;
  height: 50px;
  border-radius: 8px;
  background: ${Theme.color.accent};
  color: ${Theme.color.fonst};
`;
export default Contact;

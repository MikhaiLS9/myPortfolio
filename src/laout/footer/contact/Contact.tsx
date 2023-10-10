import styled from "styled-components";
import Theme from "../../../styles/Theme";
import React, { useState } from "react";

function Contact() {
  const [inputValuesOne, setInputValuesOne] = useState({
    name: "",
    email: "",
    messeage: "",
  });
  const [inputValuesTwo, setInputValueTwo] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setInputValuesOne({ ...inputValuesOne, [field]: e.target.value });
  };
  const handleInputChangeTwo = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputValueTwo(e.target.value);
  };
  const handleSubmit = () => {
    inputValuesOne["messeage"] = inputValuesTwo;

    alert(
      ` Привет: ${inputValuesOne.name}\n Твой емаил ${inputValuesOne.email}\n Cообщение: ${inputValuesOne.messeage}`
    );
  };

  return (
    <SectionStyle>
      <StyleText>Contact me, let’s make magic together</StyleText>
      <Field
        value={inputValuesOne.name}
        onChange={(e) => handleInputChange(e, "name")}
        placeholder="Name:"
      />
      <Field
        value={inputValuesOne.email}
        onChange={(e) => handleInputChange(e, "email")}
        placeholder="Email:"
      />
      <Field
        value={inputValuesTwo}
        onChange={handleInputChangeTwo}
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
  height: 30px;
  border-radius: 8px;
  background: #31313f;
  padding: 16px 19px;

  color: #ffffff;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &::placeholder{
    opacity: 0.5;
  }

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

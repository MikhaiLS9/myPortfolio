import styled from "styled-components";
import Theme from "../../../styles/Theme";
import React, { useState } from "react";

function Contact() {
  const [inputValuesOne, setInputValuesOne] = useState({
    name: "",
    email: "",
    messeage: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => {
    setInputValuesOne({ ...inputValuesOne, [field]: e.target.value });
  };
  const handleSubmit = () => {
    alert(
      ` Привет: ${inputValuesOne.name}\n Твой емаил ${inputValuesOne.email}\n Cообщение: ${inputValuesOne.messeage}`
    );
  };

  return (
    <SectionStyle>
      <StyleText>Contact me, let’s make magic together</StyleText>
      <StyledForm action="">
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
          value={inputValuesOne.messeage}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            handleInputChange(e, "messeage")
          }
          as={"textarea"}
          placeholder="Message:"
        />
        <Button onClick={handleSubmit}>Send</Button>
      </StyledForm>
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
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  padding: 9px;
  width: 100%;

  textarea {
    width: 472px;
    height: 98px;
    resize: none;

    @media (max-width: 726px) {
      width: 100%;
    }
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  gap: 10px;
  margin: 0 auto;
  padding: 9px;

  @media (max-width: 726px) {
    width: 100%;
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

  &::placeholder {
    opacity: 0.5;
  }

  @media (max-width: 726px) {
    width: 100%;
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

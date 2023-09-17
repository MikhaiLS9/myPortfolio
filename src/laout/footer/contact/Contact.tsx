import styled from "styled-components";
import Theme from "../../../styles/Theme";

function Contact() {
  return (
    <SectionStyle>
      <StyleText>Contact me, let’s make magic together</StyleText>
      <Field placeholder="Name:" />
      <Field placeholder="Email:" />
      <Field as={"textarea"} placeholder="Message:" />
      <Button>Send</Button>
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
`;
const Field = styled.input`
  width: 472px;
  height: 62px;
  border-radius: 8px;
  opacity: 0.11;
  background: #f5f5f5;
`;


const Button = styled.button`
  width: 174px;
  height: 50px;
  border-radius: 8px;
  background: ${Theme.color.accent};
  color: ${Theme.color.fonst};
`;
export default Contact;

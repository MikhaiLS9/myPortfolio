import styled from "styled-components";

function Contact() {
  return (
    <SectionStyle>
        <StyleText>Contact me, let’s make magic together</StyleText>
      <Field />
      <Field />
      <Field as={"textarea"} />
      <button>Send</button>
    </SectionStyle>
  );
}
const StyleText = styled.p`

`
const SectionStyle = styled.section`
display: flex;
flex-direction: column;
gap: 10px;
`;
const Field = styled.input``;

export default Contact;

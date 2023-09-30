import styled from "styled-components";
import Icon from "../../components/icon/Icon";
import FlexWrapper from "../../components/main/FlexWrapper";
import Theme from "../../../styles/Theme";

type SkillBoxPropsType = {
  title: string;
  iconId: string;
};


function SkillsBox(props: SkillBoxPropsType) {
  return (
    <StyledBox>
    <FlexWrapper wrap="wrap" direction="column" justify="flex-end">
      <Icon iconId={props.iconId} />
      <SkiledTitel>{props.title}</SkiledTitel>
    </FlexWrapper>
  </StyledBox>
  );
}
const StyledBox = styled.div`
  :first-child {
    background: ${Theme.color.accent};
  }
  display: flex;
  max-width: 256px;
  height: 254px;
  width: 100%;
  background: #bdbdbd;
  margin: 10px;
  padding: 24px;
`;
const SkiledTitel = styled.h3``;
export default SkillsBox;

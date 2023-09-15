import styled from "styled-components";
import Icon from "../../components/icon/Icon";
import FlexWrapper from "../../components/main/FlexWrapper";

type SkillBoxPropsType = {
  title: string;
  iconId: string;
};

function SkillsBox(props: SkillBoxPropsType) {
  return (
    <StyledBox>
      <FlexWrapper>
        <Icon iconId={props.iconId} />
        <SkiledTitel>{props.title}</SkiledTitel>
      </FlexWrapper>
    </StyledBox>
  );
}
const StyledBox = styled.div`
  max-width: 256px;
  height: 254px;
  width: 100%;
  background: #bdbdbd;
  margin: 10px;
`;
const SkiledTitel = styled.h3``;
export default SkillsBox;

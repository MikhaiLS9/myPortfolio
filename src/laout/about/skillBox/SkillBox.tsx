import styled from "styled-components";
import Icon from "../../components/icon/Icon";

type SkillBoxPropsType = {
  title: string;
  iconId: string
};

function SkillsBox(props: SkillBoxPropsType) {
  return (
    <StyledBox>
        <Icon iconId={props.iconId} />
      <SkiledTitel>{props.title}</SkiledTitel>
    </StyledBox>
  );
}
const StyledBox = styled.div`
  min-width: 256px;
  min-height: 254px;
  background: #bdbdbd;
  margin: 10px
`;
const SkiledTitel = styled.h3``;
export default SkillsBox;

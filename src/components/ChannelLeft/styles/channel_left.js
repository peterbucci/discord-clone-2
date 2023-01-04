import styled from "styled-components";
import { Link } from "react-router-dom";

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  background-color: #2f3136;
  color: #ffffff;
`;

export const LeftHead = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  height: 48px;
  box-shadow: rgba(4, 4, 5, 0.2) 0px 1px 0px;
`;

export const LeftBody = styled.div`
  flex: 1;
  margin-top: 8px;
  padding-right: 8px;
  overflow-y: auto;
`;

export const LeftGroup = styled.div``;

export const LeftGroupHeader = styled.h2`
  display: flex;
  margin: 0;
  padding: 18px 8px 4px 18px;
  font-size: 12px;
  font-weight: 600;
  color: #96989d;
  cursor: default;
  & svg {
    margin-right: 2px;
    cursor: pointer;
    &:hover {
      fill: #dcddde;
    }
  }
  &:hover {
    color: #dcddde;
  }
`;

export const LeftGroupHeaderText = styled.span`
  flex: 1;
`;

export const LeftRow = styled.div`
  display: flex;
  align-items: center;
  height: 42px;
  margin: ${({ channel }) => (channel ? "1px 0 1px 8px" : "1px 8px")};
  padding: ${({ channel }) => (channel ? "0" : "0 8px")};
  background-color: ${(props) =>
    props.selected ? "rgba(79, 84, 92, 0.6)" : "auto"};
  border-radius: 4px;
  color: ${(props) => (props.selected ? "#dcddde" : "#96989D")};
  font-family: "gg sans", "Noto Sans", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 16px;
  font-weight: 500;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: ${(props) => (props.disabled ? "auto" : "pointer")};
  &:hover {
    background-color: ${(props) =>
      props.selected || props.disabled ? "auto" : "rgba(79, 84, 92, 0.4)"};
    color: #dcddde;
    & .iconPath {
      fill: #dcddde;
    }
    & .deleteConversationIcon {
      opacity: 1;
    }
  }
  &:active {
    background-color: ${(props) =>
      props.disabled ? "auto" : "rgba(79, 84, 92, 0.7)"};
    color: #ffffff;
    & .iconPath {
      fill: #ffffff;
    }
  }
  & > svg:first-child {
    margin: 4px;
    margin-right: 16px;
  }
`;

export const ConversationIconWrapper = styled.div`
  margin-right: 12px;
  padding-left: 8px;
  width: 32px;
  height: 32px;
  box-sizing: content-box;
`;

export const LeftRowText = styled.span`
  flex: 1;
  padding-right: 8px;
`;

export const DeleteConversationIcon = styled.div`
  width: 16px;
  height: 16px;
  opacity: 0.7;
  margin: 2px;
  padding-right: 8px;
  box-sizing: content-box;
  opacity: 0;
  &:hover path {
    fill: #ffffff;
  }
`;

export const LeftFooter = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 0 8px;
  height: 53px;
  background-color: #292b2f;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 8px 0 -2px;
  padding-left: 2px;
  min-width: 120px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: rgba(79, 84, 92, 0.6);
  }
`;

export const AvatarWrapper = styled.div`
  width: 32px;
  height: 32px;
`;

export const NameTag = styled.div`
  margin-right: 4px;
  padding: 4px 0 4px 8px;
  font-family: "gg sans", "Noto Sans", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
`;

export const NameTagRow = styled.div`
  line-height: 15.5px;
  font-size: ${({ fontSize }) => fontSize ?? "14px"};
  font-weight: ${({ weight }) => weight ?? "auto"};
  color: ${({ color }) => color ?? "auto"};
`;

export const IconsWrapper = styled.div`
  display: flex;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: rgba(79, 84, 92, 0.6);
    & .iconPath {
      fill: #dcddde;
    }
  }
`;

export const Nav = styled(Link)`
  all: unset;
`;

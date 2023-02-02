import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  height: 48px;
`;

export const Left = styled.div`
  display: flex;
  flex: 1;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 20px;
  font-size: 16px;
  font-weight: 500;
`;

export const IconWrapper = styled.div`
  margin: 0 8px;
  &.iconPath:hover {
    cursor: pointer;
    & path {
      fill: ${({ theme }) => theme.textNormal};
    }
  }
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
`;

export const Divider = styled.div`
  margin: 0 8px;
  height: 24px;
  width: 1px;
  background-color: ${({ theme }) => theme.backgroundModifierAccent};
`;

export const Nav = styled.div`
  display: flex;
`;

export const NavLink = styled.div`
  display: flex;
  align-items: center;
  margin: 0 8px;
  padding: 2px 8px;
  color: ${({ selected, theme }) =>
    selected ? theme.white : theme.interactiveNormal};
  cursor: ${({ selected }) => (selected ? "default" : "pointer")};
  background-color: ${({ selected, theme }) =>
    selected ? theme.backgroundModifierSelected : "auto"};
  border-radius: 4px;
  &:hover {
    background-color: ${({ theme }) => theme.backgroundModifierAccent};
    color: ${({ selected, theme }) =>
      selected ? theme.white : theme.textNormal};
  }
  &:active {
    color: ${({ theme }) => theme.white};
  }
`;

export const AddFriend = styled.div`
  margin: 0 8px;
  padding: 2px 8px;
  background-color: ${({ selected, theme }) =>
    selected ? "auto" : theme.statusGreen660};
  border-radius: 4px;
  color: ${({ selected, theme }) =>
    selected ? theme.textPositive : theme.white};
  cursor: pointer;
`;

export const RequestBadge = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.infoDangerForeground};
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.white};
  text-align: center;
`;

export const Right = styled.div`
  display: flex;
  flex: 0;
`;

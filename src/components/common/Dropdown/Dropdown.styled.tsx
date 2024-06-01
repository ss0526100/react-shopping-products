import { COLOR } from '@styles/style.constant';
import { UpArrowSvg } from '@assets/svg';
import styled from '@emotion/styled';

export const DropdownContainer = styled.div`
  width: 125px;
  height: 36px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
`;

export const Trigger = styled.div<{
  $value?: string;
  isOpen: boolean;
}>`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  height: 24px;
  width: calc(100% - 17px);
  border-radius: 8px;
  border: ${({ isOpen: isOpen }) =>
    `1px solid ${isOpen ? COLOR.black : COLOR.gray[100]}}`}
  cursor: pointer;
  color: ${({ isOpen }) => (isOpen ? COLOR.black : COLOR.white)};
  border-color: ${({ isOpen: $isOpen }) =>
    $isOpen ? COLOR.black : COLOR.white};
`;

export const OptionContainer = styled.ul<{ isOpen: boolean }>`
  padding: 0;
  width: 100%;
  border-radius: 6px;
  position: absolute;
  top: 45px;
  left: 0;
  z-index: 1;
  border: ${({ isOpen: $isOpen }) =>
    `1px solid ${$isOpen ? COLOR.black : COLOR.lightGray}}`};
`;

export const Option = styled.li<{ isSelected: boolean }>`
  list-style: none;
  padding: 10px;
  margin: 0;
  width: calc(100% - 20px);
  font-size: 12px;
  line-height: 14px;
  background-color: ${({ isSelected: $isSelected }) =>
    $isSelected ? COLOR.lightGray : COLOR.white};
  color: ${({ isSelected: $isSelected }) =>
    $isSelected ? COLOR.black : COLOR.black};

  &:hover {
    background-color: ${COLOR.black};
    color: ${COLOR.white};
    cursor: pointer;
  }

  &:first-child {
    border-radius: 5px 5px 0 0;
  }

  &:last-child {
    border-radius: 0 0 5px 5px;
  }
`;

export function Arrow({ isOpen }: { isOpen: boolean }) {
  return <UpArrowSvg transform={`${isOpen ? 'scale(1,-1)' : ''}`} />;
}

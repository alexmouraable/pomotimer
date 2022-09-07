import styled from 'styled-components';

interface ProgressBarProps {
  valueInPercent: number;
}

export const ProgressBar = styled.div<ProgressBarProps>`
  background-color: #e44e75;
  height: 20px;
  width: ${(props) => props.valueInPercent}%;
  transition: width 0.25s;
`;

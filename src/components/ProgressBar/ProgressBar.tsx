import * as P from './ProgressBar.styled';

interface ProgressBarProps {
  min?: number;
  value?: number;
  max?: number;
}

export function ProgressBar({
  min = 0,
  value = 0,
  max = 100,
}: ProgressBarProps) {
  if (value < min) {
    throw new Error(`Value (${value}) cannot be less than min (${min}).`);
  }

  if (value > max) {
    throw new Error(`Value (${value}) cannot be greater than max (${max}).`);
  }

  const valueInPercent = (value * 100) / max;

  return <P.ProgressBar valueInPercent={valueInPercent} role="progressbar" />;
}

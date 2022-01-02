import * as C from './styles';

export function LineChart({ title, percentage, color }) {
  return (
    <C.Container>
      <span>{title}:</span>
      <C.ProgressBar percentage={percentage} color={color} />
    </C.Container>
  )
}
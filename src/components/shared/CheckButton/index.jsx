import * as C from './styles';

export const CheckButton = ({ title, checked, onClick }) => {
  return (
    <C.Container >
      <C.Indicator checked={checked} onClick={onClick} /> {title}
    </C.Container >
  )
}
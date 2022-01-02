import * as C from './styles';

export const Content = ({ left, right, middle }) => {
  return (
    <C.Container>
      <div className="">{left}</div>
      <div className="">{right}</div>
      <div className="">{middle}</div>
    </C.Container>
  )
}
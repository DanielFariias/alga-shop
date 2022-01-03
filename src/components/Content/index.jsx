import * as C from './styles';

export const Content = ({ left, right, middle }) => {
  return (
    <C.Container>
      <div>
        {left}
      </div>

      <div>{middle}</div>

      <div>
        {right}
      </div>
    </C.Container>
  )
}
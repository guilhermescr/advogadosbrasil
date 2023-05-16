import styled from 'styled-components';

interface ContainerProps {
  children: JSX.Element;
}

const SignContainerStyles = styled.div`
  align-items: center;
  background-color: #272626;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;

  & button:last-child {
    background-color: #846d62;
    border: none;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    max-width: 300px;
    padding-block: 10px;
    text-transform: uppercase;
    position: absolute;
    bottom: -25px;
    width: 100%;
  }

  & button:last-child:hover {
    background-color: #a78c80;
  }

  & button:last-child:active {
    background-color: #68564e;
  }
`;

export default function SignContainer({ children }: ContainerProps) {
  return <SignContainerStyles>{children}</SignContainerStyles>;
}

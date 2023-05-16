import styled from 'styled-components';

interface SignFormProps {
  children: JSX.Element[];
}

const SignFormStyles = styled.form`
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 5px #a09e9e;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  margin: auto;
  max-width: 350px;
  min-height: 300px;
  padding: 40px;
  padding-bottom: 0;
  position: relative;
  width: 100%;

  & > h1 {
    font-size: 30px;
  }

  & > img {
    border-radius: 50%;
    filter: drop-shadow(0 0 9px #5c5353);
    max-width: 140px;
    position: absolute;
    top: -70px;
    width: 100%;
  }

  @media (max-width: 425px) {
    & > h1 {
      font-size: 26px;
    }
  }

  @media (max-width: 310px) {
    & > h1 {
      font-size: 22px;
    }
  }
`;

export default function SignForm({ children }: SignFormProps) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <SignFormStyles onSubmit={e => handleSubmit(e)}>{children}</SignFormStyles>
  );
}

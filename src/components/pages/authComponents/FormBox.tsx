import { FaUser, FaLock } from 'react-icons/fa';
import styled from 'styled-components';

interface FormBoxProps {
  inputType: string;
  id: string;
  placeholder: string;
}

const FormBoxStyles = styled.div`
  align-items: center;
  background-color: #454545;
  display: flex;
  justify-content: space-between;
  width: 100%;

  & label {
    width: 15%;
  }

  & svg {
    display: block;
    fill: #fff;
    height: 18px;
    margin: auto;
    width: 100%;
  }

  & input {
    background-color: #808080;
    border: none;
    color: #fff;
    padding: 8px;
    transition: all 0.2s ease-out;
    width: 85%;
  }

  & input:focus {
    box-shadow: 0 0 9px #68564e;
    outline: 1px solid #68564e;
  }

  & input::placeholder {
    color: #c4c2c1;
    transition: all 0.15s ease-out;
  }

  & input:focus::placeholder {
    font-size: 14px;
    position: absolute;
    top: 2px;
  }
`;

export default function FormBox({ inputType, id, placeholder }: FormBoxProps) {
  return (
    <FormBoxStyles className="form-box">
      <label htmlFor={id}>
        {inputType === 'email' ? <FaUser /> : <FaLock />}
      </label>
      <input type={inputType} id={id} placeholder={placeholder} />
    </FormBoxStyles>
  );
}

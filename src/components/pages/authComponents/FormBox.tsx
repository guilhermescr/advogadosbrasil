import { FaUser, FaLock } from 'react-icons/fa';

interface FormBoxProps {
  inputType: string;
  id: string;
  placeholder: string;
}

export default function FormBox({ inputType, id, placeholder }: FormBoxProps) {
  return (
    <div className="form-box">
      <label htmlFor={id}>
        {inputType === 'email' ? <FaUser /> : <FaLock />}
      </label>
      <input type={inputType} id={id} placeholder={placeholder} />
    </div>
  );
}

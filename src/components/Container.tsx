import './Container.css';

interface ContainerProps {
  children: JSX.Element;
  customClass: string;
}

export default function Container({ children, customClass }: ContainerProps) {
  return <div className={`wrapper ${customClass}`}>{children}</div>;
}

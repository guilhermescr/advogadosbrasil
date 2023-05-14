import './Container.css';

interface ContainerProps {
  children: JSX.Element;
}

export default function Container({ children }: ContainerProps) {
  return <div className="min-vh-100 wrapper">{children}</div>;
}

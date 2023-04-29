import { MdError } from 'react-icons/md';

type ErrorMessageProps = {
  children: React.ReactNode;
};
export function ErrorMessage({ children }: ErrorMessageProps) {
  return (
    <span className="ui-flex ui-gap-1 ui-text-error">
      <span>
        <MdError className="ui-h-6 ui-w-6" />
      </span>
      {children}
    </span>
  );
}

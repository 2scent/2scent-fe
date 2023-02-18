import styled from 'styled-components';

type TextFieldProps = {
  label?: string;
  error?: boolean;
  errorMessage?: string;
  inputRef?: React.Ref<HTMLInputElement>;
} & React.ComponentPropsWithoutRef<'input'>;

const TextField = ({
  label,
  error = false,
  errorMessage = '',
  inputRef,
  ...rest
}: TextFieldProps) => {
  return (
    <Container>
      {label && <Label htmlFor={rest.id}>{label}</Label>}
      <Input ref={inputRef} error={error} {...rest} />
      {error && <Error>{errorMessage}</Error>}
    </Container>
  );
};

export default TextField;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 700;
  font-size: 13px;
  color: #6C7C7D;
`;

type InputProps = {
  error: boolean;
} & React.ComponentPropsWithRef<'input'>;

const Input = styled.input<InputProps>`
  margin-top: 8px;
  padding: 16px;
  background: ${({ error }) => (error ? '#FDEDEE' : '#F7F7FA')};
  border-radius: 12px;
`;

const Error = styled.p`
  margin-top: 8px;
  font-weight: 400;
  font-size: 13px;
  color: #ED4E5C;
`;

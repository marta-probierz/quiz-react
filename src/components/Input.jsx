import { Input } from '../styles';

export const FormInput = (props) => {
  const { onChange, id, ...inputProps } = props;

  return <Input {...inputProps} onChange={onChange} />;
};

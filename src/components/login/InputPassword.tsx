import React from 'react';

import { Controller, Control } from 'react-hook-form';

import TextField from '../common/TextField';

import { FormInputs } from './LoginForm';

type InputPasswordProps = {
  control: Control<FormInputs, unknown>;
};

const InputPassword = ({ control }: InputPasswordProps) => {
  return (
    <Controller
      control={control}
      name="password"
      defaultValue=""
      rules={{
        required: true,
        pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,30}$/,
      }}
      render={({
        field: { ref, ...rest },
        fieldState: { error },
      }) => (
        <TextField
          id="password"
          label="비밀번호"
          type="password"
          maxLength={30}
          error={!!error}
          errorMessage="올바른 비밀번호 형식으로 입력해주세요."
          inputRef={ref}
          {...rest}
        />
      )}
    />
  );
};

export default InputPassword;

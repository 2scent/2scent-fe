import React from 'react';

import { Controller, Control } from 'react-hook-form';

import TextField from '../common/TextField';

import { FormInputs } from './LoginForm';

type InputIdProps = {
  control: Control<FormInputs, unknown>;
};

const InputId = ({ control }: InputIdProps) => {
  return (
    <Controller
      control={control}
      name="id"
      defaultValue=""
      rules={{
        required: true,
        pattern: /^[A-Za-z0-9]{5,30}$/,
      }}
      render={({
        field: { ref, ...rest },
        fieldState: { error },
      }) => (
        <TextField
          id="id"
          label="아이디"
          type="text"
          maxLength={30}
          inputRef={ref}
          error={!!error}
          errorMessage="올바른 아이디 형식으로 입력해주세요."
          {...rest}
        />
      )}
    />
  );
};

export default InputId;

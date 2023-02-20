import { ComponentMeta, ComponentStory } from '@storybook/react';

import TextField from './TextField';

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    type: {
      control: 'select',
      options: ['email', 'password', 'text'],
    },
  },
} as ComponentMeta<typeof TextField>;


const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'id',
  label: '아이디',
  type: 'text',
  error: false,
  errorMessage: '',
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  ...Default.args,
  label: undefined,
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  value: 'a',
  error: true,
  errorMessage: '올바른 아이디 형식으로 입력해주세요.',
};

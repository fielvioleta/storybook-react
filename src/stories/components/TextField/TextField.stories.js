/* eslint-disable */
import TextField from './TextField';

export default {
  title: "Form/TextField",
  component: TextField
};

const TextFieldTemplate = (args) => <TextField {...args}/>;

export const Simple = TextFieldTemplate.bind({})

Simple.args = {
  label: 'Field Label',
  placeholder: 'placeholder text',
  size: 'lg',
};

/* eslint-disable */
import CheckBox from './CheckBox';

export default {
  title: "Form/CheckBox",
  component: CheckBox
};

export const Default = (args) => <CheckBox {...args}/>;

Default.story = {
  name: 'CheckBox',
};

Default.args = {
  indeterminate: false,
  label: 'Checkbox',
  type: 'primary',
  disabled: false
};
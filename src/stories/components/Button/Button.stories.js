/* eslint-disable */
import Button from './Button';

export default {
  title: "Example/Button",
  component: Button
};

export const Default = (args) => <Button {...args}/>;

Default.story = {
  name: 'Button',
};

Default.args = {
  size: 'large',
  type: 'primary',
  disabled: true,
  label: 'Hello',
};
/* eslint-disable */
import Radio from './Radio';

export default {
  title: "Form/Radio",
  component: Radio
};

const RadioTemplate = (args) => <Radio {...args}/>;

export const Simple = RadioTemplate.bind({})

Simple.args = {
  label: 'Sample Radio Button'
};

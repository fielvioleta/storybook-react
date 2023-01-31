/* eslint-disable */
import InputGroup from './InputGroup';
import Radio from '../Radio/Radio';

export default {
  title: "Form/InputGroup",
  component: InputGroup
};

const Template = (args) => <InputGroup {...args}/>;

export const Simple = Template.bind({})
Simple.args = {
  label: 'Input Group',
  placeholder: 'Input group example',
  size: 'default',
  position: 'start',
  children: <span className="input-group-text">Add on</span>
};


export const WithRadio = Template.bind({})
WithRadio.args = {
  ...InputGroup.args,
  children: <div className="input-group-text">
    <Radio></Radio>
  </div>
};

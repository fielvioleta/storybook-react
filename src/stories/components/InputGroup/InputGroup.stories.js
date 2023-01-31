/* eslint-disable */
import InputGroup from './InputGroup';
import Radio from '../Radio/Radio';
import CheckBox from '../CheckBox/CheckBox';

export default {
  title: "Form/InputGroup",
  component: InputGroup
};

const Template = (args) => <InputGroup {...args}/>;

export const Start = Template.bind({})
Start.args = {
  label: 'Input Group',
  placeholder: 'Input group example',
  size: 'default',
  position: 'start',
  children: <span className="input-group-text">@</span>
};

export const End = Template.bind({})
End.args = {
  ...InputGroup.args,
  position: 'end',
  children: <span className="input-group-text">.com</span>
};

export const WithRadio = Template.bind({})
WithRadio.args = {
  ...InputGroup.args,
  children: <div className="input-group-text">
    <Radio></Radio>
  </div>
};

export const WithCheckbox = Template.bind({})
WithCheckbox.args = {
  ...InputGroup.args,
  children: <div className="input-group-text">
    <CheckBox></CheckBox>
  </div>
};


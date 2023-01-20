/* eslint-disable */
import Navbar from './Navbar';

export default {
  title: "Components/Navbar",
  component: Navbar
};

const LightTemplate = (args) => <Navbar {...args}/>;
const DarkTemplate = (args) => <Navbar {...args}/>;


export const Light = LightTemplate.bind({})
export const Dark = DarkTemplate.bind({})

Light.args = {
  name: 'Light',
  dark: false
};

Dark.args = {
  name: 'Dark',
  dark: true
}
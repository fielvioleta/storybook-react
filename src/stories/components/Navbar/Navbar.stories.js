/* eslint-disable */
import Navbar from './Navbar';

export default {
  title: "Example/Navbar",
  component: Navbar
};

export const Light = (args) => <Navbar {...args}/>;
export const Dark = (args) => <Navbar {...args}/>;

Light.story = {
  name: 'Light',
  dark: false
};

Dark.story = {
  name: 'Dark',
  dark: true
}
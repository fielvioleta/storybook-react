/* eslint-disable */
import Modal from './Modal';

export default {
  title: "Example/Modal",
  component: Modal
};

export const Default = (args) => <Modal {...args}/>;

Default.story = {
  name: 'Modal',
};

Default.args = {
  isStatic: true,
  size: "large",
  isCentered: true,
  title: 'Hello World',
  message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
};
/* eslint-disable */
import Alerts from './Alerts';

export default {
  title: "Components/Alerts",
  component: Alerts
};

export const Default = (args) => <Alerts {...args}/>;

Default.story = {
  name: 'Alerts',
};

Default.args = {
  message: "Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.",
  subMessage: "Whenever you need to, be sure to use margin utilities to keep things nice and tidy.",
  type: "primary",
  title: "Well Done!",
  hasClose:true
};
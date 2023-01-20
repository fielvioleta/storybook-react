/* eslint-disable */
import List from './List';

export default {
  title: "Components/List",
  component: List
};

const SimpleListTemplate = (args) => <List {...args}/>;

export const Simple = SimpleListTemplate.bind({})

Simple.story = {
  name: 'Simple',
  number: 5
};

/* eslint-disable */
import List from './List';

export default {
  title: "Components/List",
  component: List
};

const SimpleListTemplate = (args) => <List {...args}/>;

export const Simple = SimpleListTemplate.bind({})

Simple.args = {
  name: 'Simple',
  children: <>
    <a class="list-group-item list-group-item-action active">
      A list item <span class="badge bg-primary rounded-pill">12</span>
    </a>
    <a class="list-group-item list-group-item-action">
      A list item <span class="badge bg-primary rounded-pill">16</span>
    </a>
    <a class="list-group-item list-group-item-action">
      A list item <span class="badge bg-primary rounded-pill">14</span>
    </a>
  </>
};

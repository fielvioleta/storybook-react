/* eslint-disable */
import Table from './Table';

export default {
  title: "Components/Table",
  component: Table
};

export const Default = (args) => <Table {...args}/>;

Default.story = {
  name: 'Table',
};


Default.args = {
  type: 'primary',
  isStriped: true,
  hoverable: true,
  hasBorder: true,
  isBorderLess: false,
  size: 'extra-large',
};

Default.args = {children: <>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Juan</td>
      <td>Dela Cruz</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Cardo</td>
      <td>Dalisay</td>
    </tr>
  </tbody>
</>}
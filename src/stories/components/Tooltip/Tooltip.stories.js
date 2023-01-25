/* eslint-disable */
import Tooltip from './Tooltip';

export default {
  title: "Components/Tooltip",
  component: Tooltip
};

const RightTemplate = (args) => <Tooltip {...args}/>;


export const Html = RightTemplate.bind({})
Html.args = {
  direction: 'bottom',
  content: <span role="img" aria-label="rabbit emoji">HTML <strong>tooltip:</strong> 🐇</span>,
  children: <div className="example-wrapper">HTML Children</div>
};

export const Right = RightTemplate.bind({})
Right.args = {
  direction: 'right',
  content: 'Right',
  children: 'Right'
};

export const Left = RightTemplate.bind({})
Left.args = {
  direction: 'left',
  content: 'Left',
  children: 'Left'
};

export const Top = RightTemplate.bind({})
Top.args = {
  direction: 'top',
  content: 'Top',
  children: 'Top'
};

export const Bottom = RightTemplate.bind({})
Bottom.args = {
  direction: 'bottom',
  content: 'Bottom',
  children: 'Bottom'
};


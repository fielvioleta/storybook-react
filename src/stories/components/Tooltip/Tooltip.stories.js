/* eslint-disable */
import TextField from '../TextField/TextField';
import Tooltip from './Tooltip';

export default {
  title: "Components/Tooltip",
  component: Tooltip
};

const Template = (args) => <Tooltip {...args}/>;


export const Html = Template.bind({})
Html.args = {
  direction: 'right',
  content: <span role="img" aria-label="rabbit emoji" className='emoji'>HTML <strong>tooltip:</strong> 🐇</span>,
  children: <div className="example-wrapper">
      <TextField size={'lg'} placeholder={'HTML Children'}></TextField>
    </div>
};

export const Right = Template.bind({})
Right.args = {
  direction: 'right',
  content: 'Right',
  children: 'Right'
};

export const Left = Template.bind({})
Left.args = {
  direction: 'left',
  content: 'Left',
  children: 'Left'
};

export const Top = Template.bind({})
Top.args = {
  direction: 'top',
  content: 'Top',
  children: 'Top'
};

export const Bottom = Template.bind({})
Bottom.args = {
  direction: 'bottom',
  content: 'Bottom',
  children: 'Bottom'
};


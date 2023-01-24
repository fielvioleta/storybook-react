/* eslint-disable */
import Cards from './Cards';

export default {
  title: "Components/Cards",
  component: Cards
};

const CardTemplate = (args) => <Cards {...args}/>;

export const Simple = CardTemplate.bind({})

Simple.args = {
  width: 400,
  center: false,
  image: 'https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg',
  hasHeading: true,
  headingText: 'Heading Text',
  hasFooter: true,
  footerText: 'Footer Text',
  cardTitle: 'Card',
  cardBodyText: `Some quick example text to build on the card title and make up the bulk of the card's content.`
};

/* eslint-disable */
import Cards from './Cards';

export default {
  title: "Components/Cards",
  component: Cards
};

const CardTemplate = (args) => <Cards {...args}/>;

export const Card = CardTemplate.bind({})

Card.args = {
  width: 400,
  center: false,
  image: '',
  hasHeading: true,
  headingText: 'Heading Text',
  hasFooter: true,
  footerText: 'Footer Text',
  cardTitle: 'Card',
  cardBodyText: `Some quick example text to build on the card title and make up the bulk of the card's content.`
};

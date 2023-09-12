import React from 'react';
import PropTypes from 'prop-types';
import iconsList from '../../../utils/icons';

export default {
  title: 'Foundation/Button',
};

const Template = (args) => {
  return <ap-button {...args}></ap-button>;
}

export const Button = Template.bind({});
Button.args = {
  content: "This is a button",
  outlined: false,
  disabled: false,
  'text': false,
  'icon-only': false,
  size: 'default',
  'icon-position': ''
};
Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  outlined: PropTypes.bool,
}

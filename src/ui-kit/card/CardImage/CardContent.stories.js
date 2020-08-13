import React from 'react';

import CardImage from '.';

const Template = (args) => <CardImage {...args} />;

const Story = {
  component: CardImage,
  title: 'ui-kit/card/CardImage',
};

const example = Template.bind({});
example.args = {
  src: 'https://picsum.photos/840/472',
};

const isLoading = Template.bind({});
isLoading.args = {
  isLoading: true,
};

export { Story as default, example, isLoading };

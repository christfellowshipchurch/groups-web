import React from 'react';
// import { storiesOf } from '@storybook/react';

import GroupCard from '.';

const Template = (args) => <GroupCard {...args} />;

const Story = {
  component: GroupCard,
  title: 'ui/GroupCard',
  args: {
    coverImage: 'https://picsum.photos/840/472',
    title: 'Group Name',
  },
};

const example = Template.bind({});
example.args = {
  groupSize: 11,
  label: 'Label',
  location: 'Location',
};

const groupSize = Template.bind({});
groupSize.storyName = 'groupSize';
groupSize.args = {
  groupSize: 11,
};

const isLoading = Template.bind({});
isLoading.storyName = 'isLoading';
isLoading.args = {
  groupSize: 11,
  isLoading: true,
  label: 'Label',
  location: 'Location',
};

const label = Template.bind({});
label.storyName = 'label';
label.args = {
  label: 'Label',
};

const location = Template.bind({});
location.storyName = 'location';
location.args = {
  location: 'Location',
};

export { Story as default, example, groupSize, isLoading, label, location };

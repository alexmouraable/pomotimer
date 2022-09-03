import { mdiTrashCan } from '@mdi/js';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  variant: 'secondary',
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  icon: mdiTrashCan,
};

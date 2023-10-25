/* eslint-disable @nx/enforce-module-boundaries */
import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { SearchModalComponent } from '../../../libs/search/smart/src/views/search-modal/search-modal.component';

export default {
   title: 'Search Modal/Search Modal Default',
   component: SearchModalComponent,
   decorators: [
      moduleMetadata({
         imports: []
      })
   ]
} as Meta<SearchModalComponent>;

const Template: Story<SearchModalComponent> = (args: SearchModalComponent) => ({
   component: SearchModalComponent,
   props: args
});

export const SearchModalOpened = Template.bind({});
SearchModalOpened.args = {};
// export const InputStandard = Template.bind({});

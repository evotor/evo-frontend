import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {EvoIconComponent, EvoIconModule} from '../../../projects/ui/src/lib/components/evo-icon';

import {icons} from '@evo/icons';
import {CommonModule} from '@angular/common';

export default {
    title: 'components/evo-icon',
    component: EvoIconComponent,
    decorators: [
        moduleMetadata({
            imports: [
                CommonModule,
                EvoIconModule.forChild([...icons]),
            ],
        }),
    ],
    // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
    argTypes: {
        shape: {
            defaultValue: 'navigation/add'
        }
    },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const template: Story<EvoIconComponent> = (args: EvoIconComponent) => ({
    props: {
        ...args,
        icons,
        getKeys: (obj: object) => Object.keys(obj),
    },
    template: `
<ng-container *ngFor="let category of icons">
    <h4 class="evo-title evo-title_h4">{{category.name}}</h4>
    <div class="icons-list">
        <div class="icon" *ngFor="let shape of getKeys(category.shapes)" >
            <evo-icon [shape]="shape"></evo-icon>
            {{ shape }}
        </div>
    </div>
</ng-container>
    `,
    styles: [`
    .evo-title {
        margin-bottom: 16px;
    }
    .icons-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        grid-template-rows: auto;
        grid-column-gap: 16px;
        grid-row-gap: 32px;
        min-width: 0;
        margin-bottom: 32px;
    }
    .icon {
        display: inline-flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
    }
    evo-icon {
        margin-bottom: 8px;
    }
    `]
});

export const primary = template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
primary.args = {};

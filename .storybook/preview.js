import {setCompodocJson} from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";

setCompodocJson(docJson);

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            date: /Date$/,
        },
    },
    docs: {inlineStories: true},
    options: {
        storySort: {
            order: ['codestyle', ['Введение'], 'components'],
        },
    },
}

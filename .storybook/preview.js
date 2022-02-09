import {setCompodocJson} from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import globalStyles from "!sass-loader!../projects/ui/src/styles/main.scss";

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

// inject global styles
const injectedElement = document.createElement("style");
injectedElement.innerHTML = globalStyles;
document.body.appendChild(injectedElement);

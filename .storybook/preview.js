import {setCompodocJson} from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import globalStyles from "!sass-loader!../projects/ui/src/styles/main.scss";

setCompodocJson(docJson);

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    docs: {inlineStories: true},
}

// inject global styles
const injectedElement = document.createElement("style");
injectedElement.innerHTML = globalStyles;
document.body.appendChild(injectedElement);

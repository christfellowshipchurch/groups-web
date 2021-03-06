import { addDecorator } from "@storybook/react";

import Providers from "../src/Providers";

addDecorator(storyFn => <Providers>{storyFn()}</Providers>);

import { addDecorator } from "@storybook/react";

import Providers from "../Providers";

addDecorator(storyFn => <Providers>{storyFn()}</Providers>);

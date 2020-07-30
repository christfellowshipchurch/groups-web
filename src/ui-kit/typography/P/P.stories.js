import React from 'react';
import { storiesOf } from '@storybook/react';

import P from '.';

storiesOf('ui-kit/typography/P', module)
  .add('default', () => (
    <P>
      {`But I, brothers, could not address you as spiritual people, but as people of the flesh, as infants in Christ. I fed you with milk, not solid food, for you were not ready for it. And even now you are not yet ready, for you are still of the flesh. For while there is jealousy and strife among you, are you not of the flesh and behaving only in a human way? For when one says, "I follow Paul," and another, "I follow Apollos," are you not being merely human?`}
    </P>
  ))
  .add('isLoading', () => (
    <P isLoading>
      {`But I, brothers, could not address you as spiritual people, but as people of the flesh, as infants in Christ. I fed you with milk, not solid food, for you were not ready for it. And even now you are not yet ready, for you are still of the flesh. For while there is jealousy and strife among you, are you not of the flesh and behaving only in a human way? For when one says, "I follow Paul," and another, "I follow Apollos," are you not being merely human?`}
    </P>
  ));

import React from 'react';

import { H1 } from '../../ui-kit';
import GroupCard from '../../ui/GroupCard';

function MyGroups() {
  return (
    <>
      <H1>My Groups</H1>
      <GroupCard
        coverImage={'https://picsum.photos/840/472'}
        groupSize={11}
        isLoading={false}
        label={'Day of the week'}
        location={'Location'}
        title={'Group Name'}
      />
    </>
  );
}

export default MyGroups;

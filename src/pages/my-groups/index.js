import React from 'react';
import styled, { css } from 'styled-components';

import Pin from '../../ui-kit/theme/icons/Pin.svg';
import Groups from '../../ui-kit/theme/icons/Groups.svg';

import { CardContent, CardWrapper, H1, H4, H6 } from '../../ui-kit';

const Card = styled(CardWrapper)`
  min-width: calc(320px - ${({ theme }) => theme.sizing.baseUnit(2)});
  max-width: 420px;
  overflow: hidden;
`;

const GroupDetails = styled.hgroup`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > h6 {
    margin: 0 5px 0 0;
  }
`;

const iconStyles = css`
  fill: ${({ theme }) => theme.colors.primary};
  height: 11px;
  margin: 0 0 2px 0;
  width: auto;
`;

const LocationIcon = styled(Pin)`
  ${iconStyles}
`;

const GroupSizeIcon = styled(Groups)`
  ${iconStyles}
`;

function MyGroups() {
  return (
    <>
      <H1>My Groups</H1>
      <Card>
        <img
          src="https://picsum.photos/840/472"
          width="100%"
          height="auto"
          alt="Default Card Text"
        />
        <CardContent>
          <H4>Group Name</H4>
          <GroupDetails>
            <LocationIcon />
            <H6>Location</H6>
            <GroupSizeIcon />
            <H6>11</H6>
          </GroupDetails>
        </CardContent>
      </Card>
    </>
  );
}

export default MyGroups;

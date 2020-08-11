import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { Groups, Pin } from '../../ui-kit/theme/icons';
import { CardContent, CardWrapper, H4, H6 } from '../../ui-kit';

const Card = styled(CardWrapper)`
  min-width: calc(320px - ${({ theme }) => theme.sizing.baseUnit(2)});
  max-width: 420px;
  overflow: hidden;
`;

const CardLabel = styled(H4)`
  position: absolute;
  top: ${({ theme }) => theme.sizing.baseUnit(-2.3125)};
  left: 0;
  background: ${({ theme }) => theme.colors.text.primary};
  color: white;
  padding: ${({ theme }) =>
    `${theme.sizing.baseUnit(0.3125)} ${theme.sizing.baseUnit(1.25)}`};
`;

const GroupDetails = styled.hgroup`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > h6 {
    margin: ${({ theme }) => `0 ${theme.sizing.baseUnit(0.3125)} 0 0`};
  }
`;

const iconStyles = css`
  fill: ${({ theme }) => theme.colors.primary};
  height: 11px;
  margin: ${({ theme }) =>
    `0 ${theme.sizing.baseUnit(0.125)} ${theme.sizing.baseUnit(0.125)} 0`};
  width: auto;
`;

const LocationIcon = styled(Pin)`
  ${iconStyles}
`;

const GroupSizeIcon = styled(Groups)`
  ${iconStyles}
`;

const GroupCard = ({ coverImage, groupSize, label, location, title }) => (
  <Card>
    {coverImage ? (
      <img
        src={coverImage}
        width="100%"
        height="auto"
        alt="Default Card Text"
      />
    ) : null}
    <CardContent style={{ position: 'relative' }}>
      <CardLabel>{label}</CardLabel>

      <H4>{title}</H4>

      <GroupDetails>
        {location ? (
          <>
            <LocationIcon />
            <H6>{location}</H6>
          </>
        ) : null}

        {groupSize ? (
          <>
            <GroupSizeIcon />
            <H6>{groupSize}</H6>
          </>
        ) : null}
      </GroupDetails>
    </CardContent>
  </Card>
);

GroupCard.propTypes = {
  coverImage: PropTypes.string,
  label: PropTypes.string,
  location: PropTypes.string,
  title: PropTypes.string.isRequired,
  groupSize: PropTypes.string,
};

export default GroupCard;

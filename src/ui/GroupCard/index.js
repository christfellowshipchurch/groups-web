import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import {
  CardContent,
  CardImage,
  CardWrapper,
  H4,
  H6,
  Icon,
} from '../../ui-kit';
import { withOverrides } from '../../ui-kit/theme';

const Card = styled(CardWrapper)`
  max-width: 420px;
  overflow: hidden;
`;

const CardLabel = styled(H4)`
  position: absolute;
  top: ${({ theme }) => theme.sizing.baseUnit(-2.125)};
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

  & > .custom-placeholder {
    margin: ${({ theme }) => `0 ${theme.sizing.baseUnit(0.3125)} 0 0`};

    &.line {
      width: 15%;
      margin-bottom: 0;
    }
  }
`;

const iconStyles = css`
  fill: ${({ theme }) => theme.colors.primary};
  margin: ${({ theme }) =>
    `0 ${theme.sizing.baseUnit(0.125)} ${theme.sizing.baseUnit(0.125)} 0`};
`;

const LocationIcon = styled(Icon).attrs(
  withOverrides('ui-kit.card.CardContent', () => ({
    name: 'pin',
    size: 0.6875,
  }))
)`
  ${iconStyles}
`;

const GroupSizeIcon = styled(Icon).attrs(
  withOverrides('ui-kit.card.CardContent', () => ({
    name: 'groups',
    size: 0.6875,
  }))
)`
  ${iconStyles}
`;

const GroupCard = ({
  coverImage,
  groupSize,
  isLoading,
  label,
  location,
  title,
}) => (
  <Card isLoading={isLoading}>
    {coverImage ? <CardImage src={coverImage} alt={title} /> : null}
    <CardContent style={{ position: 'relative' }}>
      {label ? <CardLabel>{label}</CardLabel> : null}

      <H4>{title}</H4>

      {location || groupSize ? (
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
      ) : null}
    </CardContent>
  </Card>
);

GroupCard.propTypes = {
  coverImage: PropTypes.string.isRequired,
  groupSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isLoading: PropTypes.bool,
  label: PropTypes.string,
  location: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default GroupCard;

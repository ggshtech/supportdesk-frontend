import React from 'react';
import PropTypes from 'prop-types';

import { Icon, AboutTooltip } from 'shared/components';

import { NavLeft, LogoLink, StyledLogo, Bottom, Item, ItemText } from './Styles';

const propTypes = {
  issueSearchModalOpen: PropTypes.func.isRequired,
  issueCreateModalOpen: PropTypes.func.isRequired,
};

const ProjectNavbarLeft = ({ issueSearchModalOpen, issueCreateModalOpen }) => (
  <NavLeft>
    <LogoLink to="/" style={{left: '12px'}}>
	    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="42" height="42"><g id="Icons_copy" data-name="Icons copy" fill="#fff"><path d="M456,208a8,8,0,0,0,7.59-10.53l-24-72a8.006,8.006,0,0,0-4.439-4.824l-56-24,0,.007c-.03-.013-.056-.031-.086-.044a8,8,0,0,0-8.719,1.734l-40.625,40.625L282.027,21a8,8,0,0,0-7.348-5h-.069a8,8,0,0,0-7.364,4.876L218.678,135.364,101.657,18.343A8,8,0,0,0,88,24V256a8,8,0,0,0,2.207,5.518L175.049,350.6,81.6,475.2a8,8,0,0,0,8.93,12.39l168-56,0-.008a7.994,7.994,0,0,0,3.129-1.925l120-120A7.975,7.975,0,0,0,384,304V193.759l70.431,14.086A8.033,8.033,0,0,0,456,208Zm-88,76.686L287.314,204,368,123.313ZM249.656,405.739,110.869,260.012l156.485-45.455ZM274.433,44.9l43,106.354L276,192.686l-45.118-45.118ZM260.556,199.87,104,245.345V43.313ZM186.238,362.35l55.28,58.044L109.766,464.312Zm79.77,40.329,16.721-180.637L364.687,304ZM384,177.441V116.132l41.547,17.806,18.5,55.514Z"/></g></svg>
    </LogoLink>


    <Item>
      <Icon type="equalizer" size={22} top={1} left={3} />
      <ItemText>Dashboard</ItemText>
    </Item>


    <Item onClick={issueSearchModalOpen}>
      <Icon type="search" size={22} top={1} left={3} />
      <ItemText>Search issues</ItemText>
    </Item>





    <Bottom>
      <AboutTooltip
        placement="right"
        offset={{ top: -218 }}
        renderLink={() => (
          <Item>
            <Icon type="help" size={25} />
            <ItemText>About</ItemText>
          </Item>
        )}
      />
    </Bottom>

  </NavLeft>
);

ProjectNavbarLeft.propTypes = propTypes;

export default ProjectNavbarLeft;

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useRouteMatch } from 'react-router-dom';

import { ProjectCategoryCopy } from 'shared/constants/projects';
import { Icon, ProjectAvatar } from 'shared/components';

import {
  Sidebar,
  ProjectInfo,
  ProjectTexts,
  ProjectName,
  ProjectCategory,
  Divider,
  LinkItem,
  LinkText,
  Item,
  ItemText,
  NotImplemented,
} from './Styles';

const propTypes = {
  issueCreateModalOpen: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
};


const ProjectSidebar = ({ project, issueCreateModalOpen }) => {
  const match = useRouteMatch();

  return (
    <Sidebar>
      <ProjectInfo>
        <ProjectTexts>
          <ProjectName>SupportDesk</ProjectName>
          <ProjectCategory>GGSH & Co</ProjectCategory>
        </ProjectTexts>
      </ProjectInfo>

      {renderLinkItem(match, 'Projects', 'board')}
      {renderLinkItem(match, 'Users', 'settings')}
      
      <Divider />

      {renderLinkItem(match, 'Create Project', 'plus')}
      {renderLinkItem(match, 'Create User', 'chevron-right')}
      {renderLinkItem(match, 'Create Client', 'story')}
       


    </Sidebar>


  );
};

const renderLinkItem = (match, text, iconType, path) => {
  const isImplemented = !!path;

  const linkItemProps = isImplemented
    ? { as: NavLink, exact: true, to: `${match.path}${path}` }
    : { as: 'div' };

  return (
    <LinkItem {...linkItemProps}>
      <Icon type={iconType} />
      <LinkText>{text}</LinkText>
      {!isImplemented && <NotImplemented>Not implemented</NotImplemented>}
    </LinkItem>
  );
};


ProjectSidebar.propTypes = propTypes;

export default ProjectSidebar;

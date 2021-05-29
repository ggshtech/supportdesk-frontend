import React from 'react';
import PropTypes from 'prop-types';

import { ProjectCategory, ProjectCategoryCopy } from 'shared/constants/projects';
import toast from 'shared/utils/toast';
import useApi from 'shared/hooks/api';
import { Form, Breadcrumbs } from 'shared/components';

import { FormCont, FormHeading, FormElement, ActionButton, ProjectsContainer, ProjectsSubContainer } from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
  fetchProject: PropTypes.func.isRequired,
};

const ProjectSettings = ({ project, fetchProject }) => {
  const [{ isUpdating }, updateProject] = useApi.put('/project');


  

  return (
    <>
      <Breadcrumbs items={['Dashboard', 'Home']} />
      <FormHeading>Welcome Mahadev K </FormHeading>


      <FormHeading>Recent Projects</FormHeading>  

      <a href="/project">
        <ProjectsContainer>
              <h3> {project.name} </h3>
              <ProjectsSubContainer>
                 <p> {project.description} </p>
              </ProjectsSubContainer>
        </ProjectsContainer>
      </a>
      

    </>
  );
};

const categoryOptions = Object.values(ProjectCategory).map(category => ({
  value: category,
  label: ProjectCategoryCopy[category],
}));

ProjectSettings.propTypes = propTypes;

export default ProjectSettings;

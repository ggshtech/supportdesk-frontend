import styled from 'styled-components';

import { font } from 'shared/utils/styles';
import { Button, Form } from 'shared/components';

export const FormCont = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormElement = styled(Form.Element)`
  width: 100%;
  max-width: 640px;
`;

export const FormHeading = styled.h1`
  padding: 6px 0 15px;
  ${font.size(24)}
  ${font.medium}
`;

export const ActionButton = styled(Button)`
  margin-top: 30px;
`;


export const ProjectsContainer = styled.div`
    padding: 20px;
    background: #f4f5f7;
    color: #1e2b4d;
    display: inline-block;
    border-radius: 4px;
    width: 250px;
`;

export const ProjectsSubContainer = styled.div`
    margin-top: 12px;
`;
  
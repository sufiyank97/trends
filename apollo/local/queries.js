import { gql } from 'apollo-boost';

export const GET_CURRENT_USER = gql`
  {
    currentUser @client {
      __typename
      userName
      middleName
      userEmail
      firstActiveFrom
      id
    }
  }
`;

export const GET_SELECTED_FOLDER = gql`
  {
    selectedFolder @client {
      __typename
      createdAt
      folderDesc
      folderName
      id
      isArchived
      updatedAt
    }
  }
`;

export const GET_CURRENT_STRUCTURE = gql`
  {
    currentStructure @client {
      __typename
      id
      structure
    }
  }
`;

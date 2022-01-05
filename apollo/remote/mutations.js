import { gql } from 'apollo-boost';

export const CREATE_FOLDER = gql`
  mutation createFolder(
    $userid: Int!
    $folderDesc: String!
    $folderName: String!
  ) {
    createFolder(
      userid: $userid
      folderDesc: $folderDesc
      folderName: $folderName
    ) {
      createdAt
      folderDesc
      folderName
      id
      isArchived
      updatedAt
    }
  }
`;

export const DELETE_FOLDER = gql`
  mutation deleteFolder($id: Int!) {
    deleteFolder(id: $id) {
      createdAt
      folderDesc
      folderName
      id
      isArchived
      updatedAt
    }
  }
`;

export const UPDATE_FOLDER = gql`
  mutation updateFolder(
    $id: Int!
    $folderName: String!
    $folderDesc: String!) {
      updateFolder(id: $id, folderName: $folderName, folderDesc: $folderDesc) {
      createdAt
      folderDesc
      folderName
      id
      isArchived
      updatedAt
    }
  }
`;

export const CREATE_DASHBOARD = gql`
  mutation createDashboard(
    $folderId: Int!
    $dashboardDesc: String!
    $dashboardName: String!
  ) {
    createDashboard(
      folderId: $folderId
      dashboardDesc: $dashboardDesc
      dashboardName: $dashboardName
    ) {
      createdAt
      dashboard_desc
      dashboard_name
      id
      archived
      updatedAt
    }
  }
`;

export const DELETE_DASHBOARD = gql`
  mutation deleteDashboard($id: Int!) {
    deleteDashboard(id: $id) {
      createdAt
      dashboard_desc
      dashboard_name
      id
      archived
      updatedAt
    }
  }
`;

export const UPDATE_USER_PROFILE = gql`
  mutation updateUserProfile(
    $email: String!
    $firstName: String!
    $middleName: String = null
    $lastName: String!
    $password: String!
  ) {
    updateUserProfile(
      email: $email
      firstName: $firstName
      middleName: $middleName
      lastName: $lastName
      password: $password
    ) {
      firstActiveFrom
      firstName
      id
      lastName
      middleName
      userEmail
      userName
    }
  }
`;

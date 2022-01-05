import { gql } from 'apollo-boost';

export const LOGIN = gql`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      userName
      middleName
      userEmail
      firstActiveFrom
      id
    }
  }
`;

export const GET_FOLDERS = gql`
  query($userId: Int!) {
    getFolderByUserId(userId: $userId) {
      createdAt
      folderDesc
      folderName
      id
      isArchived
      updatedAt
    }
  }
`;

export const GET_SHARED_FOLDERS = gql`
  query($userId: Int!) {
    getSharedFoldersByUserId(userId: $userId) {
      createdAt
      folderDesc
      folderName
      id
      isArchived
      updatedAt
    }
  }
`;

export const GET_DASHBOARDS_BY_FOLDER_ID = gql`
  query($folderId: Int!) {
    getDashboardByFolderId(folderId: $folderId) {
      archived
      createdAt
      dashboard_desc
      dashboard_name
      id
      updatedAt
    }
  }
`;

export const GET_USER_TEAMS = gql`
  query($userid: Int!) {
    getTeamUsers(userid: $userid) {
      structure
      team_id
      team_name
      team_type_desc
      team_type_id
      user_id
      user_type_descr
      user_type_id
    }
  }
`;

export const GET_USER_BY_EMAIL = gql`
  query($email: String!) {
    getUserByEmail(email: $email) {
      userName
      firstName
      lastName
      middleName
      userEmail
      firstActiveFrom
      id
    }
  }
`;

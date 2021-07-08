import axios from "axios";

const authCredentials = {
  refresh_token: "059c420e-7424-431f-b23b-af0ecabfe7b8",
  grant_type: "refresh_token",
};

// eslint-disable-next-line import/prefer-default-export
export async function getAccessToken() {
  const {
    data: { accessToken },
  } = await axios.post(
    `${process.env.REACT_APP_BACKEND_SERVER}/token`,
    authCredentials
  );
  console.log(accessToken);
  return accessToken;
}

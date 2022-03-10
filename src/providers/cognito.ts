import {Auth} from "aws-amplify";

export interface UserData {
  connectionId?: string,
  email: string,
  password: string,
  name: string,
  middle_name: string
}

const cognitoProvider = {
  signIn(email: string, password: string, callback: (user: any) => void, error: (message: string) => void) {
    Auth.signIn(email, password).then(authResult => {
      callback(authResult.attributes)
    })
      .catch(err => error(err.message))
  },
  signOut(callback: VoidFunction) {
    Auth.signOut().then(callback)
  },
  async signUp(userData: UserData, callback: VoidFunction, error: (message: string) => void) {
    const {email, password, name, middle_name} = userData
    Auth.signUp({
      username: email,
      password,
      attributes: {
        name,
        middle_name
      }
    }).then(callback)
      .catch(err => error(err.message))
  },
  confirmSignUp(email: string, code: string, callback: VoidFunction, error: (message: string) => void) {
    Auth.confirmSignUp(email, code)
      .then(() => {
        callback()
      })
      .catch(err => error(err.message))
  },
  currentUser() {
    return Auth.currentAuthenticatedUser()
      .then(authResult => authResult.attributes)
      .catch(() => null)

  }
};

export {cognitoProvider};

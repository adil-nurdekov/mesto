class UserInfo {
  constructor(profileName, profileProfession) {
    this._profileName = document.querySelector(profileName);
    this._profileProf = document.querySelector(profileProfession);
  }
  getUserInfo() {
    return {
      name: this._profileName.textContent,
      prof: this._profileProf.textContent,
    };
  }
  setUserInfo(input) {
    this._profileName.textContent = input["input-profile-name"];
    this._profileProf.textContent = input["input-profile-profession"];

    console.log(input);
  }
}
export { UserInfo };

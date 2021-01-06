import { computed, observable } from 'mobx';
import { login, signup } from '../api/firebase';

const USER_KEY = 'user';

const userData = {
  username: '',
  password: '',
  name: '',
};

export class AccessViewModel {
  @observable _logged = false;
  @observable _mode = 'login';
  @observable _user = userData;
  @observable _errorMessage = '';
  @observable _isError = false;
  @observable _loading = false;

  @computed
  get logged() {
    return this._logged;
  }

  @computed
  get mode() {
    return this._mode;
  }

  @computed
  get user() {
    return this._user;
  }

  @computed
  get errorMessage() {
    return this._errorMessage;
  }

  @computed
  get isError() {
    return this._isError;
  }

  @computed
  get loading() {
    return this._loading;
  }

  set mode(mode) {
    this._mode = mode;
  }

  bootstrap = () => {
    const key = localStorage.getItem(USER_KEY);

    if (key) {
      this._logged = true;
    } else {
      this._logged = false;
    }
  };

  login = async () => {
    this._loading = true;

    try {
      const result = await login(this._user.username, this._user.password);
      localStorage.setItem(USER_KEY, result.user.uid);

      this._logged = true;
      this._loading = false;
    } catch (e) {
      this._errorMessage = e.message;
      this._isError = true;
      this._loading = false;
    }
  };

  logout = async () => {};

  signup = async () => {
    this._loading = true;

    try {
      const result = await signup(this._user.username, this._user.password);
      localStorage.setItem(USER_KEY, result.user.uid);

      this._logged = true;
      this._loading = false;
    } catch (e) {
      this._errorMessage = e.message;
      this._isError = true;
      this._loading = false;
    }
  };
}

const instance = new AccessViewModel();

export default instance;

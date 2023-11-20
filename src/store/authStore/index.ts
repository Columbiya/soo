import { makeAutoObservable } from 'mobx'

class AuthStore {
	declare auth: boolean

	constructor() {
		makeAutoObservable(this)

		this.auth = false
	}

	get isAuth() {
		return this.auth
	}

	set isAuth(value: boolean) {
		this.auth = value
	}
}

export const authStore = new AuthStore()

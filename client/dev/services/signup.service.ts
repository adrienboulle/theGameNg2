import {Injectable} from "angular2/core";
import {Http, Headers, RequestOptions} from "angular2/http";
import 'rxjs/add/operator/map';

@Injectable()
export class SignupService {

	constructor(private http: Http) {}

	signup(signupData) {
		let _body = JSON.stringify(signupData),
			_headers = new Headers({'Content-Type': 'application/json'}),
			_options = new RequestOptions({ headers: _headers });

		return this.http
			.post('/api/signup', _body, _options)
			.map(res => {
				return res;
			});
	};

	isEmailUnique(email) {
		return this.http
			.get('/api/signup/email/' + email)
			.map(res => {
				return !res.json().exists;
			});
	};
	
}
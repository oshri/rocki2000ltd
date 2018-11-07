import { Field, reduxForm } from 'redux-form';
import Loading from '../Loading';
import './LoginForm.scss';

const LoginForm = props => {
	const { handleSubmit, loading } = props;

	return (
		<section className="LoginForm">
			<h1>LOGIN</h1>

			{loading ? (
				<Loading />
			) : (
				<form className="LoginFormWrap" onSubmit={handleSubmit}>
					<label>
						<Field
							name="email"
							component="input"
							type="email"
							required
							placeholder="Email"
						/>
					</label>
					<label>
						<Field
							name="password"
							component="input"
							type="password"
							required
							placeholder="Password"
						/>
					</label>
					<input type="submit" value="Login" />
				</form>
			)}
		</section>
	);
};

export default reduxForm({
	form: 'login'
})(LoginForm);

import './authentication.styles.scss';
import SignUpForm from '../../components/sing-up-form/sign-up-form.component';

import SignInForm from '../../components/sign-in-form/sign-in-form.component';

// Functions
const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Authentication;

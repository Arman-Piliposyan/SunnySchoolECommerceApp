import * as yup from 'yup';

export const SignUpSchema = yup.object().shape({
  confirmPassword: yup
    .string()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    .oneOf([yup.ref('password'), null], 'Please enter identical passwords')
    .required('Required*'),
  imageUrl: yup.string().url().required('Required*'),
  email: yup.string().email().required('Required*'),
  phone: yup.string().min(12).required('Required*'),
  firstName: yup.string().required('Required*'),
  password: yup.string().required('Required*'),
  lastName: yup.string().required('Required*'),
});

export const SignInSchema = yup.object().shape({
  email: yup.string().email().required('Required*'),
  password: yup.string().required('Required*'),
});

export const ProfileSchema = yup.object().shape({
  imageUrl: yup.string().url().required('Required*'),
  email: yup.string().email().required('Required*'),
  phone: yup.string().min(12).required('Required*'),
  firstName: yup.string().required('Required*'),
  lastName: yup.string().required('Required*'),
});

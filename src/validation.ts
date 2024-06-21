import * as yup from 'yup'

const Messages = {
  NICKNAME_REQUIRED: '닉네임을 입력해주세요.',
  EMAIL_REQUIRED: '이메일을 입력해주세요.',
  EMAIL: '이메일 형식이 올바르지 않습니다.',
  PASSWORD_REQUIRED: '비밀번호를 입력해주세요.',
  PASSWORD:
    '영문과 숫자, 특수기호를 조합하여 8~14 글자 미만으로 입력하여 주세요.',
}

export const loginSchema = yup.object().shape({
  email: yup.string().required(Messages.EMAIL_REQUIRED).email(Messages.EMAIL),
  password: yup
    .string()
    .required(Messages.PASSWORD_REQUIRED)
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,13}$/,
      Messages.PASSWORD
    ),
})

export const signupSchema = yup.object().shape({
  nickname: yup.string().required(Messages.NICKNAME_REQUIRED),
  email: yup.string().required(Messages.EMAIL_REQUIRED).email(Messages.EMAIL),
  password: yup
    .string()
    .required(Messages.PASSWORD_REQUIRED)
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,13}$/,
      Messages.PASSWORD
    ),
})

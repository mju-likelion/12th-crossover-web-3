export interface AuthFormValues {
  email: string
  password: string
}

export interface SignUpFormValues extends AuthFormValues {
  nickname: string
  checkbox: boolean
}

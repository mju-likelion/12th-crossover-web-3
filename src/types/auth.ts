export interface AuthFormValues {
  email: string
  password: string
}
export interface Agreement {
  termId: string
  agreed: boolean
}

export interface Term {
  termId: string
  content: string
}

export interface SignUpFormValues extends AuthFormValues {
  nickname: string
  checkbox: boolean
  agreements?: Agreement[]
}

export interface SubmitSignUpFormValues extends AuthFormValues {
  nickname: string
  agreements?: Agreement[]
}

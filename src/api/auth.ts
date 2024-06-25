import { Axios } from './Axios.ts'
import { AuthFormValues, SubmitSignUpFormValues, Term } from '../types'

interface TermsResponse {
  data: {
    terms: Term[]
  }
}

export const getTerms = async () => {
  try {
    const response = await Axios.get<TermsResponse>('/terms')
    return response?.data?.data?.terms
  } catch (e) {
    console.log(e)
    return []
  }
}

export const postSignup = async (data: SubmitSignUpFormValues) => {
  try {
    const response = await Axios.post('/auth/signIn', data)
    return response.data
  } catch (e) {
    console.log(e)
    return []
  }
}

export const postLogin = async (data: AuthFormValues) => {
  try {
    const response = await Axios.post('/auth/login', data)
    return response.data
  } catch (e) {
    console.log(e)
    return []
  }
}

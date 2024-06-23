import { Axios } from './Axios.ts'
import { SubmitSignUpFormValues, Term } from '../types'

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
  console.log(data)
  try {
    const response = await Axios.post('/auth/signIn', {
      data,
    })
    return response.data
  } catch (e) {
    console.log(e)
    return []
  }
}

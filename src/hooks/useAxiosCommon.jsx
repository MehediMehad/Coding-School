import axios from 'axios'

export const axiosCommon = axios.create({
  baseURL:'https://awei-server.vercel.app'
})
const useAxiosCommon = () => {
  return axiosCommon
}

export default useAxiosCommon
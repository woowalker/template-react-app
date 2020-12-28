import { getAxiosBaseUrl } from '@/utils/common'

// axios 默认配置
export const AXIOS_DEFAULT_CONFIG = {
  timeout: 20000,
  maxContentLength: 2000,
  headers: {},
  baseURL: getAxiosBaseUrl()
}

// CONST 默认配置
export const CONST_DEFAULT_CONFIG = {
  sep: '/'
}

// API 默认配置
export const API_DEFAULT_CONFIG = {
  debug: process.env.NODE_ENV !== 'production',
  sep: '/'
}

// 开启请求、响应参数打印
export const CONSOLE_REQUEST_ENABLE = false
export const CONSOLE_RESPONSE_ENABLE = false

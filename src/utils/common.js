import constApp from '@/services/const/app'

export function getAxiosBaseUrl () {
  const find = constApp.find(item => item.name === 'BASE_URL')
  return find ? find.value : ''
}
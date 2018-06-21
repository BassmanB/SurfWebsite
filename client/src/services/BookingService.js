import Api from './Api'

export default {
  booking(credentials){
    return Api().post('booking', credentials)  
  }
}

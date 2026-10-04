import api from "src/services/axios"


const paymentService = {
  verify(payload) {
    return api.post('/auth/payments/verify', payload)
  }
}

export default paymentService;
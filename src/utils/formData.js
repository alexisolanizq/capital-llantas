export const objectToFormData = (obj) => {
    const formData = new FormData()
    Object.entries(obj).forEach(([key, value]) => {
        if (value === null || value === undefined) return

        if (Array.isArray(value)) {
            if (value[0] instanceof File) {
                formData.append(key, value[0])
            } else {
                value.forEach(item => {
                    formData.append(`${key}[]`, item)
                })
            }
        } else if (typeof value === 'boolean') {
            formData.append(key, value ? '1' : '0')
        } else {
            formData.append(key, value)
        }
    })
    return formData
}
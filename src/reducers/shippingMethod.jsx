function shippingMethodReducer(state = 0, action) {
    switch (action.type) {
        case 'GETALL':
            return "Lấy danh sách phương thức vận chuyển";
        default:
            return state;
    }
}

export default shippingMethodReducer;
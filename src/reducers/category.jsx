function categoryReducer(state = 0, action) {
    switch (action.type) {
        case 'GETALL':
            return "Lấy danh sách danh mục";
        default:
            return state;
    }
}

export default categoryReducer;
function bannerReducer(state = 0, action) {
  switch (action.type) {
    case "GETALL":
      return "Lấy danh sách Banner ";
    default:
      return state;
  }
}

export default bannerReducer;

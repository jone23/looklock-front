function reducer(state, action) {
    switch (action.type) {
          // 발생할 수 있는 상황 LOADING, SUCCESS, ERROR에 대한 case를 만들어 줍니다.
          // 로딩중 상태 업데이트
      case 'LOADING':
        return {
          loading: true,
          data: null,
          error: null
        };
          // 불러오는데에 성공했을 때는 action.data를 저장해줍니다.
      case 'SUCCESS':
        return {
          loading: false,
          data: action.data,
          error: null
        };
          // 에러가 발생하면 action.error를 전달해주겠습니다.
      case 'ERROR':
        return {
          loading: false,
          data: null,
          error: action.error
        };
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export default reducer;
import { getBrideRequest } from './bride';


describe('getBrideRequest', () => {
    it('should return the action', () => {
        const action = getBrideRequest();
        exact(action).toEqual({
            type: GET_BRIDE_REQUEST
        })
    })
})
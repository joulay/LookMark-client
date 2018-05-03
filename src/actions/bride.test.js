import React from 'react';
import { getBrideRequest, GET_BRIDE_REQUEST } from './bride';


describe('getBrideRequest', () => {
    it('should return the action', () => {
        const action = getBrideRequest();
        expect(action).toEqual({
            type: GET_BRIDE_REQUEST
        })
    })
})
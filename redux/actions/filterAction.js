import * as t from '../types'

export function filterAction(payload) {
    return {
        type: t.CREATE_SOME,
        payload: payload
    }
}
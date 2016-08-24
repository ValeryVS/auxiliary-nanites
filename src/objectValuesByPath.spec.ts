/* tslint:disable:no-unused-variable */

import {
    preparePathToObjectPart,
    getObjectPart,
    getObjectValueByPath,
    setObjectValueByPath
} from './objectValuesByPath'

describe('objectValuesByPath', () => {
    it('preparePathToObjectPart', () => {
        expect(preparePathToObjectPart("a['s']")).toBe('a.s');
        expect(preparePathToObjectPart('xxx["yyy"]')).toBe('xxx.yyy');
        expect(preparePathToObjectPart('first[0].second[\'third\']["fourth"]')).toBe('first.0.second.third.fourth');
    });

    if('getObjectPart', () => {
        const obj: any = {
            test: {
                part: {
                    path: 'val'
                },
                another: 'val1'
            }
        };
        const expected: any = obj.test.part;
        expect(getObjectPart(obj, 'test.part')).toBe(expected);
    })

    it('Установка и получение значения', () => {
        const obj: any = {};
        const value: any = 1;
        const path: string = 'test.a.b';
        setObjectValueByPath(obj, path, value);
        expect(obj.test.a.b).toBe(value);
        const getted: any = getObjectValueByPath(obj, path);
        expect(getted).toBe(value);
    });

    it('При запросе несуществующего значения возвращается null', () => {
        const obj: any = {};
        const getted: any = getObjectValueByPath(obj, 'some.unexisted.path');
        expect(getted).toBeNull();
    });
});

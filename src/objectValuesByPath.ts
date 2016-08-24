type ObjectPartNoVoid = Object | Array<any> | Function;
type ObjectPart = ObjectPartNoVoid | void;

interface ObjectPartAndKey {
    part: ObjectPart,
    key: string
}

interface ObjectPartOptions {
    definePart: 'asArray' | 'asObject'
}

function isNoVoidObjectPart(part: ObjectPart): part is ObjectPartNoVoid {
    return (typeof part !== 'undefined' && part !== null)
}

export function preparePathToObjectPart(path: string): string {
    path = path.replace(/\[(\'|\")(\w+)(\'|\")\]/g, '.$2'); // a['s'] -> a.s, a["s"] -> a.s
    path = path.replace(/\[(\d+)\]/g, '.$1'); // a[0] -> a.0
    path = path.replace(/^\./, ''); // .s.d.f -> s.d.f
    return path
}

export function getObjectPart(obj: ObjectPart, key: string, options?: ObjectPartOptions): ObjectPart {
    if (isNoVoidObjectPart(obj)) {
        let result: any;
        result = obj[key];
        if (isNoVoidObjectPart(result)) {
            return result
        } else {
            if (options && options.definePart) {
                switch (options.definePart) {
                    case 'asArray':
                        return obj[key] = []
                    case 'asObject':
                        return obj[key] = {}
                }
            } else {
                return null
            }
        }
    } else {
        return null
    }
}

export function getObjectPartByPath(obj: ObjectPartNoVoid, path: string, options?: ObjectPartOptions): ObjectPartAndKey {
    path = preparePathToObjectPart(path);
    let pathArr: Array<string>;
    pathArr = path.split('.');
    const lastKey: string = pathArr[pathArr.length-1];
    pathArr.splice(pathArr.length-1,pathArr.length);
    const result: ObjectPartAndKey = {
        part: obj,
        key: lastKey
    };
    if (pathArr.length > 0) {
        for (let step of pathArr) {
            result.part = getObjectPart(result.part, step, options);
        }
    }
    return result
}

export function getObjectValueByPath(obj: ObjectPartNoVoid, path: string): any {
    if (path === '') {
        return obj
    } else {
        const objPartAndKey: ObjectPartAndKey = getObjectPartByPath(obj, path);
        if (isNoVoidObjectPart(objPartAndKey.part)) {
            return objPartAndKey.part[objPartAndKey.key]
        } else {
            return null
        }
    }
}

export function setObjectValueByPath(obj: ObjectPartNoVoid, path: string, value: any): void {
    let objPartAndKey: ObjectPartAndKey;
    objPartAndKey = getObjectPartByPath(obj, path, {
        definePart: 'asObject'
    })
    objPartAndKey.part[objPartAndKey.key] = value;
}

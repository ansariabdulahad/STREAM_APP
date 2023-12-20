export const fetch = (request) => {
    return {
        message: "FETCH request",
        status: 200
    }
}

export const fetchById = async (request, params) => {
    return {
        message: "FETCH BY ID Request",
        status: 200
    }
}

export const create = async (request) => {
    const data = await request.json();
    return {
        data: data,
        status: 200
    }
}

export const trash = async (request) => {
    return {
        message: 'Login Delete Request',
        status: 200
    }
}

export const trashById = async (request, params) => {
    return {
        message: "DELETE BY ID REQUEST",
        status: 200
    }
}

export const update = async (request) => {
    const data = await request.json();

    return {
        message: "Login data update request",
        data: data,
        status: 200
    }
}
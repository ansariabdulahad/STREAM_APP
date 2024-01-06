import bcrypt from 'bcrypt';

export const encrypt = async (data) => {
    const string = data.toString();

    return await bcrypt.hash(string, 12);
}

export const decrypt = async (password, realPassword) => {
    return await bcrypt.compare(password, realPassword);
}
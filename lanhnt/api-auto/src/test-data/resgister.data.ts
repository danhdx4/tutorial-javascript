import { faker } from '@faker-js/faker';

export type RegisterDataType = {
    username: string,
    email: string,
    password: string
}

const username = faker.person.fullName()
export const baseRegisterData = {
    username: username,
    email: `${username.replace(' ', '')}.${faker.number.int(1000)}@test.com`,
    password: "123456789"
}

export const registerData: Record<string, RegisterDataType> = {
    valid: baseRegisterData,
    withoutPassword: {
        username: baseRegisterData.username,
        email: baseRegisterData.email,
        password: ""
    }
}
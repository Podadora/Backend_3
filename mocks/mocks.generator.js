// mocks/mock.generator.js
import { faker } from '@faker-js/faker';

export function generateMockUser() {
    return {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        age: faker.number.int({ min: 18, max: 70 }),
        password: faker.internet.password(),
        role: 'user'
    };
}

export function generateMockProduct() {
    return {
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        code: faker.string.alphanumeric(8),
        price: faker.commerce.price({ min: 100, max: 5000 }),
        stock: faker.number.int({ min: 1, max: 100 }),
        category: faker.commerce.department()
    };
}
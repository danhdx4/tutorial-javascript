import { faker } from '@faker-js/faker';

export type RecordDataType = {
    title: string;
    description: string;
    body: string;
    tags: string;
}

export const baseRecordData: RecordDataType = {
    title: faker.lorem.sentence(),
    description: faker.lorem.sentence(),
    body: faker.lorem.paragraphs(2),
    tags: faker.lorem.words(3),
};

export const recordData: Record<string, RecordDataType> = {
    valid: baseRecordData,
    nullRecord: {
        title: "",
        description: "",
        body: "",
        tags: "",
    },
    blankTitle: {
        title: "",
        description: baseRecordData.description,
        body: baseRecordData.body,
        tags: baseRecordData.tags,
    },
    blankDescription: {
        title: baseRecordData.title,
        description: "",
        body: baseRecordData.body,
        tags: baseRecordData.tags,
    },
    blankBody: {
        title: baseRecordData.title,
        description: baseRecordData.description,
        body: "",
        tags: baseRecordData.tags,
    },
    blankTags: {
        title: baseRecordData.title,
        description: baseRecordData.description,
        body: baseRecordData.body,
        tags: "",
    },
}


import request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { KnowledginService } from './../src/modules/knowledgin/knowledgin.service';
import { KnowledginModule } from './../src/modules/knowledgin/knowledgin.module';

describe('Knowledgin', () => {
    let app: INestApplication;
    let knowledginService = { hello: () => ['world!'] };
    let datasetCreated = { created: () => ['dataset created'] };

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [KnowledginModule],
        })
            .overrideProvider(KnowledginService)
            .useValue(knowledginService)
            .compile();

        app = moduleRef.createNestApplication();
        app.init();
    })

    it(`/knowledgin/dataset (PUT) add new dataset`, () => {
        return request(app.getHttpServer())
            .put("/knowledgin/dataset")
            .send({
                title: "",
                recap: "This is a test." 
            })
            .expect(201)
            .expect( (res) => {
                console.log(res.body)
                expect(datasetCreated.created())
            });
    })

    let semanticExpansionPedestrain = { expansion: () => ['pedestrain'] };

    it(`/GET semantic-expansion/pedestrain`, () => {
        return request(app.getHttpServer())
            .get('/knowledgin/semantic-expansion/pedestrain')
            .expect(200)
            .expect( (res) => {
                console.log(res.body)
                expect(semanticExpansionPedestrain.expansion())
            });
    });

    afterAll(async () => {
        await app.close();
    });
})
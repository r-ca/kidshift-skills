import { Directive } from "ask-sdk-model";
import { DataSource } from "aws-sdk/clients/discovery";

const DOCUMENT_ID = "task_completed";

class TaskCompletedDirective {

    public createDirectivePayload = (dataSources = {}, tokenId = "documentToken"): Directive => {
        return {
            type: "Alexa.Presentation.APL.RenderDocument",
            token: tokenId,
            document: {
                type: "Link",
                src: "doc://alexa/apl/documents/" + DOCUMENT_ID
            },
            datasources: dataSources
        }
    };

    public createDataSources = (primaryText: string, hintText: string) => {
        const datasource = {
            "headlineTemplateData": {
                "type": "object",
                "objectId": "headlineSample",
                "properties": {
                    "backgroundImage": {
                        "contentDescription": null,
                        "smallSourceUrl": null,
                        "largeSourceUrl": null,
                        "sources": [
                            {
                                "url": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/headline/HeadlineBackground_Dark.png",
                                "size": "large"
                            }
                        ]
                    },
                    "textContent": {
                        "primaryText": {
                            "type": "PlainText",
                            "text": primaryText
                        }
                    },
                    "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/logo/logo-modern-botanical-white.png",
                    "hintText": hintText
                }
            }
        };

        return datasource;
    }
}

export default new TaskCompletedDirective();

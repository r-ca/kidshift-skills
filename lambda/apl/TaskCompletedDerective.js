"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DOCUMENT_ID = "task_completed";
class TaskCompletedDirective {
    constructor() {
        this.createDirectivePayload = (dataSources = {}, tokenId = "documentToken") => {
            return {
                type: "Alexa.Presentation.APL.RenderDocument",
                token: tokenId,
                document: {
                    type: "Link",
                    src: "doc://alexa/apl/documents/" + DOCUMENT_ID
                },
                datasources: dataSources
            };
        };
        this.createDataSources = (primaryText, hintText) => {
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
        };
    }
}
exports.default = new TaskCompletedDirective();
//# sourceMappingURL=TaskCompletedDerective.js.map
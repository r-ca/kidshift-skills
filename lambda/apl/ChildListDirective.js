"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DOCUMENT_ID = "child_list";
class ChildListDirective {
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
        this.createDataSources = (listItems) => {
            const datasource = {
                "textListData": {
                    "type": "object",
                    "objectId": "textListSample",
                    "backgroundImage": {
                        "contentDescription": null,
                        "smallSourceUrl": null,
                        "largeSourceUrl": null,
                        "sources": [
                            {
                                "url": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/textlist/AlexaTextListBackground_Dark.png",
                                "size": "large"
                            }
                        ]
                    },
                    "title": "子供を選択",
                    "listItems": listItems,
                    "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/logo/logo-modern-botanical-white.png"
                }
            };
            return datasource;
        };
    }
}
exports.default = new ChildListDirective();
//# sourceMappingURL=ChildListDirective.js.map
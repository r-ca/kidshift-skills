
import { Directive } from "ask-sdk-model";

const DOCUMENT_ID = "child_list";

class ChildListDirective {

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

    public createDataSources = (listItems: string[]) => {
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
    }
}

export default new ChildListDirective();

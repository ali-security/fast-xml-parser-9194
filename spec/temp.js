"use strict";

import { format } from "path";
import {XMLParser, XMLValidator, XMLBuilder} from "../src/fxp.js";

describe("unpaired and empty tags", function() {
    fit("bug test", function() {
        
        const xmlData = `<root attr="&#9999999;"/>`;
        const options = {
            ignoreAttributes: false,
            attributeNamePrefix: '',
						//processEntities: true, 
						htmlEntities: true 
        };
        const parser = new XMLParser(options);
        // console.log(JSON.stringify(parser.parse(xml)));
        
        let result = parser.parse(xmlData);

        console.log(JSON.stringify(result,null,4));
        // expect(result).toEqual(expected);

    });
    xit("bug test", function() {
        
        const xmlData = `<script/>`;
        const options = {
            allowBooleanAttributes: true,
            ignoreAttributes: false,
            stopNodes: ["*.pre", "*.script"],
            format: true,
        };
        const input = {
            "ExternalId": "123456-01",
            "Name": "Product name",
            "Attributes": [
                {
                    "Attribute": {
                        "@_id": "FAMILY",
                        "Value": "family "
                    }
                },
                {
                    "Attribute": {
                        "@_id": "EXPAND",
                        "Value": "expanded-family"
                    }
                }
            ]
        }
        const builder = new XMLBuilder(options);
        // console.log(JSON.stringify(parser.parse(xml)));
        
        let result = builder.build(input);
        console.log(result);
        // console.log(JSON.stringify(result,null,4));
        // expect(result).toEqual(expected);

    });
 
    
});
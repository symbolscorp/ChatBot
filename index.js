const express = require('express')
const app = express()
const {WebhookClient} = require('dialogflow-fulfillment');
const dfff = require('dialogflow-fulfillment');


app.get('/', function (req, res) {
  console.log("Dialogflow Request headers: ");
  res.send('Hello World')
  
})
// for Facebook verification
app.post("/webhook",express.json(),function(req,res){
    const agent = new WebhookClient({ request:req, response:res });
    console.log("Dialogflow Request headers: " + JSON.stringify(req.headers));
    console.log("Dialogflow Request body: " + JSON.stringify(req.body));
 
    function welcome(agent) {
        agent.add("Welcome to my agent!");
    }
 
    function fallback(agent) {
        agent.add("I didn't understand");
        agent.add("I'm sorry, can you try again?");
    }
    function Imagen(agent) {
        var payloadData = {
            "richContent": [
              [
                {
                  "type": "accordion",
                  "title": "Accordion title",
                  "subtitle": "Accordion subtitle",
                  "image": {
                    "src": {
                      "rawUrl": "https://example.com/images/logo.png"
                    }
                  },
                  "text": "Accordion text"
                }
              ]
            ]
          };
        const options = { sendAsMessage: true, rawPayload: true };
        agent.add(new dfff.Payload(agent.UNSPECIFIED,payloadData,options));
        //agent.add("Carajo Funciona");
    }
  function Cartilla(agent) {
        var payloadData = {
                "facebook": {
                  "attachment": {
                    "type": "template",
                    "payload": {
                      "elements": [
                        {
                          "title": "More",
                          "buttons": [
                            {
                              "title": "more",
                              "payload": "more",
                              "type": "postback"
                            }
                          ],
                          "subtitle": "",
                          "image_url": "https://i.imgur.com/sI1VUsV.jpg"
                        }
                      ],
                      "template_type": "generic"
                    }
                  }
                }
              };
        const options = { sendAsMessage: true, rawPayload: true };
        agent.add(new dfff.Payload(agent.UNSPECIFIED,payloadData,options));
        //agent.add("Carajo Funciona");
    
    }
  function Carrucel(agent) {
        var payloadData = {
 "facebook":{
  "attachment":{
     "type":"template",
     "payload":{
        "template_type":"generic",
        "elements":[
           {
              "title":"Welcome!",
              "image_url":"https://upload.wikimedia.org/wikipedia/commons/7/70/Example.png",
              "subtitle":"We have the right hat for everyone.",
              "default_action":{
                 "type":"web_url",
                 "url":"https://www.google.com/",
                 "webview_height_ratio":"tall"
              },
              "buttons":[
                 {
                    "type":"web_url",
                    "url":"https://www.google.com/",
                    "title":"View Website"
                 },
                 {
                    "type":"postback",
                    "title":"Start Chatting",
                    "payload":"DEVELOPER_DEFINED_PAYLOAD"
                 }
              ]
           },
               {
              "title":"Welcome!",
              "image_url":"https://upload.wikimedia.org/wikipedia/commons/7/70/Example.png",
              "subtitle":"We have the right hat for everyone.",
              "default_action":{
                 "type":"web_url",
                 "url":"https://www.google.com/",
                 "webview_height_ratio":"tall"
              },
              "buttons":[
                 {
                    "type":"web_url",
                    "url":"https://www.google.com/",
                    "title":"View Website"
                 },
                 {
                    "type":"postback",
                    "title":"Start Chatting",
                    "payload":"DEVELOPER_DEFINED_PAYLOAD"
                 }
              ]
           },
               {
              "title":"Welcome!",
              "image_url":"https://upload.wikimedia.org/wikipedia/commons/7/70/Example.png",
              "subtitle":"We have the right hat for everyone.",
              "default_action":{
                 "type":"web_url",
                 "url":"https://www.google.com/",
                 "webview_height_ratio":"tall"
              },
              "buttons":[
                 {
                    "type":"web_url",
                    "url":"https://www.google.com/",
                    "title":"View Website"
                 },
                 {
                    "type":"postback",
                    "title":"Start Chatting",
                    "payload":"DEVELOPER_DEFINED_PAYLOAD"
                 }
              ]
           }
        ]
     }
  }
 }
 };
        const options = { sendAsMessage: true, rawPayload: true };
        agent.add(new dfff.Payload(agent.UNSPECIFIED,payloadData,options));
        //agent.add("Carajo Funciona");
    
    }
  function Direccion(agent) {
        agent.add("Nos puede encontrar en Cayma y Sachaca, Virgen de la Candelaria Mz A Lt 4");
  }
  function Saludo(agent) {
        agent.add("Buenos dias, Le damos la bienvenida a PlantiLife\nLe ofrecemos una variedad de plantas para el hogar,oficina o huerto.\nEn que podria ayudarlo?");
  }
  
  function CategoriaPlantas(agent) {
        agent.add("1.-Flores \n2.-Arboles \n3.-Suculentas");
  }
  function ListaFlores(agent) {
        agent.add("1.-Flor A \n2.-Flor B  \n3.-Flor A");
  }
  function ListaArboles(agent) {
        agent.add("1.-Arbol A \n2.-Arbol B \n3.-Arbol C");
  }
  function ListaSuculenta(agent) {
        agent.add("1.-Suculenta A \n2.-Suculenta B \n3.-Suculenta C");
  }
    let intentMap = new Map();
    intentMap.set("CategoriaPlantas", CategoriaPlantas);
    intentMap.set("ListaFlores", ListaFlores);
    intentMap.set("ListaArboles", ListaArboles);
    intentMap.set("ListaSuculenta", ListaSuculenta);
    intentMap.set("Direccion", Direccion);
    intentMap.set("Saludo", Saludo);
    intentMap.set("Cartilla", Cartilla);
    intentMap.set("Carrucel", Carrucel);
    // intentMap.set('your intent name here', yourFunctionHandler);
    // intentMap.set('your intent name here', googleAssistantHandler);
    agent.handleRequest(intentMap);
});

app.listen(3000, ()=>{
    console.log("Estamos ejecutando el servidor en el puerto "+3000)
})

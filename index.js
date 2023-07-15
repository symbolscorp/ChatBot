const express = require('express')
const app = express()
const {WebhookClient} = require('dialogflow-fulfillment');
const dfff = require('dialogflow-fulfillment');


app.get('/', function (req, res) {
  console.log('Dialogflow Request headers: ' + JSON.stringify(req.headers));
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
    function Plantas(agent) {
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
          }
          agent.add(new dfff.Payload(platforms.UNSPECIFIED,payloadData,{sendAsMessage:true,rawPayload:true}))
        //agent.add("Carajo Funciona");
    }
    let intentMap = new Map();
    intentMap.set("Plantas", Plantas);
    
    // intentMap.set('your intent name here', yourFunctionHandler);
    // intentMap.set('your intent name here', googleAssistantHandler);
    agent.handleRequest(intentMap);
});

app.listen(3000, ()=>{
    console.log("Estamos ejecutando el servidor en el puerto "+3000)
})

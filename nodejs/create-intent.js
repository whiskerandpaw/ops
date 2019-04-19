const fs = require('fs')
const PROJECT_ID = "dialogflow-service-219618"
TRAINING_FILE = "training-words.txt";
function main() {
  const data = fs.readFileSync(TRAINING_FILE, 'utf8').split("\n");
  createIntent(PROJECT_ID, 'intent test 2', data, [])
  console.log(data)
}
async function createIntent(
    projectId,
    displayName,
    trainingPhrasesParts,
    messageTexts
  ) {
    const dialogflow = require('dialogflow');
  
    // Instantiates the Intent Client
    const intentsClient = new dialogflow.IntentsClient({
      keyFilename: 'dialogflow-auth.json'
    });
  
    // The path to identify the agent that owns the created intent.
    const agentPath = intentsClient.projectAgentPath(projectId);
  
    const trainingPhrases = [];
  
    trainingPhrasesParts.forEach(trainingPhrasesPart => {
      const part = {
        text: trainingPhrasesPart,
      };
  
      // Here we create a new training phrase for each provided part.
      const trainingPhrase = {
        type: 'EXAMPLE',
        parts: [part],
      };
  
      trainingPhrases.push(trainingPhrase);
    });
  
    const messageText = {
      text: messageTexts,
    };
  
    const message = {
      text: messageText,
    };
  
    const intent = {
      displayName: displayName,
      trainingPhrases: trainingPhrases,
      messages: [message],
    };
  
    const createIntentRequest = {
      parent: agentPath,
      intent: intent,
    };
  
    // Create the intent
    const responses = await intentsClient.createIntent(createIntentRequest);
    console.log(`Intent ${responses[0].name} created`);
  }
  main();

  // createIntent(PROJECT_ID, 'intent-test', ['1', '2'], ['test1', 'test2'])
  // .then((result) => {
  //   console.log(result);

  // })
  // .catch((err) => {
  //   console.log(err);
  // })

import json
import numpy as np

with open('data.json', 'r') as f:  
    data = json.load(f)

data = np.array(data['data'])

data = data.T
phrases = data[0]

intent = "call"
synonyms = [intent, "ring", "teams call", "contact", "phone"]

temp_data = []
for synonym in synonyms:
    for phrase in phrases:
        new_phrase = phrase.replace("call", synonym)
        temp_data.append([new_phrase, intent])


intent = "chat"
synonyms = [intent, "text", "message"]

for synonym in synonyms:
    for phrase   in phrases:
        new_phrase = phrase.replace("call", synonym)
        temp_data.append([new_phrase, intent])


data_to_write = {"data": temp_data}

with open("generated_data.json", "w") as f:
    json.dump(data_to_write, f)


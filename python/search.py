import os
DOGS_PATH = '/home/jonathan/w+p/production/knowledgebase/text_docs_filtered/dogs'
CATS_PATH = '/home/jonathan/w+p/production/knowledgebase/text_docs_filtered/cats'
DOGS_DOCS = os.listdir(DOGS_PATH)
CATS_DOCS = os.listdir(CATS_PATH)
word = input("Enter word to search: ")
for x in DOGS_DOCS:
    file_lines = open(os.path.join(DOGS_PATH,x), "r").readlines()
    for y in file_lines:
        if word in y or word.lower() in y:
            print(x)
for x in CATS_DOCS:
    file_lines = open(os.path.join(CATS_PATH,x), "r").readlines()
    for y in file_lines:
        if word in y or word.lower() in y:
            print(x)
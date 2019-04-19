import csv
with open('diagnosis-training.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    f = open("training-words.txt", "w+")
    for row in csv_reader:
        for record in row:
            if record != '\n' and len(record) > 0 and record != '' and record != ',' and record != ' ' and record != None:
                f.write(record + '\n')
    f.close()
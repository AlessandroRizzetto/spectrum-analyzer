import os
import json
import time

def write_json(config, filename='config.json'):
    with open(filename, 'w') as f:
        json.dump(config, f, indent=4)

def configuration():
    print("Please enter the following information")
    print("What is the name of your sensor?")
    sensor_name = input()
    print("Where are you located?")
    location = input()
    print("We need to know the latitude and longitude of your location")
    latitude = input("Latitude: ")
    longitude = input("Longitude: ")
    config = {
    "name": sensor_name,
    "location": location,
    "latitude": latitude,
    "longitude": longitude,
    "isnew": "True"
    }
    return config

def load_data():
    json_data = open('config.json')
    data = json.load(json_data)
    if data['name'] == "":
        write_json(configuration())


if __name__ == "__main__":
    #while True:
        load_data()
        #print(text.decode('utf-8'))
        #os.path.dirname(os.path.abspath(__file__))
        # makeCSV = os.popen('rtl_power -f 118M:137M:8k -g 50 -i 10 -e 1h scan.csv').read()
        # print(makeCSV)
        # time.sleep(120)
        # makePNG = os.popen('./gopow -i /home/pi/rtlizer/rtl-sdr/build/scan.csv /home/pi/scan.csv-go.png').read()
        # print(makePNG)
        # time.sleep(20)
        upload = os.popen('python3 upload.py').read()
        print(upload)
        #ToDo: Add a way to delete the scan.csv and scan.csv-go.png files

        #time.sleep(20)


        
    

    
    
    




#
#var = input("Please enter something: ")
#print("You entered: " + var)

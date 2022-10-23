import os
import json


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
    load_data()
    upload = os.popen('python3 upload.py').read()
    print(upload)
    
    




#
#var = input("Please enter something: ")
#print("You entered: " + var)

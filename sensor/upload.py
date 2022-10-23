#install tqdm library to show progress bar

# UPLOAD_FOLDER = '/home/ale/my-app/server/upload/'

import socket
import tqdm
import os
import json

def write_json(config, filename='config.json'):
    with open(filename, 'w') as f:
        json.dump(config, f, indent=4)

SEPARATOR = "<SEPARATOR>"
BUFFER_SIZE = 4096 # send 4096 bytes each time step
# the ip address or hostname of the server
host = "192.168.0.34"
# the port, let's use 9000
port = 9000
# the name of file we want to send, make sure it exists
filename = "Trento.png"
# get the file size
filesize = os.path.getsize(filename)
# get data from config.json
json_data = open('config.json')
data = json.load(json_data)
sensor_name = data['name']
location = data['location']
latitude = data['latitude']
longitude = data['longitude']
isnew = data['isnew']
# create the client socket
s = socket.socket()
print(f"[+] Connecting to {host}:{port}")
s.connect((host, port))
print("[+] Connected.")
# send the filename and filesize
s.send(f"{filename}{SEPARATOR}{filesize}{SEPARATOR}{sensor_name}{SEPARATOR}{location}{SEPARATOR}{latitude}{SEPARATOR}{longitude}{SEPARATOR}{isnew}".encode())
# start sending the file
progress = tqdm.tqdm(range(filesize), f"Sending {filename}", unit="B", unit_scale=True, unit_divisor=1024)
with open(filename, "rb") as f:
    while True:
        # read the bytes from the file
        bytes_read = f.read(BUFFER_SIZE)
        if not bytes_read:
            # file transmitting is done
            break
        # we use sendall to assure transimission in 
        # busy networks
        s.sendall(bytes_read)
        # update the progress bar
        progress.update(len(bytes_read))
#update config.json
with open('config.json', 'r') as f:
        oldsensor = json.load(f)
        oldsensor['isnew'] = "False"
write_json(oldsensor)
# close the socket
s.close()
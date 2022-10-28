from http import server
import tqdm
import os
import json
import dbFunction as db
from http.server import BaseHTTPRequestHandler, HTTPServer


class Myserver(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        return
    def do_POST(self):
        self.send_response(200)
        print ("POST request received")
        text = self.rfile.read(int(self.headers['Content-Length']))
        print(text.decode('utf-8'))
        text = text.decode('utf-8')
        text = json.loads(text)
        db.read_data(text["sensor"])
        return
    def do_OPTIONS(self):
        self.send_response(200)
        print ("OPTIONS request received")
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')  
        self.end_headers()
        return

if __name__ == "__main__":
    server = HTTPServer(('192.168.0.34', 8080), Myserver)
    print('Starting server, use <Ctrl-C> to stop')
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
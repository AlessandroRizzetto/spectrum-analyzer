#!/usr/bin/env python
from http.server import BaseHTTPRequestHandler, HTTPServer
import os
class MyServer(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        return
    def do_POST(self):
        self.send_response(200)
        print ("POST request received")
        return

if __name__ == '__main__':
# Creiamo un oggetto HTTPServer che ascolterà sulla porta 9000
    server = HTTPServer(('192.168.0.34', 8080), MyServer)
    print('Server in esecuzione...')
# Avvio server
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
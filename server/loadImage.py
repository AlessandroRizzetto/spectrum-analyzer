import dbFunction as db
import sys

sensorID = sys.argv[1]
db.read_data(sensorID)

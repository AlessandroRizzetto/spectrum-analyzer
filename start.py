import os

print('Welcome to Spectrum Analyzer!')
print('')
print('Before starting, is necessary to acquire some data.')
print('What is the name of your sensor?')
sensor_name = input()
print('Where are you located?')
location = input()
print('We need to know the latitude and longitude of your location.')
latitude = input('Latitude: ')
longitude = input('Longitude: ')
print('What is the name of your antenna?')
antenna_name = input()

upload = os.popen('python3 upload.py').read()

#rtl_power -f 118M:137M:8k -g 50 -i 10 -e 1h airband.csv
#./gopow -i /home/pi/rtlizer/rtl-sdr/build/fm_band.csv /home/pi/fm.csv-go.png

# spectrum-analyzer

configurazione server:
npm install
npm start

comandi base per acquisizione dati e per waterfall
rtl_power -f 118M:137M:8k -g 50 -i 10 -e 1h airband.csv
./gopow -i /home/pi/rtlizer/rtl-sdr/build/fm_band.csv /home/pi/fm.csv-go.png

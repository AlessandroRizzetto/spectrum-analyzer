import mysql.connector
connection = mysql.connector.connect(host='localhost',
                                        database='spectrum',
                                        user='root',
                                        password='password')
cursor = connection.cursor()
# create table query
create_table = """CREATE TABLE spectrumTable(id INT AUTO_INCREMENT PRIMARY KEY,\
sensorID VARCHAR (255) NOT NULL, waterfall LONGBLOB NOT NULL) """

# Execute the create_table query first
cursor.execute(create_table)
# printing successful message
print("Table created Successfully")
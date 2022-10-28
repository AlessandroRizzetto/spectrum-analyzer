import mysql.connector
#need to install mysql connector
 
# Convert images or files data to binary format
def convert_data(file_name):
    with open(file_name, 'rb') as file:
        binary_data = file.read()
    return binary_data
 
# Insert data into table
def insert_data(sensorID, image):
    try:
        connection = mysql.connector.connect(host='localhost',
                                             database='spectrum',
                                             user='root',
                                             password='password')
        cursor = connection.cursor()
        # Convert data into tuple format
        waterfall = convert_data(image)
        insert_blob_tuple = (sensorID, waterfall)
        # Convert data into binary format
        insert_blob = """ INSERT INTO spectrumTable
                          (sensorID, waterfall) VALUES (%s,%s)"""
 
        result = cursor.execute(insert_blob, insert_blob_tuple)
        connection.commit()
        print("Image inserted successfully as a BLOB into spectrumTable", result)
    except mysql.connector.Error as error:
        print("Failed inserting BLOB data into MySQL table {}".format(error))
    finally:
        if (connection.is_connected()):
            cursor.close()
            connection.close()
            print("MySQL connection is closed")
 
 # Update data into table
def update_data(sensorID, image):
    try:
        connection = mysql.connector.connect(host='localhost',
                                             database='spectrum',
                                             user='root',
                                             password='password')
        cursor = connection.cursor()
        # Convert data into tuple format
        waterfall = convert_data(image)
        update_blob_tuple = (waterfall, sensorID)
        # Convert data into binary format
        update_blob = """ UPDATE spectrumTable
                          SET waterfall = %s WHERE sensorID = %s"""
 
        result = cursor.execute(update_blob, update_blob_tuple)
        connection.commit()
        print("Image updated successfully as a BLOB into spectrumTable", result)
    except mysql.connector.Error as error:
        print("Failed updating BLOB data into MySQL table {}".format(error))
    finally:
        if (connection.is_connected()):
            cursor.close()
            connection.close()
            print("MySQL connection is closed")

# Read data from table
def read_data(sensorID):
    try:
        connection = mysql.connector.connect(host='localhost',
                                             database='spectrum',
                                             user='root',
                                             password='password')
        cursor = connection.cursor()
        sql_fetch_blob_query = """SELECT * from spectrumTable where sensorID = %s"""
        cursor.execute(sql_fetch_blob_query, (sensorID,))
        record = cursor.fetchall()
        for row in record:
            print("Id = ", row[0], )
            print("SensorID = ", row[1])
            image = row[2]
            print("Storing image on disk \n")
            with open("/home/ale/spectrum-analyzer/public/images/" + sensorID + ".png", 'wb') as file:
                file.write(image)
    except mysql.connector.Error as error:
        print("Failed to read BLOB data from MySQL table {}".format(error))
    finally:
        if (connection.is_connected()):
            cursor.close()
            connection.close()
            print("MySQL connection is closed")
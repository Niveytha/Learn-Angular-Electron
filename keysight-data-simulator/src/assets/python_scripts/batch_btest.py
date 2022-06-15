# Second file in folder
# Filename: P1479299-00-D_SPGT19088002596-190503103132-MY58120165-Pass.txt

from datetime import datetime, timedelta
import random

def menu(uutType, uutTypeRev, fixtureID, controller, boardID, startTime, duration, endTime):
    valid = ["1", "2", "3", "4", "5", "6", "7", "0"]
    print("\nBelow are the current values from the file:")
    
    print("\n@BATCH")
    print("1. UUT Type: " + uutType)
    print("2. UUT Type Rev: " + uutTypeRev)
    print("3. Fixture ID: " + fixtureID)
    print("4. Controller: " + controller)

    print("\n@BTEST")
    print("5. Board ID: " + boardID)
    print("6. Start Datetime: " + startTime)
    print("7. Duration: " + duration)
    print("End Datetime: " + endTime)

    print("\n0. Exit")

    while True:
        option = input("\nEnter a value you'd like to change [1, 2, 3, 4, 5, 6, 7, 0]: ")
        if option in valid:
            if option == "0":
                return uutType, uutTypeRev, fixtureID, controller, boardID, startTime, duration, endTime
            
            if option == "1":
                uutType = input("Enter a new UUT Type = ")
            elif option == "2":
                uutTypeRev = input("Enter a new UUT Type Rev = ")
            elif option == "3":
                fixtureID = input("Enter a new Fixture ID = ")
            elif option == "4":
                controller = input("Enter a new Controller = ")
            elif option == "5":
                boardID = input("Enter a new Board ID = ")
            elif option == "6":
                start = datetime.now()
                duration = int(duration)
                print("The current datetime of " + start.strftime("%m/%d/%Y, %H:%M:%S") + " will be used.")
                duration = timedelta(seconds=duration)
                endTime = (start + duration).strftime("%y%m%d%H%M%S")  # !YYMMDDHHMMSS
                startTime = start.strftime("%y%m%d%H%M%S")  # !YYMMDDHHMMSS
                duration = str(duration.seconds).zfill(6)
                print("The new End Datetime is: " + endTime)
            elif option == "7":
                duration = int(input("Enter a new Duration = "))
                duration = timedelta(seconds=duration)
                start = datetime.strptime(startTime, "%y%m%d%H%M%S")
                endTime = (start + duration).strftime("%y%m%d%H%M%S")  # !YYMMDDHHMMSS
                startTime = start.strftime("%y%m%d%H%M%S")  # !YYMMDDHHMMSS
                duration = str(duration.seconds).zfill(6)
                print("The new End Datetime is: " + endTime)
            print("Value successfully changed!")

        else:
            print("Invalid option selected.\n")


try:
    f = open("keysight-data-simulator/python_scripts/i3070_Logs/P1479299-00-D_SPGT19088002596-190503103132-MY58120165-Pass.txt", 'r')
    g = open("keysight-data-simulator/python_scripts/i3070_Logs/output_file.txt", 'w') # !CHANGE FILE NAME ACCORDING TO CHANGES

    lines = f.readlines()

    batchLine = lines[0].split('|')
    btestLine = lines[1].split('|')

    # !Extract initial values
    uutType = batchLine[1]
    uutTypeRev = batchLine[2]
    fixtureID = batchLine[3]
    controller = batchLine[9]

    boardID = btestLine[1]
    startTime = btestLine[3]
    duration = btestLine[4]
    endTime = btestLine[10]
    
    print("Old Start Datetime: " + startTime)
    uutType, uutTypeRev, fixtureID, controller, boardID, startTime, duration, endTime = menu(uutType, uutTypeRev, fixtureID, controller, boardID, startTime, duration, endTime)
    print("New Start Datetime: " + startTime)

    # !Replace with new values
    batchLine[1] = uutType
    batchLine[2] = uutTypeRev
    batchLine[3] = fixtureID
    batchLine[9] = controller

    btestLine[1] = boardID
    btestLine[3] = startTime
    btestLine[4] = duration
    btestLine[10] = endTime

    # !Does not modify original file
    lines[0] = '|'.join(batchLine)
    lines[1] = '|'.join(btestLine)

    for line in lines:
        g.write(line)

    print("Output file has been created!")
except:
    raise Exception("Please recheck @BATCH & @BATCH in file.")
else:
    f.close()
    g.close()
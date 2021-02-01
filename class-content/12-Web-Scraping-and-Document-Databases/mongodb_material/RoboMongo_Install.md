It's useful to have a Graphical User Interface (GUI) to interact with Mongo. A simple, free GUI is RoboMongo. Download here:

Mac/Windows:
Select Robo 3T (*NOT* Studio)
https://robomongo.org/download

To connect to mongodb:

Step 1: (Skip if mongo is already running) start mongodb
Mac: `brew services start mongodb-community@4.2`
Windows: if mongodb was installed it's probably running already

Step 2: Open Robo 3T
Mac users do the following if the application doesn't open:
    * Go to
    System Preferences -> Security & Privacy
    * Select the General tab
    * Allow Robo 3T to be opened

Step 3: Click on `Create` link in dialog box that appears in center of app

Step 4: 
Name: `Local`
Address: `localhost`
Port: `27017`

Hit Save and double click saved connection

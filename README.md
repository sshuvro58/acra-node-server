 ACRA Node Server

Installation
------------

 1. Download and unzip (or git clone) into a directory.
 2. Run "$ npm install"
 3. Configure /acra_server.properties with mongodb, port web, user and password access and email credentials.
 4. Run app via "$ node appAcra"




## Configuring ACRA Class in Android

Add the following dependencies in gradle

 compile 'ch.acra:acra:4.9.0'

```Java

import org.acra.*;
import org.acra.annotation.*;
@ReportsCrashes(formUri = "http://SERVER:PORT_SERVER/logs/NAME_APP", formKey="")
public class MyApplication extends Application {
  @Override
  public void onCreate() {
    // The following line triggers the initialization of ACRA
    ACRA.init(this);
    super.onCreate();
  }
}

```

More information about configuration Android application [here](https://github.com/ACRA/acra/wiki/BasicSetup)

## Config acra_server.properties

```
# CONFIGURATION WEB
# Acra web server port 
port_web = 3000
# Web access user
username = john
# Web acess password
password = john
# Cookie config
key = acraserver
secret = b29a25fe160453b475d4243d12yrty342345752eeaa5bc

# CONFIGURATION MONGODB
# port mongodb
mongodb_port = 27017
# Ip mongodb
mongodb_ip = localhost
# Name Data base
name_database = acraloggerdb


# CONFIGURATION MAIL
# yes or no if want send email if acra error recive
send_mail = yes

# config connection email server
user_mail= your_email@gmail.com
password_mail = password_mail_gmail
host =smtp.gmail.com
ssl = true

# config email
subject = Acra Error Server
from = serveracra@acra.ch
# List emails separate with comma example john@gmail,john2@gmail.com
to = john@mycompany.com,elizabeth@mycompany.com

#config date
date_format=YYYY-MM-DD hh:mm:ss
```




## License
( The MIT License )

Copyright (c) 2016 Mithun Sarker 

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 

 ACRA Node Server





## Configuring ACRA Class in Android

Add the following dependencies in gradle

 - compile 'ch.acra:acra:4.9.0'

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


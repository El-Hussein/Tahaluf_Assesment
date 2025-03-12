** you have to setup yarn first **

/**
** for windows users create two files to generate android app
** first one is "generateAPK.bat" and copy the following command lines 

    cd android
    gradlew assembleRelease
    cd ..

** second one is "generateBundle.bat" and copy the following command lines

    cd android
    gradlew bundleRelease
    cd ..

*/

********************************************************************************
********************************************************************************
********************************************************************************

/**
** for MAC users create two files to generate android app
** first one is "generateAPK" and copy the following command lines 

    cd android
    ./gradlew assembleRelease
    cd ..

** second one is "generateBundle" and copy the following command lines

    cd android
    ./gradlew bundleRelease
    cd ..

*/


## make these file executable
-------------------------------
** chmod +x ./generateAPK
** chmod +x ./generateBundle


********************************************************************************
********************************************************************************
********************************************************************************
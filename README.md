# Image-Processing-API
Inside the assets folder, you can find placeholder images that can be used for testing the application inside the full folder. You can add your desired photos to be tested in the assets/full/ folder.<br>
To run starting unit tests use: npm run test<br>
In the test: the package 'buffer-image-size' is used. It is given the binary data of the image and returns the dimensions of this image.<br>
It is used to test the functionality of the resizing process whether it created a processed image with the correct dimensions or not.<br>
The endpoints of the applications are tested to test the process of creating the processed image and its caching.<br>
To run the server application use: npm run start<br>
To compile the files use : npm run build<br>
Accessing '/' endpoint redirects to the /api route.<br>
Type /api/images followed by the query paramters which contain the filename, the width and the height of the desired processed image.<br>
The package used for the processing is Sharp which includes many functionality including resizing.<br>
Documentations linked on the npmjs.com site for the packages were used as a reference for the code used in this project.<br>

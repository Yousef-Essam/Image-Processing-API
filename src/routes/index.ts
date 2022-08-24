import express from 'express';
import fs from 'fs/promises';
import thumbExists from '../utilities/thumbExists';
import processImage from '../utilities/processImage';

const routes = express.Router();

routes.get('/images', async (req, res) => {
    try {
        const filename = req.query.filename as string;
        const width = Number(req.query.width);
        const height = Number(req.query.height);
        const thumbKey = `${filename}-${width}x${height}.jpg`;

        let processedImg;

        if (!await thumbExists(filename, width, height)) {
            let img = await fs.readFile(`assets/full/${filename}.jpg`);
            processedImg = await processImage(img, width, height);
            fs.writeFile(`assets/thumbs/${thumbKey}`, processedImg);
        } else
            processedImg = await fs.readFile(`assets/thumbs/${thumbKey}`);
        
        res.end(processedImg);
    } catch (err) {
        console.log(err);
        res.send('An error occured during loading the image.');
    }
});

routes.get('/', (req, res) => {
    res.send(`Welcome in the Image Processing Application.<br>
    Please Enter the name of the image you want to process along with the desired dimensions.<br>
    Enter the image information in the following format:<br>
    filename=&lt;filename&gt;&width=&lt;width&gt;&height=&lt;height&gt;`);
});

export default routes;
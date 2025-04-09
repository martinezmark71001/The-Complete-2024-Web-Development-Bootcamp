/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qrImage from 'qr-image';
import fs from 'fs';

inquirer.prompt(
[{
    type: 'input', 
    name: 'content',
    message: 'What is the link?'
}])
.then(answers => {
    var qr_png = qrImage.image(answers.content, {type:'png'}); 
    qr_png.pipe(fs.createWriteStream('QR.png'));
    fs.writeFile('qrcontent.txt',answers.content, (err) => {
        if(err) throw err;
        console.log("The file has been saved!");
    });;
})
.catch(error => {
    console.error(error);
});

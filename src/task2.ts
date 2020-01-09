import { default as csv } from 'csvtojson';
import  fs  from 'fs';

const sourcePath = './src/csv/data.csv';
const destinationPath = './src/file.txt';

interface Book {
    Book: string;
    Author: string;
    Amount: string;
    Price: string;
}

fs.writeFile(destinationPath, "", () => console.log('File cleared!'));
csv()
    .fromFile(sourcePath)
    .subscribe(
        (book: Book) => {
            fs.appendFile(
                destinationPath,
                `{ "book": "${ book.Book }", "author": "${ book.Author }", "price": ${ parseInt(book.Price, 10) } } ` + "\n",
                (error: any) => { if ( error ) throw error })
        },
        (error: any) => console.log(error),
        () => { console.log('Done')})
    .then(() => {});

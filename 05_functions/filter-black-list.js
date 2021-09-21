//Task 1. Black list emails

let addressBook = ['masha@mail.ru', 'kolya@mail.ru', 'petya@mail.ru'];
let blackList = ['masha@mail.ru','petya@mail.ru'];

export default function whiteListEmails(allEmails, blackListEmails) {
    let whiteList= [];
        for (let i=0; i<allEmails.length; i++) {
            if (blackListEmails.includes(allEmails[i])==false) {
                whiteList[i] = allEmails[i];
            } 
        }
    let cleanArray = whiteList.filter(function () { return true });
    return cleanArray;
}

whiteListEmails(addressBook, blackList);


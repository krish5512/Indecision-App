export const isAdult = (age) => {
   if(age > 18) {
       return 'Is Adult';
   }
   else
   {
       return 'Is Not Adult';
   }
}

export const canDrink = (isAdult) => {
    if(isAdult > 21) {
        return 'Can Drink';
    }
    else
    {
        return 'can`t drink';
    }
}


const isSenior = (age) => age>60 ? true : false ;
export default isSenior;